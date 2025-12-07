import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, Truck, Package } from 'lucide-react';

const orders = [
  { id: 1, customer: '张三', amount: 298.00, status: '待发货', time: '2024-01-15 10:30' },
  { id: 2, customer: '李四', amount: 199.00, status: '已发货', time: '2024-01-14 15:20' },
  { id: 3, customer: '王五', amount: 399.00, status: '待退款', time: '2024-01-13 09:15' },
];

export const AdminOrderList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">订单列表</h1>

      {/* 搜索栏 */}
      <div className="bg-white rounded-lg p-4 mb-6">
        <div className="flex gap-4">
          <Input placeholder="搜索订单号..." className="flex-1" />
          <Button>搜索</Button>
          <Button variant="outline">重置</Button>
        </div>
      </div>

      {/* 订单表格 */}
      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">订单号</th>
              <th className="text-left p-4">客户</th>
              <th className="text-left p-4">金额</th>
              <th className="text-left p-4">状态</th>
              <th className="text-left p-4">下单时间</th>
              <th className="text-left p-4">操作</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.customer}</td>
                <td className="p-4">¥{order.amount}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-sm ${
                    order.status === '待发货' ? 'bg-orange-100 text-orange-600' :
                    order.status === '已发货' ? 'bg-green-100 text-green-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4">{order.time}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/admin/orders/${order.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    {order.status === '待发货' && (
                      <Button variant="outline" size="sm">
                        <Truck className="h-4 w-4 mr-2" />
                        发货
                      </Button>
                    )}
                    {order.status === '待退款' && (
                      <Button variant="outline" size="sm">
                        <Package className="h-4 w-4 mr-2" />
                        处理退款
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

