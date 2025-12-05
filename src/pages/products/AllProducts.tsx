import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {
    Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Alert, AlertDescription, AlertTitle,} from "@/components/ui/alert.tsx";
import {CheckCircle2Icon} from "lucide-react";
import {toast} from "sonner";

const products = [{title: "Cabbage", id: 1, price: 5.99, category: "蔬菜"}, {
    title: "Garlic", id: 2, price: 3.5, category: "调料"
}, {title: "Apple", id: 3, price: 8.99, category: "水果"},];

export const AllProducts: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [alertS, setAlerts] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<(typeof products)[number] | null>(null);

    const handleOpenDialog = (p: (typeof products)[number]) => {
        setSelectedProduct(p);
        setOpen(true);
        setAlerts(true);
        toast.success('chenggong')
    };

    return (<div className="container px-4 py-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold">所有产品</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (<div
                key={product.id}
                className="p-4 rounded-lg border transition-shadow hover:shadow-lg"
            >
                <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                    分类: {product.category}
                </p>
                <p className="text-lg font-bold text-primary">
                    ¥{product.price.toFixed(2)}
                </p>
                <Button onClick={() => handleOpenDialog(product)}>查看详情</Button>
            </div>))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
            {selectedProduct && (<DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>产品详情</DialogTitle>
                    <DialogDescription>查看并确认该产品的信息</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label>产品名称</Label>
                        <Input value={selectedProduct.title} readOnly/>
                    </div>
                    <div className="grid gap-2">
                        <Label>分类</Label>
                        <Input value={selectedProduct.category} readOnly/>
                    </div>
                    <div className="grid gap-2">
                        <Label>价格</Label>
                        <Input
                            value={`¥${selectedProduct.price.toFixed(2)}`}
                            readOnly
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">关闭</Button>
                    </DialogClose>
                    <Button onClick={() => setOpen(false)}>确认</Button>
                </DialogFooter>
            </DialogContent>)}
        </Dialog>
        <div className="grid w-full max-w-xl items-start gap-4 mt-6">
            {/* 6. Conditionally render the success alert based on alertS state */}
            {alertS && (<Alert>
                <CheckCircle2Icon className="h-4 w-4"/>
                <AlertTitle>保存成功!</AlertTitle>
                <AlertDescription>
                    您已成功查看并确认了产品详情。
                </AlertDescription>
            </Alert>)}
            {/* Keeping the second alert hidden as it seems to be an example and not part of the required flow */}
            {/*<Alert>
                <PopcornIcon/>
                <AlertTitle>
                    This Alert has a title and an icon. No description.
                </AlertTitle>
            </Alert>*/}
        </div>
    </div>);
};
