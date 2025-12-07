import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

const favorites = [
  { id: 1, name: '商品名称1', price: 99.00, originalPrice: 199.00, image: 'https://via.placeholder.com/200x200' },
  { id: 2, name: '商品名称2', price: 199.00, originalPrice: 299.00, image: 'https://via.placeholder.com/200x200' },
  { id: 3, name: '商品名称3', price: 299.00, originalPrice: 399.00, image: 'https://via.placeholder.com/200x200' },
];

export const Favorites = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">我的收藏</h2>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <Link to={`/products/${item.id}`}>
                  <h3 className="font-semibold mb-2 line-clamp-2 hover:text-primary">
                    {item.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-red-600 font-bold">¥{item.price}</span>
                    <span className="text-gray-400 text-sm line-through ml-2">¥{item.originalPrice}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    加入购物车
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">还没有收藏任何商品</p>
        </div>
      )}
    </div>
  );
};

