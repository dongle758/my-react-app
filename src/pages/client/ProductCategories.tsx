import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const categories = [
  { id: 1, name: '电子产品', icon: '📱', children: [
    { id: 11, name: '手机' },
    { id: 12, name: '电脑' },
    { id: 13, name: '平板' },
  ]},
  { id: 2, name: '服装配饰', icon: '👕', children: [
    { id: 21, name: '男装' },
    { id: 22, name: '女装' },
    { id: 23, name: '配饰' },
  ]},
  { id: 3, name: '家居用品', icon: '🏠', children: [
    { id: 31, name: '家具' },
    { id: 32, name: '装饰' },
    { id: 33, name: '厨具' },
  ]},
  { id: 4, name: '美妆护肤', icon: '💄', children: [
    { id: 41, name: '护肤' },
    { id: 42, name: '彩妆' },
    { id: 43, name: '香水' },
  ]},
];

export const ProductCategories = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">商品分类</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-primary">首页</Link>
          <ChevronRight className="h-4 w-4" />
          <span>商品分类</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <Link to={`/categories/${category.id}`}>
              <div className="text-4xl mb-4">{category.icon}</div>
              <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
              <div className="space-y-2">
                {category.children?.map((child) => (
                  <Link
                    key={child.id}
                    to={`/categories/${child.id}`}
                    className="block text-sm text-gray-600 hover:text-primary"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

