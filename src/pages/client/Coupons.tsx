import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Ticket } from 'lucide-react';

const coupons = [
  { id: 1, name: '满100减10', amount: 10, condition: '满100元可用', expireDate: '2024-02-15', status: 'available' },
  { id: 2, name: '满200减30', amount: 30, condition: '满200元可用', expireDate: '2024-02-20', status: 'available' },
  { id: 3, name: '满500减100', amount: 100, condition: '满500元可用', expireDate: '2024-01-10', status: 'expired' },
];

export const Coupons = () => {
  const availableCoupons = coupons.filter(c => c.status === 'available');
  const expiredCoupons = coupons.filter(c => c.status === 'expired');

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">我的优惠券</h2>

      <Tabs defaultValue="available">
        <TabsList className="mb-6">
          <TabsTrigger value="available">可用 ({availableCoupons.length})</TabsTrigger>
          <TabsTrigger value="expired">已过期 ({expiredCoupons.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="available">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableCoupons.map((coupon) => (
              <div
                key={coupon.id}
                className="border-2 border-dashed border-primary rounded-lg p-4 flex items-center gap-4"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded">
                  <Ticket className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{coupon.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{coupon.condition}</p>
                  <p className="text-xs text-gray-400">有效期至 {coupon.expireDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">¥{coupon.amount}</p>
                  <Button size="sm" variant="outline" className="mt-2">去使用</Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="expired">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expiredCoupons.map((coupon) => (
              <div
                key={coupon.id}
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center gap-4 opacity-60"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded">
                  <Ticket className="h-10 w-10 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{coupon.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{coupon.condition}</p>
                  <p className="text-xs text-gray-400">已过期</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-400">¥{coupon.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

