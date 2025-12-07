import { Link } from 'react-router-dom';
import { Bell, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AdminHeader = () => {
  return (
    <header className="bg-white border-b shadow-sm h-16 flex items-center justify-between px-6">
      <div className="flex items-center">
        <Link to="/admin" className="text-xl font-bold text-primary">
          管理后台
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

