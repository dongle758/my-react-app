import { Link } from 'react-router-dom';

export const ClientFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">公司简介</Link></li>
              <li><Link to="/contact" className="hover:text-white">联系我们</Link></li>
              <li><Link to="/join" className="hover:text-white">加入我们</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">客户服务</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:text-white">帮助中心</Link></li>
              <li><Link to="/shipping" className="hover:text-white">配送说明</Link></li>
              <li><Link to="/return" className="hover:text-white">退换货政策</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">购物指南</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/guide" className="hover:text-white">购物流程</Link></li>
              <li><Link to="/payment" className="hover:text-white">支付方式</Link></li>
              <li><Link to="/faq" className="hover:text-white">常见问题</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">关注我们</h3>
            <ul className="space-y-2 text-sm">
              <li>微信公众号</li>
              <li>官方微博</li>
              <li>客服热线：400-xxx-xxxx</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 电商平台. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

