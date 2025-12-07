import React from "react";

export const SiblingA: React.FC<{ count: number; onInc: () => void }>
= ({ count, onInc }) => (
  <div className="flex items-center gap-2">
    <span>兄弟共享计数：{count}</span>
    <button className="px-2 py-1 border rounded" onClick={onInc}>+1</button>
  </div>
);