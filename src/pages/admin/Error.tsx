import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertCircle, Home } from 'lucide-react';

export const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <AlertCircle className="h-24 w-24 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">500</h1>
        <h2 className="text-2xl font-semibold mb-4">服务器错误</h2>
        <p className="text-gray-500 mb-8">抱歉，服务器出现了问题，请稍后再试</p>
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

