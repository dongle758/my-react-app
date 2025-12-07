import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

const coupons = [
  { id: 1, name: '满100减10', amount: 10, condition: 100, total: 1000, used: 500, status: '进行中' },
  { id: 2, name: '满200减30', amount: 30, condition: 200, total: 500, used: 200, status: '进行中' },
];

export const CouponManagement = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">优惠券管理</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          新增优惠券
        </Button>
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">ID</th>
              <th className="text-left p-4">优惠券名称</th>
              <th className="text-left p-4">面额</th>
              <th className="text-left p-4">使用条件</th>
              <th className="text-left p-4">发放总数</th>
              <th className="text-left p-4">已使用</th>
              <th className="text-left p-4">状态</th>
              <th className="text-left p-4">操作</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{coupon.id}</td>
                <td className="p-4">{coupon.name}</td>
                <td className="p-4">¥{coupon.amount}</td>
                <td className="p-4">满¥{coupon.condition}可用</td>
                <td className="p-4">{coupon.total}</td>
                <td className="p-4">{coupon.used}</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-sm">
                    {coupon.status}
                  </span>
                </td>
                <td className="p-4">
                  <Button variant="outline" size="sm">编辑</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

