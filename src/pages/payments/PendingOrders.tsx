import React, { useState } from 'react';

// 模拟订单数据类型
interface Order {
    id: string;
    customer: string;
    orderDate: string;
    total: number;
    status: 'Pending' | 'Processing' | 'Shipped' | 'Cancelled';
}

// 模拟订单数据 (只筛选出 'Pending' 状态的)
const initialOrders: Order[] = [
    { id: 'ORD001', customer: '张三', orderDate: '2025-10-25', total: 1200.50, status: 'Pending' },
    { id: 'ORD002', customer: '李四', orderDate: '2025-10-24', total: 89.99, status: 'Pending' },
    { id: 'ORD003', customer: '王五', orderDate: '2025-10-23', total: 345.00, status: 'Processing' }, // 不会被显示
    { id: 'ORD004', customer: '赵六', orderDate: '2025-10-22', total: 50.00, status: 'Pending' },
    { id: 'ORD005', customer: '钱七', orderDate: '2025-10-21', total: 2999.00, status: 'Processing' }, // 不会被显示
];

// 辅助函数：根据状态获取徽章样式
const getStatusBadge = (status: Order['status']) => {
    let baseClass = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ';
    switch (status) {
        case 'Pending':
            return baseClass + 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
        case 'Processing':
            return baseClass + 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
        case 'Shipped':
            return baseClass + 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
        case 'Cancelled':
            return baseClass + 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
        default:
            return baseClass + 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
};

/**
 * 待处理订单页面组件
 */
export const PendingOrders: React.FC = () => {
    // 过滤出初始订单中状态为 'Pending' 的订单
    const [orders, setOrders] = useState<Order[]>(initialOrders.filter(o => o.status === 'Pending'));

    // 模拟操作：将订单标记为已处理，并从列表中移除
    const handleProcess = (orderId: string) => {
        // 在实际应用中，这里会调用后端 API 来更新订单状态

        // 模拟：从待处理列表中移除该订单
        setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
        console.log(`Order ${orderId} is now being processed.`);
    };

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            {/* 页面标题 */}
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2">
                待处理订单 ({orders.length})
            </h1>

            {/* 订单卡片容器 */}
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl">
                <div className="relative w-full overflow-x-auto">

                    {orders.length === 0 ? (
                        <div className="p-8 text-center text-lg text-gray-500 dark:text-gray-400">
                            🎉 恭喜！当前没有待处理的订单。
                        </div>
                    ) : (
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            {/* 表头 */}
                            <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    订单编号
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    客户
                                </th>
                                <th className="px-6 py-3 hidden md:table-cell text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    下单日期
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    总计
                                </th>
                                <th className="px-6 py-3 hidden sm:table-cell text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    状态
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    操作
                                </th>
                            </tr>
                            </thead>

                            {/* 表体 */}
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        {order.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        {order.customer}
                                    </td>
                                    <td className="px-6 py-4 hidden md:table-cell whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        {order.orderDate}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-white">
                                        ¥{order.total.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 hidden sm:table-cell whitespace-nowrap text-sm">
                                            <span className={getStatusBadge(order.status)}>
                                                {order.status === 'Pending' ? '待处理' : '已处理'}
                                            </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            onClick={() => handleProcess(order.id)}
                                            className="bg-primary text-primary-foreground hover:bg-primary/90
                                                           inline-flex items-center justify-center rounded-md text-sm font-medium
                                                           ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
                                                           focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                                                           disabled:opacity-50 h-9 px-4 py-2 shadow-md"
                                        >
                                            处理订单
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* 响应式提示（用于小屏幕） */}
            <div className="sm:hidden mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
                提示：请横屏查看或在更大屏幕上获得最佳体验，部分列已被隐藏。
            </div>
        </div>
    );
};