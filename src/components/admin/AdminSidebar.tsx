import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Ticket, 
  Users, 
  Settings,
  Zap,
  Image,
  Layers
} from 'lucide-react';
import { cn } from '@/lib/utils';

const adminMenu = [
  { name: '工作台', href: '/admin', icon: LayoutDashboard },
  { name: '商品管理', href: '/admin/products', icon: Package, children: [
    { name: '商品列表', href: '/admin/products/list' },
    { name: '新增商品', href: '/admin/products/new' },
    { name: '商品分类', href: '/admin/products/categories' },
    { name: '商品规格', href: '/admin/products/specs' },
  ]},
  { name: '订单管理', href: '/admin/orders', icon: ShoppingCart, children: [
    { name: '订单列表', href: '/admin/orders/list' },
  ]},
  { name: '运营管理', href: '/admin/marketing', icon: Ticket, children: [
    { name: '优惠券管理', href: '/admin/marketing/coupons' },
    { name: '秒杀活动', href: '/admin/marketing/flash-sale' },
    { name: '广告位管理', href: '/admin/marketing/banners' },
    { name: '楼层配置', href: '/admin/marketing/floors' },
  ]},
  { name: '用户与权限', href: '/admin/users', icon: Users, children: [
    { name: '用户列表', href: '/admin/users/list' },
    { name: '角色管理', href: '/admin/users/roles' },
    { name: '权限配置', href: '/admin/users/permissions' },
  ]},
  { name: '系统设置', href: '/admin/settings', icon: Settings },
];

export const AdminSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-64 bg-white border-r min-h-screen">
      <nav className="p-4 space-y-2">
        {adminMenu.map((item) => {
          const isActive = currentPath === item.href || 
            (item.children && item.children.some(child => currentPath === child.href));
          
          return (
            <div key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-gray-100"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
              {item.children && isActive && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className={cn(
                        "block px-4 py-2 rounded-lg text-sm transition-colors",
                        currentPath === child.href
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-gray-50"
                      )}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

