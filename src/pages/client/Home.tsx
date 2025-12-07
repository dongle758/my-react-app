import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Clock } from 'lucide-react';

// 轮播图数据
const banners = [
  { id: 1, image: 'https://via.placeholder.com/1200x400', title: '春季新品上市', link: '/products?category=spring' },
  { id: 2, image: 'https://via.placeholder.com/1200x400', title: '限时秒杀', link: '/flash-sale' },
  { id: 3, image: 'https://via.placeholder.com/1200x400', title: '满减优惠', link: '/promotion' },
];

// 推荐商品数据
const recommendedProducts = [
  { id: 1, name: '商品名称1', price: 99.00, originalPrice: 199.00, image: 'https://via.placeholder.com/300x300', rating: 4.5, sales: 1000 },
  { id: 2, name: '商品名称2', price: 199.00, originalPrice: 299.00, image: 'https://via.placeholder.com/300x300', rating: 4.8, sales: 2000 },
  { id: 3, name: '商品名称3', price: 299.00, originalPrice: 399.00, image: 'https://via.placeholder.com/300x300', rating: 4.6, sales: 1500 },
  { id: 4, name: '商品名称4', price: 399.00, originalPrice: 499.00, image: 'https://via.placeholder.com/300x300', rating: 4.7, sales: 800 },
];

// 秒杀商品数据
const flashSaleProducts = [
  { id: 1, name: '秒杀商品1', price: 49.00, originalPrice: 199.00, image: 'https://via.placeholder.com/200x200', timeLeft: '02:30:15' },
  { id: 2, name: '秒杀商品2', price: 79.00, originalPrice: 299.00, image: 'https://via.placeholder.com/200x200', timeLeft: '02:30:15' },
  { id: 3, name: '秒杀商品3', price: 99.00, originalPrice: 399.00, image: 'https://via.placeholder.com/200x200', timeLeft: '02:30:15' },
  { id: 4, name: '秒杀商品4', price: 129.00, originalPrice: 499.00, image: 'https://via.placeholder.com/200x200', timeLeft: '02:30:15' },
];

// 楼层商品数据
const floorProducts = [
  { category: '电子产品', products: recommendedProducts },
  { category: '服装配饰', products: recommendedProducts },
  { category: '家居用品', products: recommendedProducts },
];

export const Home = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* 轮播 Banner */}
      <section className="mb-8">
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex">
            {banners.map((banner, index) => (
              <Link
                key={banner.id}
                to={banner.link}
                className="flex-shrink-0 w-full h-full"
                style={{ transform: `translateX(${-index * 100}%)` }}
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 秒杀专区 */}
      <section className="mb-8 bg-red-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-red-600">限时秒杀</h2>
            <div className="flex items-center gap-2 text-red-600">
              <Clock className="h-5 w-5" />
              <span className="font-mono">02:30:15</span>
            </div>
          </div>
          <Link to="/flash-sale" className="text-red-600 hover:underline">
            更多 &gt;
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {flashSaleProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-bold">¥{product.price}</span>
                <span className="text-gray-400 text-sm line-through">¥{product.originalPrice}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 推荐商品区 */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">推荐商品</h2>
          <Link to="/products" className="text-primary hover:underline">
            更多 &gt;
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recommendedProducts.map((product) => (
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
      </section>

      {/* 活动广告位 */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/promotion" className="relative h-32 rounded-lg overflow-hidden hover:opacity-90">
            <img
              src="https://via.placeholder.com/400x200"
              alt="活动1"
              className="w-full h-full object-cover"
            />
          </Link>
          <Link to="/promotion" className="relative h-32 rounded-lg overflow-hidden hover:opacity-90">
            <img
              src="https://via.placeholder.com/400x200"
              alt="活动2"
              className="w-full h-full object-cover"
            />
          </Link>
          <Link to="/promotion" className="relative h-32 rounded-lg overflow-hidden hover:opacity-90">
            <img
              src="https://via.placeholder.com/400x200"
              alt="活动3"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </section>

      {/* 楼层商品区 */}
      {floorProducts.map((floor, index) => (
        <section key={index} className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{floor.category}</h2>
            <Link to={`/categories/${floor.category}`} className="text-primary hover:underline">
              更多 &gt;
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {floor.products.map((product) => (
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
        </section>
      ))}
    </div>
  );
};

