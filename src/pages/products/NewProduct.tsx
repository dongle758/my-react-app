import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewProduct: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 这里可以添加提交逻辑
        console.log('提交产品:', formData);
        alert('产品已创建！');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">添加新产品</h1>
            
            <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                        产品名称
                    </label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="请输入产品名称"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">
                        产品描述
                    </label>
                    <Input
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="请输入产品描述"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="price" className="text-sm font-medium">
                        价格
                    </label>
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                        产品分类
                    </label>
                    <Input
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="请输入产品分类"
                    />
                </div>

                <div className="flex gap-4">
                    <Button type="submit">创建产品</Button>
                    <Button type="button" variant="outline" onClick={() => setFormData({
                        name: '',
                        description: '',
                        price: '',
                        category: '',
                    })}>
                        重置
                    </Button>
                </div>
            </form>
        </div>
    );
};

