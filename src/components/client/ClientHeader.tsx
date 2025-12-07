import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const ClientHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        {/* 顶部栏 */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            电商平台
          </Link>

          {/* 搜索框 */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="搜索商品..."
                className="w-full pl-10 pr-4"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* 右侧操作 */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/user">
                <User className="h-5 w-5" />
                <span className="ml-2 hidden sm:inline">个人中心</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-2 hidden sm:inline">购物车</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* 分类导航 */}
        <nav className="flex items-center gap-6 h-12 border-t">
          <Link to="/categories" className="text-sm hover:text-primary">
            全部分类
          </Link>
          <Link to="/flash-sale" className="text-sm hover:text-primary">
            秒杀专区
          </Link>
          <Link to="/new" className="text-sm hover:text-primary">
            新品上市
          </Link>
          <Link to="/hot" className="text-sm hover:text-primary">
            热销商品
          </Link>
        </nav>
      </div>
    </header>
  );
};

