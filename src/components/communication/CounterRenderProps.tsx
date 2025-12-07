import React, { useState } from "react";

export const CounterRenderProps: React.FC<{ children: (count: number, inc: () => void) => React.ReactNode }>
= ({ children }) => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(c => c + 1);
  return <>{children(count, inc)}</>;
};