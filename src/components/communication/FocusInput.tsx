import React, { forwardRef, useImperativeHandle, useRef } from "react";

export const FocusInput = forwardRef<{ focus: () => void }, {}>((_props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));
  return <input ref={inputRef} className="border px-2 py-1 rounded w-full" placeholder="可被父组件调用 focus()" />;
});