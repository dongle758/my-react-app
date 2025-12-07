import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, Star, X } from 'lucide-react';

const products = [
  { id: 1, name: '商品名称1', price: 99.00, originalPrice: 199.00, image: 'https://via.placeholder.com/300x300', rating: 4.5, sales: 1000 },
  { id: 2, name: '商品名称2', price: 199.00, originalPrice: 299.00, image: 'https://via.placeholder.com/300x300', rating: 4.8, sales: 2000 },
  { id: 3, name: '商品名称3', price: 299.00, originalPrice: 399.00, image: 'https://via.placeholder.com/300x300', rating: 4.6, sales: 1500 },
];

const hotSearches = ['手机', '电脑', '耳机', '键盘', '鼠标', '显示器'];

export const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('q') || '';
  const [searchHistory, setSearchHistory] = useState<string[]>(['手机', '电脑']);

  const hasResults = products.length > 0;

  return (
    <div className="container mx-auto px-4 py-6">
      {/* 搜索框 */}
      <div className="mb-6">
        <div className="flex gap-2 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="搜索商品..."
              defaultValue={keyword}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <Button>搜索</Button>
        </div>
      </div>

      {hasResults ? (
        <>
          {/* 搜索结果 */}
          <div className="mb-4">
            <p className="text-gray-600">
              找到 <span className="text-primary font-semibold">{products.length}</span> 个相关商品
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-4">
                  <Link to={`/products/${product.id}`}>
                    <h3 className="font-semibold mb-2 line-clamp-2 hover:text-primary">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">已售{product.sales}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-red-600 font-bold text-lg">¥{product.price}</span>
                      <span className="text-gray-400 text-sm line-through ml-2">¥{product.originalPrice}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold mb-2">没有找到相关商品</h2>
          <p className="text-gray-600 mb-6">试试其他关键词吧</p>
          
          {/* 搜索历史 */}
          {searchHistory.length > 0 && (
            <div className="max-w-md mx-auto mb-6">
              <h3 className="text-left font-semibold mb-2">搜索历史</h3>
              <div className="flex flex-wrap gap-2">
                {searchHistory.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    <Link to={`/search?q=${item}`} className="text-sm hover:text-primary">
                      {item}
                    </Link>
                    <button
                      onClick={() => setSearchHistory(searchHistory.filter((_, i) => i !== index))}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 热门搜索 */}
          <div className="max-w-md mx-auto">
            <h3 className="text-left font-semibold mb-2">热门搜索</h3>
            <div className="flex flex-wrap gap-2">
              {hotSearches.map((item) => (
                <Link
                  key={item}
                  to={`/search?q=${item}`}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

