import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, MessageSquare } from 'lucide-react';

const afterSales = [
  { id: 1, orderId: '123456', type: '退款', status: 'processing', amount: 298.00, reason: '商品质量问题', date: '2024-01-15' },
  { id: 2, orderId: '123457', type: '换货', status: 'completed', amount: 0, reason: '发错货', date: '2024-01-14' },
  { id: 3, orderId: '123458', type: '退货', status: 'rejected', amount: 199.00, reason: '其他原因', date: '2024-01-13' },
];

const statusMap: Record<string, { label: string; color: string }> = {
  processing: { label: '处理中', color: 'text-orange-600' },
  completed: { label: '已完成', color: 'text-green-600' },
  rejected: { label: '已拒绝', color: 'text-red-600' },
};

export const AfterSale = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">售后记录</h1>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">全部</TabsTrigger>
          <TabsTrigger value="processing">处理中</TabsTrigger>
          <TabsTrigger value="completed">已完成</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-4">
            {afterSales.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-6 border">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-gray-500">售后单号：{item.id}</span>
                    <span className="ml-4 text-gray-500">订单号：{item.orderId}</span>
                  </div>
                  <span className={`font-semibold ${statusMap[item.status].color}`}>
                    {statusMap[item.status].label}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <p><span className="font-semibold">售后类型：</span>{item.type}</p>
                  <p><span className="font-semibold">申请原因：</span>{item.reason}</p>
                  {item.amount > 0 && (
                    <p><span className="font-semibold">退款金额：</span>¥{item.amount}</p>
                  )}
                  <p><span className="font-semibold">申请时间：</span>{item.date}</p>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/after-sale/${item.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        查看详情
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      联系客服
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

