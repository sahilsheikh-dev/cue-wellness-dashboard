"use client";

import { useEffect, useMemo, useState } from "react";
import {
  listRootActivities,
  listChildren,
  createActivity,
  updateActivityTitle,
  deleteActivity,
} from "../../services/activityService/activityService";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Progress } from "../../components/ui/progress";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../../components/ui/dialog";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "../../components/ui/alert-dialog";

import {
  ChevronRight,
  Folder,
  FileText,
  Plus,
  Edit3,
  Trash2,
  RefreshCw,
} from "lucide-react";
import LayoutPage from "../../components/layout/layoutPage";

/**
 * Activities Explorer with CRUD
 * - Fixed column width; long titles wrap (no truncation)
 * - Row actions (Update/Delete) + Chevron aligned on the right
 * - Login-like top progress bar (no loading text)
 */

export default function AllActivities() {
  // cache children per parent; null key holds roots
  const [cache, setCache] = useState({});
  // path of selected nodes (one per depth/column)
  const [selectedPath, setSelectedPath] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  // progress bar like login
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);

  // dialogs state
  const [addOpen, setAddOpen] = useState(false);
  const [renameOpen, setRenameOpen] = useState(false);

  // which parent will the "Add" dialog create under? (null = root)
  const [addParentId, setAddParentId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  // delete confirm
  const [deleteTarget, setDeleteTarget] = useState(null);

  // progress animation
  useEffect(() => {
    let t;
    if (busy) {
      setProgress(0);
      t = setInterval(() => {
        setProgress((p) => (p >= 90 ? p : p + Math.random() * 10));
      }, 250);
    } else {
      setProgress(100);
      const end = setTimeout(() => setProgress(0), 400);
      return () => clearTimeout(end);
    }
    return () => clearInterval(t);
  }, [busy]);

  // initial load: roots
  useEffect(() => {
    (async () => {
      setBusy(true);
      try {
        const roots = await listRootActivities();
        setCache((prev) => ({ ...prev, null: roots }));
      } catch (e) {
        console.error("Failed to load roots", e);
        alert(e?.response?.data?.message || "Failed to load activities");
      } finally {
        setBusy(false);
      }
    })();
  }, []);

  const roots = cache?.null || [];

  // open a node at specific column index
  const openNode = async (node, columnIdx) => {
    const newPath = selectedPath.slice(0, columnIdx);
    newPath[columnIdx] = node;
    setSelectedPath(newPath);
    setSelectedNode(node);

    if (!cache[node._id]) {
      setBusy(true);
      try {
        const kids = await listChildren(node._id);
        setCache((prev) => ({ ...prev, [node._id]: kids }));
      } catch (e) {
        console.error("Failed to load children", e);
        alert(e?.response?.data?.message || "Failed to load children");
      } finally {
        setBusy(false);
      }
    }
  };

  const handleRootClick = (node) => openNode(node, 0);

  // build columns: first roots, then each selected node's children
  const columns = useMemo(() => {
    const cols = [{ key: "root", nodes: roots, parentIdForAdd: null }];

    selectedPath.forEach((node) => {
      cols.push({
        key: node._id,
        nodes: cache[node._id] || [],
        parentIdForAdd: node._id, // Add button here adds under this node
      });
    });

    return cols;
  }, [roots, selectedPath, cache]);

  // ----- CRUD -----

  // Open Add modal for a given parent (null => root)
  const openAddForParent = (parentId) => {
    setAddParentId(parentId ?? null);
    setNewTitle("");
    setAddOpen(true);
  };

  // Open Rename modal for a node
  const openRenameForNode = (node) => {
    setSelectedNode(node);
    setNewTitle(node?.title || "");
    setRenameOpen(true);
  };

  const doCreate = async () => {
    if (!newTitle.trim()) {
      alert("Title is required");
      return;
    }
    setBusy(true);
    try {
      const created = await createActivity({
        title: newTitle.trim(),
        parent_id: addParentId || null,
      });

      if (addParentId) {
        // add to parent's children list
        setCache((prev) => {
          const next = { ...prev };
          next[addParentId] = [...(next[addParentId] || []), created].sort(
            (a, b) => (a.title || "").localeCompare(b.title || "")
          );
          // ensure parent shows it has children
          Object.keys(next).forEach((k) => {
            next[k] = (next[k] || []).map((n) =>
              n._id === addParentId ? { ...n, contains_subtopic: true } : n
            );
          });
          return next;
        });
      } else {
        // add to roots
        setCache((prev) => {
          const updated = [...(prev.null || []), created].sort((a, b) =>
            (a.title || "").localeCompare(b.title || "")
          );
          return { ...prev, null: updated };
        });
      }

      setAddOpen(false);
      setNewTitle("");
    } catch (e) {
      console.error("Create failed", e);
      alert(e?.response?.data?.message || "Create failed");
    } finally {
      setBusy(false);
    }
  };

  const doRename = async () => {
    if (!selectedNode) return;
    if (!newTitle.trim()) {
      alert("Title is required");
      return;
    }
    setBusy(true);
    try {
      const updated = await updateActivityTitle(
        selectedNode._id,
        newTitle.trim()
      );

      // update caches
      setCache((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((k) => {
          next[k] = (next[k] || []).map((n) =>
            n._id === updated._id ? { ...n, title: updated.title } : n
          );
        });
        return next;
      });

      // update paths/selection
      setSelectedPath((prev) =>
        prev.map((n) =>
          n._id === updated._id ? { ...n, title: updated.title } : n
        )
      );
      setSelectedNode((prev) =>
        prev && prev._id === updated._id
          ? { ...prev, title: updated.title }
          : prev
      );

      setRenameOpen(false);
      setNewTitle("");
    } catch (e) {
      console.error("Rename failed", e);
      alert(e?.response?.data?.message || "Rename failed");
    } finally {
      setBusy(false);
    }
  };

  const doDelete = async () => {
    if (!deleteTarget) return;
    setBusy(true);
    try {
      await deleteActivity(deleteTarget._id);

      setCache((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((k) => {
          next[k] = (next[k] || []).filter((n) => n._id !== deleteTarget._id);
        });
        return next;
      });

      // cut selection path if deleted one is within path
      setSelectedPath((prev) => {
        const idx = prev.findIndex((n) => n._id === deleteTarget._id);
        return idx === -1 ? prev : prev.slice(0, idx);
      });

      if (selectedNode && selectedNode._id === deleteTarget._id) {
        setSelectedNode(null);
      }
    } catch (e) {
      console.error("Delete failed", e);
      alert(e?.response?.data?.message || "Delete failed");
    } finally {
      setBusy(false);
      setDeleteTarget(null);
    }
  };

  const refreshCurrent = async () => {
    setBusy(true);
    try {
      if (!selectedNode) {
        const roots = await listRootActivities();
        setCache((prev) => ({ ...prev, null: roots }));
      } else {
        const kids = await listChildren(selectedNode._id);
        setCache((prev) => ({ ...prev, [selectedNode._id]: kids }));
      }
    } catch (e) {
      console.error("Refresh failed", e);
      alert(e?.response?.data?.message || "Refresh failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <LayoutPage title="All Activities">
      {/* Columns */}
      <div className="flex overflow-x-auto p-2 gap-3">
        {/* Column 0: Roots */}
        <Column
          title="Root"
          nodes={roots}
          selectedId={selectedPath[0]?._id}
          onClickItem={handleRootClick}
          parentIdForAdd={null}
          onAddClick={() => openAddForParent(null)}
          onRenameClick={(node) => openRenameForNode(node)}
          onDeleteClick={(node) => setDeleteTarget(node)}
        />

        {/* Subsequent columns */}
        {selectedPath.map((node, idx) => {
          const nodes = cache[node._id] || [];
          const selectedId = selectedPath[idx + 1]?._id;
          const onClickItem = (childNode) => openNode(childNode, idx + 1);

          return (
            <Column
              key={node._id}
              title={`Level ${idx + 2}`}
              nodes={nodes}
              selectedId={selectedId}
              onClickItem={onClickItem}
              parentIdForAdd={node._id}
              onAddClick={() => openAddForParent(node._id)}
              onRenameClick={(n) => openRenameForNode(n)}
              onDeleteClick={(n) => setDeleteTarget(n)}
            />
          );
        })}
      </div>
      {/* Add Modal */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle>
              {addParentId ? "Add Sub-Activity" : "Add Root Activity"}
            </DialogTitle>
            <DialogDescription>
              {addParentId
                ? "This will be created under the selected parent."
                : "This will be created as a root activity."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <label className="text-sm">Title</label>
            <Input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter title"
            />
          </div>
          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              onClick={doCreate}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* Update Modal */}
      <Dialog open={renameOpen} onOpenChange={setRenameOpen}>
        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle>Update Activity</DialogTitle>
            <DialogDescription>
              {selectedNode ? `Current: ${selectedNode.title}` : ""}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <label className="text-sm">New title</label>
            <Input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter new title"
            />
          </div>
          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              onClick={doRename}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Update
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* Delete Confirm */}
      <AlertDialog
        open={!!deleteTarget}
        onOpenChange={(v) => !v && setDeleteTarget(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete “{deleteTarget?.title}”?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
              {deleteTarget?.layer === 1
                ? " Since this is a root activity, its sub-activities will also be removed."
                : ""}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={doDelete}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </LayoutPage>
  );
}

/* -------------------- Column component -------------------- */
function Column({
  title,
  nodes,
  selectedId,
  onClickItem,
  parentIdForAdd,
  onAddClick,
  onRenameClick,
  onDeleteClick,
}) {
  return (
    // Fixed width column; horizontal scrollable container handles overflow
    <div className="w-[360px] min-w-[360px] bg-white rounded-lg border p-2">
      {/* Section header with Add button */}
      <div className="flex items-center justify-between px-2 py-1">
        <div className="text-xs font-semibold text-gray-500 uppercase">
          {title}
        </div>
        <Button
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={onAddClick}
          title={parentIdForAdd ? "Add Sub-Activity" : "Add Root Activity"}
        >
          <Plus className="h-4 w-4 mr-1" />
          Add
        </Button>
      </div>

      <div className="mt-1 flex flex-col">
        {nodes.length === 0 ? (
          <div className="px-2 py-2 text-sm text-gray-500 italic">No items</div>
        ) : (
          nodes.map((n) => {
            const isSelected = selectedId === n._id;
            const hasChildren = !!n.contains_subtopic;

            return (
              <div
                key={n._id}
                className={`group px-2 py-2 rounded-md mb-1 transition ${
                  isSelected ? "bg-blue-100/70" : "hover:bg-gray-50"
                }`}
                title={n.title}
              >
                {/* Row layout: [Left (icon+title click)] [Actions] [Chevron] */}
                <div className="flex items-center gap-2">
                  {/* Clickable area (icon + multiline title) */}
                  <button
                    onClick={() => onClickItem(n)}
                    className="flex-1 flex items-start gap-2 text-left"
                  >
                    {hasChildren ? (
                      <Folder className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
                    ) : (
                      <FileText className="h-4 w-4 text-gray-500 mt-1 shrink-0" />
                    )}
                    <span className="whitespace-normal break-words leading-snug text-sm">
                      {n.title}
                    </span>
                  </button>

                  {/* Row actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    <Button
                      size="icon"
                      variant="ghost"
                      title="Update"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRenameClick(n);
                      }}
                      className="h-8 w-8"
                    >
                      <Edit3 className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-red-600 hover:text-red-700 h-8 w-8"
                      title="Delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteClick(n);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {hasChildren && (
                    <ChevronRight className="h-4 w-4 opacity-70 shrink-0" />
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
