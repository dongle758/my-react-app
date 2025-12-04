// src/menu-data.ts

import type { ReactNode } from "react";

// 1. 定义菜单项的类型
export type MenuItem = {
    name: string;
    href: string;
    icon?: ReactNode; // 可选的图标
    children?: MenuItem[];
};


// 2. 菜单数据
export const menuData: MenuItem[] = [
    {
        name: "仪表板",
        href: "/",
    },
    {
        name: "产品管理",
        href: "/products",
        children: [
            {
                name: "所有产品",
                href: "/products/all",
            },
            {
                name: "添加新产品",
                href: "/products/new",
            },
            {
                name: "产品分类",
                href: "/products/categories",
            },
        ],
    },
    {
        name: "订单",
        href: "/orders",
        children: [
            {
                name: "待处理订单",
                href: "/orders/pending",
            },
            {
                name: "已完成订单",
                href: "/orders/completed",
            },
            {
                name:"订单",
                href: "/orders/payment",
            }
        ],
    },
    {
        name: "设置",
        href: "/settings",
    },
];