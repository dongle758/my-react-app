import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

const products = [
  { id: 1, name: '商品名称1', price: 99.00, stock: 100, sales: 1000, status: '上架' },
  { id: 2, name: '商品名称2', price: 199.00, stock: 50, sales: 2000, status: '上架' },
  { id: 3, name: '商品名称3', price: 299.00, stock: 0, sales: 1500, status: '下架' },
];

export const AdminProductList = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">商品列表</h1>
        <Button asChild>
          <Link to="/admin/products/new">
            <Plus className="h-4 w-4 mr-2" />
            新增商品
          </Link>
        </Button>
      </div>

      {/* 搜索栏 */}
      <div className="bg-white rounded-lg p-4 mb-6">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="搜索商品名称..." className="pl-10" />
          </div>
          <Button>搜索</Button>
          <Button variant="outline">重置</Button>
        </div>
      </div>

      {/* 商品表格 */}
      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">ID</th>
              <th className="text-left p-4">商品名称</th>
              <th className="text-left p-4">价格</th>
              <th className="text-left p-4">库存</th>
              <th className="text-left p-4">销量</th>
              <th className="text-left p-4">状态</th>
              <th className="text-left p-4">操作</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{product.id}</td>
                <td className="p-4">{product.name}</td>
                <td className="p-4">¥{product.price}</td>
                <td className="p-4">{product.stock}</td>
                <td className="p-4">{product.sales}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-sm ${
                    product.status === '上架' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/admin/products/${product.id}/edit`}>
                        <Edit className="h-4 w-4" />
                      </Link>
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

      {/* 分页 */}
      <div className="mt-6 flex justify-center gap-2">
        <Button variant="outline">上一页</Button>
        {[1, 2, 3].map((page) => (
          <Button key={page} variant={page === 1 ? 'default' : 'outline'}>
            {page}
          </Button>
        ))}
        <Button variant="outline">下一页</Button>
      </div>
    </div>
  );
};

