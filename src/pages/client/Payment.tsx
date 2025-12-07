import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CreditCard, Lock } from 'lucide-react';

const paymentMethods = [
  { id: 'alipay', name: '支付宝', icon: '💳' },
  { id: 'wechat', name: '微信支付', icon: '💳' },
  { id: 'card', name: '银行卡', icon: '💳' },
];

export const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePay = () => {
    // 支付逻辑
    navigate(`/order/${id}/payment/success`);
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">支付订单</h1>

      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">订单号：{id}</span>
          <span className="text-2xl font-bold text-red-600">¥298.00</span>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          选择支付方式
        </h2>
        <RadioGroup defaultValue="alipay">
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-primary"
              >
                <RadioGroupItem value={method.id} id={method.id} />
                <Label htmlFor={method.id} className="flex items-center gap-2 cursor-pointer flex-1">
                  <span className="text-2xl">{method.icon}</span>
                  <span>{method.name}</span>
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-center gap-2">
          <Lock className="h-5 w-5 text-gray-500" />
          <span className="text-sm text-gray-600">您的支付信息将被安全加密</span>
        </div>

        <Button className="w-full mt-6" size="lg" onClick={handlePay}>
          确认支付
        </Button>
      </div>
    </div>
  );
};

