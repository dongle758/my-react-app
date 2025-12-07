import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Edit, Trash2 } from 'lucide-react';

const users = [
  { id: 1, username: 'user1', email: 'user1@example.com', phone: '138****8888', status: '正常', registerTime: '2024-01-01' },
  { id: 2, username: 'user2', email: 'user2@example.com', phone: '139****9999', status: '正常', registerTime: '2024-01-02' },
];

export const UserList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">用户列表</h1>

      <div className="bg-white rounded-lg p-4 mb-6">
        <div className="flex gap-4">
          <Input placeholder="搜索用户名或邮箱..." className="flex-1" />
          <Button>搜索</Button>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">ID</th>
              <th className="text-left p-4">用户名</th>
              <th className="text-left p-4">邮箱</th>
              <th className="text-left p-4">手机号</th>
              <th className="text-left p-4">状态</th>
              <th className="text-left p-4">注册时间</th>
              <th className="text-left p-4">操作</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{user.id}</td>
                <td className="p-4">{user.username}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.phone}</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-sm">
                    {user.status}
                  </span>
                </td>
                <td className="p-4">{user.registerTime}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

