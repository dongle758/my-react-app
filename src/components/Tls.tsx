// 接收父组件传递的回调函数作为 prop
export default function ChildButton({ onClickHandler }: { onClickHandler: (message: string) => void }) {
  
  const handleClick = () => {
    // 3. 子组件在事件发生时调用回调函数
    // 并且可以将数据作为参数传回给父组件
    onClickHandler('按钮被点击了!'); 
  };
  
  return (
    <button onClick={handleClick}>点击我</button>
  );
}