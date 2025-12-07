import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">页面不存在</h2>
        <p className="text-gray-500 mb-8">抱歉，您访问的页面不存在或已被删除</p>
        <Button asChild>
          <Link to="/admin">
            <Home className="h-4 w-4 mr-2" />
            返回首页
          </Link>
        </Button>
      </div>
    </div>
  );
};

