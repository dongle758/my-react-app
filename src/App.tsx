import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';

// Layouts
import { ClientLayout } from './layouts/ClientLayout';
import { AdminLayout } from './layouts/AdminLayout';

// Client Pages
import { Home } from './pages/client/Home';
import { ProductCategories } from './pages/client/ProductCategories';
import { ProductList } from './pages/client/ProductList';
import { ProductDetail } from './pages/client/ProductDetail';
import { SearchResults } from './pages/client/SearchResults';
import { Cart } from './pages/client/Cart';
import { Checkout } from './pages/client/Checkout';
import { OrderList } from './pages/client/OrderList';
import { OrderDetail } from './pages/client/OrderDetail';
import { Logistics } from './pages/client/Logistics';
import { Refund } from './pages/client/Refund';
import { AfterSale } from './pages/client/AfterSale';
import { UserCenter } from './pages/client/UserCenter';
import { UserProfile } from './pages/client/UserProfile';
import { Addresses } from './pages/client/Addresses';
import { Favorites } from './pages/client/Favorites';
import { History } from './pages/client/History';
import { Coupons } from './pages/client/Coupons';
import { Points } from './pages/client/Points';
import { Messages } from './pages/client/Messages';

// Admin Pages
import { AdminLogin } from './pages/admin/Login';
import { Dashboard } from './pages/admin/Dashboard';
import { AdminProductList } from './pages/admin/ProductList';
import { ProductForm } from './pages/admin/ProductForm';
import { AdminOrderList } from './pages/admin/OrderList';
import { CouponManagement } from './pages/admin/CouponManagement';
import { UserList } from './pages/admin/UserList';
import { NotFound } from './pages/admin/NotFound';
import { Error } from './pages/admin/Error';

// Payment Pages
import { OrderSuccess } from './pages/client/OrderSuccess';
import { Payment } from './pages/client/Payment';
import { PaymentSuccess } from './pages/client/PaymentSuccess';

function App() {
  return (
    <Router>
      <Routes>
        {/* 用户端路由 */}
        <Route path="/*" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<ProductCategories />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order/success" element={<OrderSuccess />} />
          <Route path="order/:id/pay" element={<Payment />} />
          <Route path="order/:id/payment/success" element={<PaymentSuccess />} />
          <Route path="order/:id" element={<OrderDetail />} />
          <Route path="order/:id/logistics" element={<Logistics />} />
          <Route path="order/:id/refund" element={<Refund />} />
          <Route path="orders" element={<OrderList />} />
          <Route path="after-sale" element={<AfterSale />} />
          <Route path="user" element={<UserCenter />}>
            <Route index element={<UserProfile />} />
            <Route path="orders" element={<OrderList />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="history" element={<History />} />
            <Route path="coupons" element={<Coupons />} />
            <Route path="points" element={<Points />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<UserProfile />} />
          </Route>
        </Route>

        {/* 管理后台路由 */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products/list" element={<AdminProductList />} />
          <Route path="products/new" element={<ProductForm />} />
          <Route path="products/:id/edit" element={<ProductForm />} />
          <Route path="products/categories" element={<ProductCategories />} />
          <Route path="products/specs" element={<div className="p-6">商品规格管理</div>} />
          <Route path="orders/list" element={<AdminOrderList />} />
          <Route path="orders/:id" element={<OrderDetail />} />
          <Route path="marketing/coupons" element={<CouponManagement />} />
          <Route path="marketing/flash-sale" element={<div className="p-6">秒杀活动管理</div>} />
          <Route path="marketing/banners" element={<div className="p-6">广告位管理</div>} />
          <Route path="marketing/floors" element={<div className="p-6">楼层配置</div>} />
          <Route path="users/list" element={<UserList />} />
          <Route path="users/roles" element={<div className="p-6">角色管理</div>} />
          <Route path="users/permissions" element={<div className="p-6">权限配置</div>} />
          <Route path="settings" element={<div className="p-6">系统设置</div>} />
          <Route path="404" element={<NotFound />} />
          <Route path="500" element={<Error />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" richColors />
    </Router>
  );
}

export default App;
