"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { RefreshCw } from "lucide-react";

export default function LayoutPage({ title, children, onRefresh }) {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true);

      if (typeof onRefresh === "function") {
        await onRefresh();
      } else {
        // Trigger local rerender (useful when no manual refresh logic)
        setRefreshKey((k) => k + 1);
        // Simulate short delay for animation
        await new Promise((r) => setTimeout(r, 800));
      }
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="flex flex-col max-h-screen w-screen bg-white overflow-hidden rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b shadow-sm bg-white shrink-0">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

        <Button
          variant="outline"
          onClick={handleRefresh}
          disabled={isRefreshing}
          title="Refresh"
          className={`flex items-center transition-all ${
            isRefreshing ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          <RefreshCw
            className={`h-4 w-4 mr-2 transition-transform duration-500 ${
              isRefreshing ? "animate-spin" : ""
            }`}
          />
          {isRefreshing ? "Refreshing..." : "Refresh"}
        </Button>
      </div>

      {/* Scrollable content */}
      <div
        key={refreshKey}
        className="flex-1 overflow-y-auto px-8 py-6 bg-gray-50"
      >
        {children}
      </div>
    </div>
  );
}
