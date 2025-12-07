import React from "react";

export const SiblingB: React.FC<{ count: number }>
= ({ count }) => (
  <div>另一个兄弟看到的计数：{count}</div>
);