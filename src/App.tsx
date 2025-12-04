// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopNav } from './components/TopNav';
import { PendingOrders } from './pages/PendingOrders';
import {CompletesOrders} from  './pages/CompletesOrders'
import DemoPage from "@/pages/payments/PaymentOrders.tsx";

// 占位页：后续可替换为真正的仪表板等页面
const Placeholder: React.FC<{ title: string }> = ({ title }) => (
    <div className="container mx-auto py-8 text-center text-muted-foreground">
        {title} 页面内容待补充
    </div>
);

function App() {
    return (
        <Router>
            <header className="sticky top-0 z-50 bg-background">
                <TopNav />
            </header>
            <main className="p-8">
                <Routes>
                    <Route path="/" element={<Placeholder title="仪表板" />} />
                    <Route path="/orders/pending" element={<PendingOrders />} />
                    <Route path="/orders/completed" element={<CompletesOrders />} />
                    <Route path="/orders/payment" element={<DemoPage />} />

                    <Route path="*" element={<Placeholder title="页面不存在" />} />
                </Routes>
            </main>
        </Router>
    );
}
export default App;