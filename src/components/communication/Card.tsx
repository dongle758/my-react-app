import React from "react";

export const Card: React.FC<{ title: React.ReactNode; children: React.ReactNode }>
= ({ title, children }) => (
  <div className="border rounded p-4">
    <div className="font-semibold mb-2">{title}</div>
    <div>{children}</div>
  </div>
);