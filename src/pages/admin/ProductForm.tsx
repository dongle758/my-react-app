import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const ProductForm = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">新增商品</h1>

      <div className="bg-white rounded-lg p-6 space-y-6">
        {/* 基本信息 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">基本信息</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">商品名称</Label>
              <Input id="name" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="category">商品分类</Label>
              <select id="category" className="mt-2 w-full h-9 rounded-md border border-input px-3">
                <option>选择分类</option>
              </select>
            </div>
            <div>
              <Label htmlFor="price">商品价格</Label>
              <Input id="price" type="number" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="stock">库存数量</Label>
              <Input id="stock" type="number" className="mt-2" />
            </div>
          </div>
        </div>

        {/* 商品描述 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">商品描述</h2>
          <Textarea className="min-h-32" placeholder="请输入商品描述..." />
        </div>

        {/* 商品图片 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">商品图片</h2>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-2 border-dashed rounded-lg p-4 text-center">
                <p className="text-gray-500 mb-2">图片 {i}</p>
                <Button variant="outline" size="sm">上传</Button>
              </div>
            ))}
          </div>
        </div>

        {/* 商品规格 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">商品规格</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Input placeholder="规格名称（如：颜色）" />
              <Input placeholder="规格值（如：红色,蓝色）" />
              <Button variant="outline">添加规格</Button>
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex gap-4">
          <Button>保存</Button>
          <Button variant="outline">取消</Button>
        </div>
      </div>
    </div>
  );
};

