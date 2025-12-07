import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { 
  User, 
  MapPin, 
  Heart, 
  Clock, 
  Ticket, 
  Coins, 
  Bell,
  Settings,
  Package,
  CreditCard
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { name: '个人中心', href: '/user', icon: User },
  { name: '我的订单', href: '/user/orders', icon: Package },
  { name: '收货地址', href: '/user/addresses', icon: MapPin },
  { name: '我的收藏', href: '/user/favorites', icon: Heart },
  { name: '我的足迹', href: '/user/history', icon: Clock },
  { name: '优惠券', href: '/user/coupons', icon: Ticket },
  { name: '积分', href: '/user/points', icon: Coins },
  { name: '消息中心', href: '/user/messages', icon: Bell },
  { name: '账户设置', href: '/user/settings', icon: Settings },
];

export const UserCenter = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 侧边栏 */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 mb-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">用户名</h3>
                <p className="text-sm text-gray-500">普通会员</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center border-t pt-4">
              <div>
                <p className="text-2xl font-bold text-primary">0</p>
                <p className="text-sm text-gray-500">优惠券</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">0</p>
                <p className="text-sm text-gray-500">积分</p>
              </div>
            </div>
          </div>

          <nav className="bg-white rounded-lg p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                      location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-gray-100"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* 主内容区 */}
        <main className="lg:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

