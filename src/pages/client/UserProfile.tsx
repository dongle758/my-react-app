import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Camera } from 'lucide-react';

export const UserProfile = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">个人资料</h2>

      <div className="max-w-2xl space-y-6">
        {/* 头像 */}
        <div>
          <Label>头像</Label>
          <div className="flex items-center gap-4 mt-2">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-12 w-12 text-primary" />
            </div>
            <Button variant="outline">
              <Camera className="h-4 w-4 mr-2" />
              更换头像
            </Button>
          </div>
        </div>

        {/* 基本信息 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="nickname">昵称</Label>
            <Input id="nickname" defaultValue="用户名" className="mt-2" />
          </div>
          <div>
            <Label htmlFor="phone">手机号</Label>
            <Input id="phone" defaultValue="138****8888" className="mt-2" />
          </div>
          <div>
            <Label htmlFor="email">邮箱</Label>
            <Input id="email" type="email" defaultValue="user@example.com" className="mt-2" />
          </div>
          <div>
            <Label htmlFor="gender">性别</Label>
            <select id="gender" className="mt-2 w-full h-9 rounded-md border border-input bg-transparent px-3 py-1">
              <option>男</option>
              <option>女</option>
              <option>保密</option>
            </select>
          </div>
        </div>

        {/* 保存按钮 */}
        <div className="flex gap-4">
          <Button>保存修改</Button>
          <Button variant="outline">取消</Button>
        </div>
      </div>
    </div>
  );
};

