import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Star, SlidersHorizontal } from 'lucide-react';

const products = [
  { id: 1, name: '商品名称1', price: 99.00, originalPrice: 199.00, image: 'https://via.placeholder.com/300x300', rating: 4.5, sales: 1000 },
  { id: 2, name: '商品名称2', price: 199.00, originalPrice: 299.00, image: 'https://via.placeholder.com/300x300', rating: 4.8, sales: 2000 },
  { id: 3, name: '商品名称3', price: 299.00, originalPrice: 399.00, image: 'https://via.placeholder.com/300x300', rating: 4.6, sales: 1500 },
  { id: 4, name: '商品名称4', price: 399.00, originalPrice: 499.00, image: 'https://via.placeholder.com/300x300', rating: 4.7, sales: 800 },
  { id: 5, name: '商品名称5', price: 499.00, originalPrice: 599.00, image: 'https://via.placeholder.com/300x300', rating: 4.9, sales: 3000 },
  { id: 6, name: '商品名称6', price: 599.00, originalPrice: 699.00, image: 'https://via.placeholder.com/300x300', rating: 4.4, sales: 600 },
];

const sortOptions = [
  { value: 'default', label: '默认排序' },
  { value: 'price-asc', label: '价格从低到高' },
  { value: 'price-desc', label: '价格从高到低' },
  { value: 'sales-desc', label: '销量最高' },
  { value: 'rating-desc', label: '好评最多' },
];

export const ProductList = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">商品列表</h1>
      </div>

      <div className="flex gap-6">
        {/* 筛选侧边栏 */}
        <aside className={`w-64 ${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="bg-white rounded-lg p-4 sticky top-20">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5" />
              筛选条件
            </h2>

            {/* 价格筛选 */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">价格区间</h3>
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="最低价"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                  className="w-full"
                />
                <Input
                  type="number"
                  placeholder="最高价"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                  className="w-full"
                />
              </div>
            </div>

            {/* 品牌筛选 */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">品牌</h3>
              <div className="space-y-2">
                {['品牌A', '品牌B', '品牌C'].map((brand) => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 其他筛选 */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">其他</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span>仅看有货</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span>包邮</span>
                </label>
              </div>
            </div>

            <Button className="w-full">应用筛选</Button>
          </div>
        </aside>

        {/* 商品列表 */}
        <div className="flex-1">
          {/* 排序栏 */}
          <div className="bg-white rounded-lg p-4 mb-4 flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              筛选
            </Button>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">排序：</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded px-3 py-1 text-sm"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 商品网格 */}
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

          {/* 分页 */}
          <div className="mt-6 flex justify-center gap-2">
            <Button variant="outline">上一页</Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button key={page} variant={page === 1 ? 'default' : 'outline'}>
                {page}
              </Button>
            ))}
            <Button variant="outline">下一页</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

