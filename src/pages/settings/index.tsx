import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Tls from '@/components/Tls.tsx'
import { Card } from '@/components/communication/Card';
import { CounterRenderProps } from '@/components/communication/CounterRenderProps';
import { FocusInput } from '@/components/communication/FocusInput';
import { SiblingA } from '@/components/communication/SiblingA';
import { SiblingB } from '@/components/communication/SiblingB';
import { ThemeContext, ThemeViewer } from '@/components/communication/ThemeContext';

// 简易事件总线（发布/订阅）
type BusHandler = (payload: any) => void;
const bus = (() => {
  const handlers = new Map<string, Set<BusHandler>>();
  return {
    on(event: string, handler: BusHandler) {
      if (!handlers.has(event)) handlers.set(event, new Set());
      handlers.get(event)!.add(handler);
      // 返回 void 的清理函数，避免 boolean 类型不匹配 useEffect 的 Destructor 类型
      return () => { handlers.get(event)?.delete(handler); };
    },
    emit(event: string, payload: any) {
      handlers.get(event)?.forEach(h => h(payload));
    }
  };
})();

export const ST: React.FC = () => {
  // 1. 子传父（通过回调）
  const [parentMsg, setParentMsg] = useState<string>('');
  const handleChildClick = (dataFromChild: string) => {
    setParentMsg(dataFromChild);
  };

  // 2. 兄弟通信（提升状态）
  const [count, setCount] = useState(0);
  const inc = () => setCount(c => c + 1);

  // 3. URL 查询参数
  const [searchParams, setSearchParams] = useSearchParams();

  // 4. Context 状态
  const [themeState, setThemeState] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setThemeState(t => (t === 'light' ? 'dark' : 'light'));

  // 5. 命令式通信（ref）
  const focusRef = useRef<{ focus: () => void }>(null);

  // 6. 事件总线
  const [busMsg, setBusMsg] = useState<string>('');
  React.useEffect(() => {
    const off = bus.on('ping', payload => setBusMsg(String(payload)));
    return off;
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">组件通信示例</h1>

      <Card title="1. 父传子 + 子传父（props + 回调）">
        <div className="space-y-2">
          <Tls onClickHandler={handleChildClick} />
          <div>父组件收到：{parentMsg || '（等待子组件点击）'}</div>
        </div>
      </Card>

      <Card title="2. 兄弟组件通信（提升状态到父组件）">
        <div className="space-y-2">
          <SiblingA count={count} onInc={inc} />
          <SiblingB count={count} />
        </div>
      </Card>

      <Card title="3. Context 跨层级通信">
        <ThemeContext.Provider value={{ theme: themeState, toggle: toggleTheme }}>
          <ThemeViewer />
        </ThemeContext.Provider>
      </Card>

      <Card title="4. 通过 URL 查询参数通信（React Router）">
        <div className="space-y-2">
          <div>当前 query 中的 foo：{searchParams.get('foo') ?? '无'}</div>
          <button className="px-2 py-1 border rounded" onClick={() => setSearchParams({ foo: String(Math.floor(Math.random() * 100)) })}>设置 foo</button>
        </div>
      </Card>

      <Card title="5. 事件总线（发布/订阅）">
        <div className="space-y-2">
          <div>收到的消息：{busMsg || '（尚未收到）'}</div>
          <button className="px-2 py-1 border rounded" onClick={() => bus.emit('ping', 'Hello from bus!')}>发送 bus 消息</button>
        </div>
      </Card>

      <Card title="6. forwardRef + useImperativeHandle（命令式通信）">
        <div className="space-y-2">
          <FocusInput ref={focusRef} />
          <button className="px-2 py-1 border rounded" onClick={() => focusRef.current?.focus()}>父组件调用子方法 focus()</button>
        </div>
      </Card>

      <Card title="7. Render Props（函数作为子组件）">
        <CounterRenderProps>
          {(c, inc) => (
            <div className="flex items-center gap-2">
              <span>计数：{c}</span>
              <button className="px-2 py-1 border rounded" onClick={inc}>+1</button>
            </div>
          )}
        </CounterRenderProps>
      </Card>

      <Card title="8. children 组合模式（插槽式）">
        <Card title={<span>这是外层容器的标题</span>}>
          <div className="text-sm text-muted-foreground">子内容通过 children 组合注入</div>
        </Card>
      </Card>
    </div>
  );
}