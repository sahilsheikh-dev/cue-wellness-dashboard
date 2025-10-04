import React from "react";

export default function InfoCard({ title, children, className = "" }) {
  return (
    <div
      className={`bg-white my-5 p-6 rounded-xl shadow space-y-2 ${className}`}
    >
      {title && <h3 className="font-semibold text-lg">{title}</h3>}
      <div className="space-y-1 text-gray-800">{children}</div>
    </div>
  );
}
