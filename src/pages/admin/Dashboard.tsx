import { TrendingUp, Users, Package, DollarSign, ShoppingCart } from 'lucide-react';

const stats = [
  { name: '总销售额', value: '¥1,234,567', change: '+12.5%', icon: DollarSign, color: 'text-green-600' },
  { name: '订单数量', value: '12,345', change: '+8.2%', icon: ShoppingCart, color: 'text-blue-600' },
  { name: '商品总数', value: '5,678', change: '+5.1%', icon: Package, color: 'text-purple-600' },
  { name: '用户总数', value: '89,012', change: '+15.3%', icon: Users, color: 'text-orange-600' },
];

const recentOrders = [
  { id: 1, customer: '张三', amount: 298.00, status: '已支付', time: '2024-01-15 10:30' },
  { id: 2, customer: '李四', amount: 199.00, status: '待发货', time: '2024-01-15 09:20' },
  { id: 3, customer: '王五', amount: 399.00, status: '已发货', time: '2024-01-14 16:45' },
];

export const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">工作台</h1>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">{stat.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
            <p className="text-gray-500 text-sm">{stat.name}</p>
          </div>
        ))}
      </div>

      {/* 最近订单 */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">最近订单</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">订单号</th>
                <th className="text-left p-2">客户</th>
                <th className="text-left p-2">金额</th>
                <th className="text-left p-2">状态</th>
                <th className="text-left p-2">时间</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.customer}</td>
                  <td className="p-2">¥{order.amount}</td>
                  <td className="p-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">
                      {order.status}
                    </span>
                  </td>
                  <td className="p-2">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

