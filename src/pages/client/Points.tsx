import { Button } from '@/components/ui/button';
import { Coins, TrendingUp } from 'lucide-react';

const pointsHistory = [
  { id: 1, type: 'earn', amount: 100, description: '购买商品获得', date: '2024-01-15' },
  { id: 2, type: 'earn', amount: 50, description: '签到获得', date: '2024-01-14' },
  { id: 3, type: 'spend', amount: -200, description: '兑换优惠券', date: '2024-01-13' },
];

export const Points = () => {
  const totalPoints = 1000;

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">我的积分</h2>

      {/* 积分概览 */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-6 text-white mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-90 mb-2">当前积分</p>
            <p className="text-4xl font-bold">{totalPoints}</p>
          </div>
          <Coins className="h-16 w-16 opacity-50" />
        </div>
      </div>

      {/* 积分兑换 */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">积分兑换</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-primary mb-2">¥10</p>
            <p className="text-sm text-gray-500 mb-4">需要 1000 积分</p>
            <Button size="sm" className="w-full">立即兑换</Button>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-primary mb-2">¥20</p>
            <p className="text-sm text-gray-500 mb-4">需要 2000 积分</p>
            <Button size="sm" variant="outline" className="w-full">立即兑换</Button>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-primary mb-2">¥50</p>
            <p className="text-sm text-gray-500 mb-4">需要 5000 积分</p>
            <Button size="sm" variant="outline" className="w-full">立即兑换</Button>
          </div>
        </div>
      </div>

      {/* 积分明细 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">积分明细</h3>
        <div className="space-y-4">
          {pointsHistory.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4 last:border-0">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  item.type === 'earn' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <TrendingUp className={`h-5 w-5 ${
                    item.type === 'earn' ? 'text-green-600' : 'text-red-600'
                  }`} />
                </div>
                <div>
                  <p className="font-semibold">{item.description}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
              <div className={`text-lg font-bold ${
                item.type === 'earn' ? 'text-green-600' : 'text-red-600'
              }`}>
                {item.type === 'earn' ? '+' : ''}{item.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

