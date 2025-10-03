import { useState } from "react";
import { activityTree } from "../../assets/data/activitiesData";

export default function MultiColumnTreeExplorer() {
    const [openFolders, setOpenFolders] = useState({});

    const toggleFolder = (nodeId) => {
        setOpenFolders((prev) => ({
            ...prev,
            [nodeId]: !prev[nodeId],
        }));
    };

    const buildColumns = (nodes) => {
        const columns = [];
        let currentNodes = nodes;

        while (currentNodes && currentNodes.length > 0) {
            columns.push(
                <div
                    key={columns.length}
                    className="flex flex-col border-r border-gray-300 p-3 min-w-[200px] bg-white shadow-md rounded-lg transition-transform duration-300"
                >
                    {currentNodes.map((node) => {
                        const isOpen = openFolders[node.id] || false;

                        return (
                            <div
                                key={node.id}
                                className={`cursor-pointer p-2 flex items-center gap-2 rounded-lg transition-all duration-300
                  ${isOpen
                                        ? "bg-gradient-to-r from-blue-200 to-blue-100 font-semibold shadow-inner"
                                        : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100"
                                    }`}
                                onClick={() =>
                                    node.children.length > 0 && toggleFolder(node.id)
                                }
                            >
                                {/* Folder/File icon with rotation */}
                                {node.children.length > 0 ? (
                                    <span
                                        className={`text-lg transform transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"
                                            }`}
                                    >
                                        ▶️
                                    </span>
                                ) : (
                                    <span className="text-gray-500 text-lg">📄</span>
                                )}
                                <span className="truncate">{node.title}</span>
                            </div>
                        );
                    })}
                </div>
            );

            // show children of first open folder in this column
            const openNode = currentNodes.find((n) => openFolders[n.id]);
            currentNodes = openNode ? openNode.children : [];
        }

        return columns;
    };

    return (
        <div className="min-h-screen bg-blue-100 py-8 px-4 sm:px-6 lg:px-8 rounded-lg ">
            <div>
                <h1 className="text-2xl font-bold mb-6 text-center bg-white shadow-lg rounded-lg py-4 px-8">
                    ALL ACTIVIES
                </h1>
            </div>

            <div className="min-h-screen  flex border rounded-lg shadow-md overflow-x-auto bg-gray-50 p-2 gap-2 " >
                {buildColumns(activityTree)}
            </div>

        </div>
    );
}
