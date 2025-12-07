import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Package, Truck, CreditCard, MapPin } from 'lucide-react';

export const OrderDetail = () => {
  const { id } = useParams();
  const order = {
    id: id,
    status: 'shipped',
    total: 298.00,
    items: [
      { id: 1, name: '商品名称1', price: 99.00, quantity: 2, image: 'https://via.placeholder.com/100x100' },
    ],
    address: {
      name: '张三',
      phone: '138****8888',
      address: '北京市朝阳区xxx街道xxx号',
    },
    payment: {
      method: '支付宝',
      amount: 298.00,
      time: '2024-01-15 10:30:00',
    },
    logistics: {
      company: '顺丰快递',
      number: 'SF1234567890',
      status: '运输中',
    },
    date: '2024-01-15 10:30:00',
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">订单详情</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 左侧：订单信息 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 订单状态 */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <Package className="h-6 w-6 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">订单状态：已发货</h2>
                <p className="text-gray-500">订单号：{order.id}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '75%' }}></div>
              </div>
              <div className="text-right">
                <p>预计1-2天送达</p>
              </div>
            </div>
          </div>

          {/* 收货信息 */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5" />
              <h2 className="text-xl font-semibold">收货信息</h2>
            </div>
            <div className="space-y-2">
              <p><span className="font-semibold">收货人：</span>{order.address.name}</p>
              <p><span className="font-semibold">联系电话：</span>{order.address.phone}</p>
              <p><span className="font-semibold">收货地址：</span>{order.address.address}</p>
            </div>
          </div>

          {/* 商品信息 */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">商品信息</h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <Link to={`/products/${item.id}`} className="font-semibold hover:text-primary">
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">数量：{item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">¥{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 物流信息 */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-5 w-5" />
              <h2 className="text-xl font-semibold">物流信息</h2>
            </div>
            <div className="space-y-2">
              <p><span className="font-semibold">物流公司：</span>{order.logistics.company}</p>
              <p><span className="font-semibold">运单号：</span>{order.logistics.number}</p>
              <p><span className="font-semibold">物流状态：</span>{order.logistics.status}</p>
            </div>
            <Button variant="outline" className="mt-4" asChild>
              <Link to={`/order/${order.id}/logistics`}>查看详细物流</Link>
            </Button>
          </div>
        </div>

        {/* 右侧：订单摘要 */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4">订单摘要</h2>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">商品总额</span>
                <span>¥{order.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">运费</span>
                <span>¥10.00</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>实付金额</span>
                <span className="text-red-600">¥{order.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CreditCard className="h-4 w-4" />
                <span>支付方式：{order.payment.method}</span>
              </div>
              <p className="text-sm text-gray-500">支付时间：{order.payment.time}</p>
            </div>

            <div className="mt-6 space-y-2">
              <Button className="w-full">再次购买</Button>
              <Button variant="outline" className="w-full">申请退款</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

