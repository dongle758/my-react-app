import React from 'react';
import {Link, useLocation} from 'react-router-dom';

// 从 shadcn/ui 导入组件
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";

// 导入类型和数据
import {menuData} from '@/menu-data';

// --- 辅助函数：判断是否是当前页面或子页面 ---
const isCurrentPath = (currentPath: string, itemPath: string): boolean => {
    // 严格匹配
    if (currentPath === itemPath) return true;

    // 检查是否是子路径 (用于高亮父菜单)
    const normalizedCurrent = currentPath.endsWith('/') && currentPath.length > 1 ? currentPath.slice(0, -1) : currentPath;
    const normalizedItem = itemPath.endsWith('/') && itemPath.length > 1 ? itemPath.slice(0, -1) : itemPath;

    return normalizedCurrent.startsWith(normalizedItem) && normalizedItem !== '/';
};

// --- 子菜单列表项组件 (Mega Menu) ---
// 用于渲染 Mega Menu 中的卡片式子项
const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & {
    isActive: boolean,
    href: string
}>(({className, title, children, isActive, href, ...props}, ref) => {
    // 关键修复：使用 NavigationMenuLink 和 asChild 来包裹 Link
    return (<li>
            <NavigationMenuLink asChild>
                <Link to={href} ref={ref}
                      className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors", // 高亮当前活动的子菜单项
                          isActive ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)}
                      {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>);
});
ListItem.displayName = "ListItem";


// --- 顶部导航栏组件 ---
export const TopNav: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (// 确保粘性定位 (sticky top-0) 和高 z-index
        <div className="border-b bg-background sticky top-0 z-1000 shadow-md">
            <div className="container mx-auto flex h-16 items-center  px-4 sm:px-6 lg:px-8">

                {/* Logo/主页链接 */}
                <Link to="/" className="text-xl font-bold text-primary mr-3 tracking-wider">
                    应用名称
                </Link>

                <NavigationMenu>
                    <NavigationMenuList>
                        {menuData.map(item => {
                            // 检查当前菜单项是否高亮 (包括其子项)
                            const isActive = isCurrentPath(currentPath, item.href) || (item.children && item.children.some(child => isCurrentPath(currentPath, child.href)));

                            if (item.children) {
                                // 有子菜单：NavigationMenuTrigger 默认不是链接，无需 Link 包裹，但我们将其高亮
                                return (<NavigationMenuItem key={item.href}>
                                        <NavigationMenuTrigger
                                            className={cn(navigationMenuTriggerStyle(), "font-medium transition-colors", // 高亮父菜单项
                                                isActive ? "bg-primary/10 text-primary" : "hover:bg-accent/50")}
                                        >
                                            {item.name}
                                        </NavigationMenuTrigger>

                                        {/* 子菜单内容 (Mega Menu 风格) */}
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                {item.children.map(child => {
                                                    const isChildActive = isCurrentPath(currentPath, child.href);

                                                    return (<ListItem
                                                            key={child.href}
                                                            href={child.href} // 传递 href 给 ListItem
                                                            title={child.name}
                                                            isActive={isChildActive}
                                                        >
                                                            {child.name} 的简短描述
                                                        </ListItem>);
                                                })}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>);
                            } else {
                                // 无子菜单：普通链接
                                return (<NavigationMenuItem key={item.href}>
                                        {/* 关键修复：使用 NavigationMenuLink asChild 包裹 Link */}
                                        <NavigationMenuLink
                                            asChild // <--- 告知 NavigationMenuLink 不要渲染自己的 <a>
                                            className={cn(navigationMenuTriggerStyle(), "font-medium transition-colors", // 高亮逻辑保持不变
                                                isActive ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-accent")}
                                        >
                                            {/* Link 成为 NavigationMenuLink 的子元素，继承其属性 */}
                                            <Link to={item.href}>
                                                {item.name}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>);
                            }
                        })}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>);
};