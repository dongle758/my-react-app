import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Mail, MessageSquare } from 'lucide-react';

const messages = [
  { id: 1, type: 'system', title: '系统通知', content: '您的订单已发货', time: '2024-01-15 10:30', read: false },
  { id: 2, type: 'order', title: '订单消息', content: '您的订单已确认', time: '2024-01-14 15:20', read: false },
  { id: 3, type: 'promotion', title: '促销活动', content: '限时优惠活动开始', time: '2024-01-13 09:15', read: true },
];

export const Messages = () => {
  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">消息中心</h2>
        <Button variant="outline" size="sm">全部标记为已读</Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">全部 ({messages.length})</TabsTrigger>
          <TabsTrigger value="unread">未读 ({unreadCount})</TabsTrigger>
          <TabsTrigger value="system">系统通知</TabsTrigger>
          <TabsTrigger value="order">订单消息</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                  !message.read ? 'bg-blue-50 border-blue-200' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    message.type === 'system' ? 'bg-blue-100' :
                    message.type === 'order' ? 'bg-green-100' : 'bg-orange-100'
                  }`}>
                    {message.type === 'system' ? <Bell className="h-5 w-5 text-blue-600" /> :
                     message.type === 'order' ? <Mail className="h-5 w-5 text-green-600" /> :
                     <MessageSquare className="h-5 w-5 text-orange-600" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{message.title}</h3>
                      {!message.read && (
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">未读</span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{message.content}</p>
                    <p className="text-sm text-gray-400">{message.time}</p>
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

