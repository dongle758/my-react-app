import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, Eye, Trash2 } from 'lucide-react';

const orders = [
  { id: 1, status: 'pending', total: 298.00, items: [{ name: '商品1', quantity: 2 }], date: '2024-01-15' },
  { id: 2, status: 'paid', total: 199.00, items: [{ name: '商品2', quantity: 1 }], date: '2024-01-14' },
  { id: 3, status: 'shipped', total: 399.00, items: [{ name: '商品3', quantity: 1 }], date: '2024-01-13' },
  { id: 4, status: 'completed', total: 599.00, items: [{ name: '商品4', quantity: 1 }], date: '2024-01-12' },
  { id: 5, status: 'cancelled', total: 299.00, items: [{ name: '商品5', quantity: 1 }], date: '2024-01-11' },
];

const statusMap: Record<string, { label: string; color: string }> = {
  pending: { label: '待付款', color: 'text-orange-600' },
  paid: { label: '待发货', color: 'text-blue-600' },
  shipped: { label: '已发货', color: 'text-purple-600' },
  completed: { label: '已完成', color: 'text-green-600' },
  cancelled: { label: '已取消', color: 'text-gray-600' },
};

export const OrderList = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(order => order.status === activeTab);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">我的订单</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">全部订单</TabsTrigger>
          <TabsTrigger value="pending">待付款</TabsTrigger>
          <TabsTrigger value="paid">待发货</TabsTrigger>
          <TabsTrigger value="shipped">已发货</TabsTrigger>
          <TabsTrigger value="completed">已完成</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg p-6 border">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-gray-500">订单号：{order.id}</span>
                    <span className={`ml-4 font-semibold ${statusMap[order.status].color}`}>
                      {statusMap[order.status].label}
                    </span>
                  </div>
                  <span className="text-gray-500">{order.date}</span>
                </div>

                <div className="space-y-2 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{item.name} x {item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="text-right">
                    <p className="text-gray-600">合计：<span className="text-xl font-bold text-red-600">¥{order.total}</span></p>
                  </div>
                  <div className="flex gap-2">
                    {order.status === 'pending' && (
                      <>
                        <Button variant="outline" size="sm">取消订单</Button>
                        <Button size="sm" asChild>
                          <Link to={`/order/${order.id}/pay`}>去付款</Link>
                        </Button>
                      </>
                    )}
                    {order.status === 'paid' && (
                      <Button variant="outline" size="sm">提醒发货</Button>
                    )}
                    {order.status === 'shipped' && (
                      <Button size="sm" asChild>
                        <Link to={`/order/${order.id}/logistics`}>查看物流</Link>
                      </Button>
                    )}
                    {order.status === 'completed' && (
                      <>
                        <Button variant="outline" size="sm">再次购买</Button>
                        <Button variant="outline" size="sm">申请售后</Button>
                      </>
                    )}
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/order/${order.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        查看详情
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

