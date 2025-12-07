import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Trash2, Plus, Minus } from 'lucide-react';

const cartItems = [
  { id: 1, name: '商品名称1', price: 99.00, image: 'https://via.placeholder.com/150x150', spec: '红色 / M', quantity: 2, selected: true },
  { id: 2, name: '商品名称2', price: 199.00, image: 'https://via.placeholder.com/150x150', spec: '蓝色 / L', quantity: 1, selected: true },
  { id: 3, name: '商品名称3', price: 299.00, image: 'https://via.placeholder.com/150x150', spec: '绿色 / XL', quantity: 1, selected: false },
];

export const Cart = () => {
  const [items, setItems] = useState(cartItems);
  const [selectAll, setSelectAll] = useState(false);

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const selectedItems = items.filter(item => item.selected);
  const total = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">购物车</h1>

      {items.length > 0 ? (
        <>
          {/* 购物车列表 */}
          <div className="bg-white rounded-lg mb-4">
            {/* 表头 */}
            <div className="flex items-center gap-4 p-4 border-b">
              <Checkbox
                checked={selectAll}
                onCheckedChange={setSelectAll}
              />
              <span className="flex-1">商品信息</span>
              <span className="w-24 text-center">单价</span>
              <span className="w-32 text-center">数量</span>
              <span className="w-24 text-center">小计</span>
              <span className="w-20 text-center">操作</span>
            </div>

            {/* 商品列表 */}
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 border-b">
                <Checkbox
                  checked={item.selected}
                  onCheckedChange={() => toggleItem(item.id)}
                />
                <Link to={`/products/${item.id}`} className="flex items-center gap-4 flex-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold hover:text-primary">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.spec}</p>
                  </div>
                </Link>
                <div className="w-24 text-center">
                  <span className="text-red-600 font-semibold">¥{item.price}</span>
                </div>
                <div className="w-32 flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    readOnly
                    className="w-16 text-center"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="w-24 text-center">
                  <span className="font-semibold">¥{(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div className="w-20 text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* 结算栏 */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-between sticky bottom-0">
            <div className="flex items-center gap-4">
              <Checkbox
                checked={selectAll}
                onCheckedChange={setSelectAll}
              />
              <span>全选</span>
              <Button variant="ghost" onClick={() => setItems([])}>
                删除选中
              </Button>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm text-gray-600">
                  已选 <span className="text-primary font-semibold">{selectedItems.length}</span> 件
                </p>
                <p className="text-xl font-bold text-red-600">
                  合计：¥{total.toFixed(2)}
                </p>
              </div>
              <Button size="lg" asChild>
                <Link to="/checkout">去结算</Link>
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-2">购物车是空的</h2>
          <p className="text-gray-600 mb-6">快去挑选心仪的商品吧</p>
          <Button asChild>
            <Link to="/">去逛逛</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

