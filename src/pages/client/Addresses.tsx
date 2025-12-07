import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Edit, Trash2, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const addresses = [
  { id: 1, name: '张三', phone: '138****8888', address: '北京市朝阳区xxx街道xxx号', isDefault: true },
  { id: 2, name: '李四', phone: '139****9999', address: '上海市浦东新区xxx路xxx号', isDefault: false },
];

export const Addresses = () => {
  const [addressList, setAddressList] = useState(addresses);

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">收货地址</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              新增地址
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>新增收货地址</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label>收货人</Label>
                <Input className="mt-2" />
              </div>
              <div>
                <Label>手机号</Label>
                <Input className="mt-2" />
              </div>
              <div>
                <Label>所在地区</Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <select className="h-9 rounded-md border border-input px-3">
                    <option>省份</option>
                  </select>
                  <select className="h-9 rounded-md border border-input px-3">
                    <option>城市</option>
                  </select>
                  <select className="h-9 rounded-md border border-input px-3">
                    <option>区县</option>
                  </select>
                </div>
              </div>
              <div>
                <Label>详细地址</Label>
                <Input className="mt-2" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="default" />
                <Label htmlFor="default" className="cursor-pointer">设为默认地址</Label>
              </div>
              <Button className="w-full">保存</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addressList.map((address) => (
          <div
            key={address.id}
            className="border-2 rounded-lg p-4 relative"
          >
            <div className="flex items-start justify-between mb-2">
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
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>{address.address}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                编辑
              </Button>
              <Button variant="outline" size="sm">
                <Trash2 className="h-4 w-4 mr-2" />
                删除
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

