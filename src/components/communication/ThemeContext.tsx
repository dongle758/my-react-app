import React, { createContext, useContext } from "react";

export const ThemeContext = createContext<{ theme: 'light' | 'dark'; toggle: () => void }>({ theme: 'light', toggle: () => {} });

export const ThemeViewer: React.FC = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className={`p-3 rounded border ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      当前主题：{theme}
      <button className="ml-2 px-2 py-1 border rounded" onClick={toggle}>切换</button>
    </div>
  );
};