"use client";

import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "../../components/ui/alert-dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Calendar as CalendarComponent } from "../../components/ui/calendar";
import {
  Calendar as CalendarIcon,
  Edit,
  Trash2,
  Eye,
  FilterIcon,
  SquareXIcon,
} from "lucide-react";

/**
 * Reusable DataTable component
 * Props:
 * - columns: array of column definitions
 * - data: array of data
 * - statuses: array of status filter options
 * - actions: object { view, edit, delete, onView, onEdit, onDelete }
 * - pageSize: default page size
 */
export function DataTable({
  columns,
  data,
  statuses = [],
  actions = {},
  pageSize = 10,
}) {
  const [sorting, setSorting] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize,
  });
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(null);

  // Add dynamic Actions column if any action is enabled
  const finalColumns = React.useMemo(() => {
    if (!actions.view && !actions.edit && !actions.delete) return columns;

    return [
      ...columns,
      {
        id: "actions",
        header: "ACTIONS",
        cell: ({ row }) => {
          const record = row.original;
          return (
            <div className="flex gap-2">
              {actions.view && (
                <Button
                  variant="default"
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-500/60 cursor-pointer"
                  onClick={() => actions.onView?.(record)}
                >
                  <Eye className="w-4 h-4 mr-1" />
                </Button>
              )}
              {actions.edit && (
                <Button
                  variant="default"
                  size="sm"
                  className="bg-amber-500 hover:bg-amber-500/60 cursor-pointer"
                  onClick={() => actions.onEdit?.(record)}
                >
                  <Edit className="w-4 h-4 mr-1" />
                </Button>
              )}
              {actions.delete && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="bg-red-500 hover:bg-red-500/60 text-white flex item-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-white rounded-xl shadow-2xl border border-gray-300 p-6">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-xl font-bold text-gray-900">
                        Delete {record.name}?
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-sm text-gray-600 mt-2">
                        This action cannot be undone. It will permanently delete{" "}
                        <span className="font-medium">{record.name}</span>.
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter className="mt-6">
                      <AlertDialogCancel className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md px-4 py-2">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => actions.onDelete?.(record)}
                        className="bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
          );
        },
      },
    ];
  }, [columns, actions]);

  const table = useReactTable({
    data,
    columns: finalColumns,
    state: { sorting, pagination, globalFilter },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, _columnId, filterValue) => {
      const search = filterValue.toLowerCase();
      return Object.keys(row.original).some((key) =>
        String(row.original[key]).toLowerCase().includes(search)
      );
    },
  });

  const statusFilter = table.getColumn("status")?.getFilterValue() || [];

  return (
    <div className="max-h-screen max-w-screen bg-white p-8 rounded-xl mx-auto">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {/* Global search */}
        <Input
          placeholder="Search..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-150 selection:bg-grey-100  selection:text-grey-100 border-black "
        />

        {/* Right side filters */}
        <div className="ml-auto flex items-center gap-3">
          {/* Status filter */}
          {statuses.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-blue-500 hover:bg-blue-500/60 cursor-pointer text-white rounded-md px-4 py-2 font-medium">
                  <FilterIcon /> FILTER
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {statuses.map((status) => (
                  <DropdownMenuCheckboxItem
                    key={status}
                    checked={statusFilter.includes(status)}
                    onCheckedChange={(value) => {
                      let newValues = [...statusFilter];
                      if (value) newValues.push(status);
                      else newValues = newValues.filter((s) => s !== status);
                      table.getColumn("status")?.setFilterValue(newValues);
                    }}
                  >
                    {status}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Date picker filter */}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="bg-blue-500 hover:bg-blue-500/60 cursor-pointer text-white rounded-md px-4 py-2 font-medium">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {selectedDate
                  ? selectedDate
                      .toLocaleDateString("en-GB")
                      .replaceAll("/", "-")
                  : "DATE"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2 data-[side=bottom]:mt-2">
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  if (date) {
                    const filterDate = date.toLocaleDateString("en-CA"); // yyyy-mm-dd for filter
                    table.getColumn("createdAt")?.setFilterValue(filterDate);
                  } else {
                    table.getColumn("createdAt")?.setFilterValue(undefined);
                  }
                }}
                captionLayout="dropdown"
                fromYear={2000}
                toYear={2035}
              />
            </PopoverContent>
          </Popover>

          {/* Clear filters */}
          <Button
            className="bg-red-500 hover:bg-red-500/60 cursor-pointer text-white rounded-md px-4 py-2 font-medium"
            onClick={() => {
              table.getColumn("status")?.setFilterValue([]);
              setSelectedDate(null);
              table.getColumn("createdAt")?.setFilterValue(undefined);
            }}
          >
            <SquareXIcon />
            CLEAR
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <Table className="w-full border-collapse">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-gray-100 text-gray-700"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="px-4 py-3 text-left font-semibold border-b"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-4 py-3 border-b">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={finalColumns.length}
                  className="h-24 text-center italic text-gray-500"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
        <Button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          className="bg-blue-600 hover:bg-blue-800 disabled:bg-gray-400 text-white rounded-md px-3 py-1 text-sm"
        >
          First
        </Button>
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="bg-blue-600 hover:bg-blue-800 disabled:bg-gray-400 text-white rounded-md px-3 py-1 text-sm"
        >
          Previous
        </Button>
        <span className="flex items-center text-sm text-gray-600">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="bg-blue-600 hover:bg-blue-800 disabled:bg-gray-400 text-white rounded-md px-3 py-1 text-sm"
        >
          Next
        </Button>
        <Button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          className="bg-blue-600 hover:bg-blue-800 disabled:bg-gray-400 text-white rounded-md px-3 py-1 text-sm"
        >
          Last
        </Button>

        <select
          className="ml-2 border rounded px-1 py-1"
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[10, 20, 50, 80, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
