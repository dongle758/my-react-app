// src/App.tsx

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {TopNav} from './components/TopNav';
import {PendingOrders} from './pages/payments/PendingOrders.tsx';
import {CompletesOrders} from './pages/payments/CompletesOrders.tsx'
import DemoPage from "@/pages/payments/PaymentOrders.tsx";
import {AllProducts} from "@/pages/products/AllProducts.tsx";
import {NewProduct} from "@/pages/products/NewProduct.tsx";
import {ProductCategories} from "@/pages/products/ProductCategories.tsx";
import {ST} from '@/pages/settings/index.tsx'
import { Toaster } from "sonner";

// 占位页：后续可替换为真正的仪表板等页面
const Placeholder: React.FC<{ title: string }> = ({title}) => (
    <div className="container mx-auto py-8 text-center text-muted-foreground">
        {title} 页面内容待补充
    </div>);

function App() {
    return (<Router>
            <header className="sticky top-0 z-50 bg-background">
                <TopNav/>
            </header>
            <main className="p-8">
                <Routes>
                    <Route path="/" element={<Placeholder title="仪表板"/>}/>
                    <Route path="/orders/pending" element={<PendingOrders/>}/>
                    <Route path="/orders/completed" element={<CompletesOrders/>}/>
                    <Route path="/orders/payment" element={<DemoPage/>}/>
                    <Route path="/products/all" element={<AllProducts/>}/>
                    <Route path="/products/new" element={<NewProduct/>}/>
                    <Route path="/products/categories" element={<ProductCategories/>}/>
                    <Route path="/settings" element={<ST/>}/>

                    <Route path="*" element={<Placeholder title="页面不存在"/>}/>
                </Routes>
            </main>
            <Toaster position="top-center" richColors />
        </Router>);
}

export default App;