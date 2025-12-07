import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Heart, Share2, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const productImages = [
  'https://via.placeholder.com/600x600',
  'https://via.placeholder.com/600x600',
  'https://via.placeholder.com/600x600',
  'https://via.placeholder.com/600x600',
];

const specs = [
  { name: '颜色', options: ['红色', '蓝色', '绿色', '黑色'] },
  { name: '尺寸', options: ['S', 'M', 'L', 'XL'] },
  { name: '材质', options: ['纯棉', '涤纶', '混纺'] },
];

const reviews = [
  { id: 1, user: '用户1', rating: 5, content: '商品质量很好，非常满意！', date: '2024-01-15', images: [] },
  { id: 2, user: '用户2', rating: 4, content: '还不错，就是物流有点慢。', date: '2024-01-14', images: [] },
  { id: 3, user: '用户3', rating: 5, content: '物超所值，推荐购买！', date: '2024-01-13', images: [] },
];

export const ProductDetail = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);

  const handleSpecSelect = (specName: string, option: string) => {
    setSelectedSpecs({ ...selectedSpecs, [specName]: option });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* 面包屑 */}
      <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link to="/" className="hover:text-primary">首页</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/categories" className="hover:text-primary">分类</Link>
        <ChevronRight className="h-4 w-4" />
        <span>商品详情</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* 商品图片 */}
        <div>
          <div className="mb-4">
            <img
              src={productImages[selectedImageIndex]}
              alt="商品主图"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="flex gap-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-20 h-20 rounded border-2 overflow-hidden ${
                  selectedImageIndex === index ? 'border-primary' : 'border-gray-200'
                }`}
              >
                <img src={image} alt={`图片${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* 商品信息 */}
        <div>
          <h1 className="text-3xl font-bold mb-4">商品名称 - 高品质商品</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="ml-1">4.8</span>
            </div>
            <span className="text-gray-500">已售 1000+</span>
            <span className="text-gray-500">评价 500+</span>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-red-600">¥199.00</span>
              <span className="text-xl text-gray-400 line-through">¥399.00</span>
              <span className="text-sm text-red-600 bg-red-50 px-2 py-1 rounded">限时特价</span>
            </div>
          </div>

          {/* 规格选择 */}
          <div className="mb-6 space-y-4">
            {specs.map((spec) => (
              <div key={spec.name}>
                <h3 className="font-semibold mb-2">{spec.name}：</h3>
                <div className="flex gap-2 flex-wrap">
                  {spec.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSpecSelect(spec.name, option)}
                      className={`px-4 py-2 rounded border ${
                        selectedSpecs[spec.name] === option
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-gray-300 hover:border-primary'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 数量选择 */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">数量：</h3>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 text-center"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex gap-4">
            <Button className="flex-1" size="lg">
              <ShoppingCart className="h-5 w-5 mr-2" />
              加入购物车
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* 商品详情 */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">商品详情</h2>
        <div className="prose max-w-none">
          <p>这里是商品的详细描述信息...</p>
          <img src="https://via.placeholder.com/800x400" alt="详情图1" className="w-full my-4" />
          <img src="https://via.placeholder.com/800x400" alt="详情图2" className="w-full my-4" />
        </div>
      </div>

      {/* 商品评价 */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">商品评价</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-4 last:border-0">
              <div className="flex items-center gap-4 mb-2">
                <span className="font-semibold">{review.user}</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-700">{review.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button variant="outline">查看更多评价</Button>
        </div>
      </div>
    </div>
  );
};

