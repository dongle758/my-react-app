import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ProductCategories: React.FC = () => {
    const [categories] = useState([
        { id: 1, name: '电子产品', count: 15 },
        { id: 2, name: '服装', count: 23 },
        { id: 3, name: '食品', count: 8 },
        { id: 4, name: '家居用品', count: 12 },
    ]);

    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory = () => {
        if (newCategory.trim()) {
            // 这里可以添加创建分类的逻辑
            console.log('添加分类:', newCategory);
            alert(`分类 "${newCategory}" 已添加！`);
            setNewCategory('');
        }
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">产品分类</h1>
            
            <div className="max-w-2xl space-y-6">
                {/* 添加新分类 */}
                <div className="flex gap-4">
                    <Input
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="输入新分类名称"
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleAddCategory();
                            }
                        }}
                    />
                    <Button onClick={handleAddCategory}>添加分类</Button>
                </div>

                {/* 分类列表 */}
                <div className="border rounded-lg">
                    <div className="divide-y">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="flex items-center justify-between p-4 hover:bg-accent transition-colors"
                            >
                                <div>
                                    <h3 className="font-semibold">{category.name}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {category.count} 个产品
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm">
                                        编辑
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        删除
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

