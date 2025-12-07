import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Package, Home } from 'lucide-react';

export const PaymentSuccess = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle2 className="h-24 w-24 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">支付成功！</h1>
        <p className="text-gray-600 mb-8">您的订单已支付成功，我们将尽快为您安排发货</p>
        
        <div className="bg-white rounded-lg p-6 mb-8 text-left">
          <div className="flex items-center gap-2 mb-4">
            <Package className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">订单信息</h2>
          </div>
          <div className="space-y-2 text-gray-600">
            <p>订单号：{id}</p>
            <p>支付金额：<span className="font-semibold text-red-600">¥298.00</span></p>
            <p>支付时间：2024-01-15 10:30:00</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to={`/order/${id}`}>查看订单</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/orders">我的订单</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              返回首页
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

