import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Trash2, Clock } from 'lucide-react';

const history = [
  { id: 1, name: '商品名称1', price: 99.00, image: 'https://via.placeholder.com/150x150', time: '2024-01-15 10:30' },
  { id: 2, name: '商品名称2', price: 199.00, image: 'https://via.placeholder.com/150x150', time: '2024-01-14 15:20' },
  { id: 3, name: '商品名称3', price: 299.00, image: 'https://via.placeholder.com/150x150', time: '2024-01-13 09:15' },
];

export const History = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">我的足迹</h2>
        <Button variant="outline" size="sm">
          <Trash2 className="h-4 w-4 mr-2" />
          清空足迹
        </Button>
      </div>

      {history.length > 0 ? (
        <div className="space-y-4">
          {history.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-0">
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
              </Link>
              <div className="flex-1">
                <Link to={`/products/${item.id}`}>
                  <h3 className="font-semibold hover:text-primary mb-2">{item.name}</h3>
                </Link>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{item.time}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-red-600 font-bold text-lg mb-2">¥{item.price}</p>
                <Button size="sm" variant="outline">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  加入购物车
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Clock className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">还没有浏览记录</p>
        </div>
      )}
    </div>
  );
};

