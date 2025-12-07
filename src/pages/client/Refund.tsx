import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export const Refund = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">申请退款</h1>

      <div className="bg-white rounded-lg p-6 space-y-6">
        {/* 订单信息 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">订单信息</h2>
          <div className="border rounded-lg p-4">
            <p className="text-gray-600">订单号：{id}</p>
            <p className="text-gray-600 mt-2">订单金额：¥298.00</p>
          </div>
        </div>

        {/* 退款原因 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">退款原因</h2>
          <RadioGroup defaultValue="quality">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="quality" id="quality" />
                <Label htmlFor="quality" className="cursor-pointer">商品质量问题</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="wrong" id="wrong" />
                <Label htmlFor="wrong" className="cursor-pointer">发错货</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="damaged" id="damaged" />
                <Label htmlFor="damaged" className="cursor-pointer">商品损坏</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="cursor-pointer">其他原因</Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* 退款金额 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">退款金额</h2>
          <Input type="number" defaultValue="298.00" className="max-w-xs" />
          <p className="text-sm text-gray-500 mt-2">最多可退 ¥298.00</p>
        </div>

        {/* 退款说明 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">退款说明</h2>
          <Textarea
            placeholder="请详细描述退款原因..."
            className="min-h-32"
          />
        </div>

        {/* 上传凭证 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">上传凭证（可选）</h2>
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <p className="text-gray-500 mb-2">点击或拖拽上传图片</p>
            <Button variant="outline">选择文件</Button>
          </div>
        </div>

        {/* 提交按钮 */}
        <div className="flex gap-4">
          <Button className="flex-1">提交申请</Button>
          <Button variant="outline" className="flex-1">取消</Button>
        </div>
      </div>
    </div>
  );
};

