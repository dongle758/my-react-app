import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Plus, Edit, Trash2 } from 'lucide-react';

const addresses = [
  { id: 1, name: '张三', phone: '138****8888', address: '北京市朝阳区xxx街道xxx号', isDefault: true },
  { id: 2, name: '李四', phone: '139****9999', address: '上海市浦东新区xxx路xxx号', isDefault: false },
];

const paymentMethods = [
  { id: 'alipay', name: '支付宝', icon: '💳' },
  { id: 'wechat', name: '微信支付', icon: '💳' },
  { id: 'card', name: '银行卡', icon: '💳' },
];

const orderItems = [
  { id: 1, name: '商品名称1', price: 99.00, quantity: 2, image: 'https://via.placeholder.com/80x80' },
  { id: 2, name: '商品名称2', price: 199.00, quantity: 1, image: 'https://via.placeholder.com/80x80' },
];

export const Checkout = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState(addresses[0].id);
  const [paymentMethod, setPaymentMethod] = useState('alipay');
  const [showAddressForm, setShowAddressForm] = useState(false);

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  const handleSubmit = () => {
    // 提交订单逻辑
    navigate('/order/success');
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">结算</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 左侧：收货地址、支付方式、商品列表 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 收货地址 */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">收货地址</h2>
              <Button variant="outline" size="sm" onClick={() => setShowAddressForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                新增地址
              </Button>
            </div>
            <div className="space-y-3">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedAddress === address.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedAddress(address.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{address.name}</span>
                        <span className="text-gray-600">{address.phone}</span>
                        {address.isDefault && (
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                            默认
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600">{address.address}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 支付方式 */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">支付方式</h2>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer ${
                      paymentMethod === method.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200'
                    }`}
                    onClick={() => setPaymentMethod(method.id)}
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
          </div>

          {/* 商品列表 */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">商品清单</h2>
            <div className="space-y-4">
              {orderItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">数量：{item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">¥{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧：订单摘要 */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4">订单摘要</h2>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>商品小计</span>
                <span>¥{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>运费</span>
                <span>¥{shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>合计</span>
                <span className="text-red-600">¥{total.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full" size="lg" onClick={handleSubmit}>
              提交订单
            </Button>
            <Link to="/cart" className="block text-center text-sm text-gray-500 mt-4 hover:text-primary">
              返回购物车
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

