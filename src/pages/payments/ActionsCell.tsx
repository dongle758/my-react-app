"use client"

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import type { Payment } from "./columns";

interface ActionsCellProps {
    payment: Payment;
}

export function ActionsCell({ payment }: ActionsCellProps) {
    const [showCustomerDialog, setShowCustomerDialog] = useState(false);
    const [showPaymentDialog, setShowPaymentDialog] = useState(false);

    const getStatusText = (status: Payment["status"]) => {
        const statusMap = {
            pending: "待支付",
            processing: "处理中",
            success: "成功",
            failed: "失败"
        };
        return statusMap[status] || status;
    };

    const getStatusColor = (status: Payment["status"]) => {
        const colorMap = {
            pending: "text-yellow-600",
            processing: "text-blue-600",
            success: "text-green-600",
            failed: "text-red-600"
        };
        return colorMap[status] || "";
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">打开菜单</span>
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                    <DropdownMenuLabel>操作</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(payment.id)}
                    >
                        复制付款 ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem onClick={() => setShowCustomerDialog(true)}>
                        查看客户
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setShowPaymentDialog(true)}>
                        查看支付详情
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* 查看客户对话框 */}
            <Dialog open={showCustomerDialog} onOpenChange={setShowCustomerDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>客户信息</DialogTitle>
                        <DialogDescription>
                            查看该支付订单的客户详细信息
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">客户邮箱</label>
                                <p className="text-sm font-semibold mt-1">{payment.email}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">支付 ID</label>
                                <p className="text-sm font-semibold mt-1">{payment.id}</p>
                            </div>
                        </div>
                        <div className="border-t pt-4">
                            <label className="text-sm font-medium text-muted-foreground">备注</label>
                            <p className="text-sm text-muted-foreground mt-1">
                                这是客户 {payment.email} 的详细信息。您可以在这里添加更多客户相关的信息。
                            </p>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowCustomerDialog(false)}>
                            关闭
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* 查看支付详情对话框 */}
            <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>支付详情</DialogTitle>
                        <DialogDescription>
                            查看该支付订单的完整详细信息
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">支付 ID</label>
                                <p className="text-sm font-semibold mt-1">{payment.id}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">支付金额</label>
                                <p className="text-sm font-semibold mt-1">
                                    {new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                    }).format(payment.amount)}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">支付状态</label>
                                <p className={`text-sm font-semibold mt-1 ${getStatusColor(payment.status)}`}>
                                    {getStatusText(payment.status)}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">客户邮箱</label>
                                <p className="text-sm font-semibold mt-1">{payment.email}</p>
                            </div>
                        </div>
                        <div className="border-t pt-4">
                            <label className="text-sm font-medium text-muted-foreground">支付说明</label>
                            <p className="text-sm text-muted-foreground mt-1">
                                支付状态为 <span className={getStatusColor(payment.status)}>{getStatusText(payment.status)}</span>。
                                {payment.status === "pending" && " 该订单正在等待支付处理。"}
                                {payment.status === "processing" && " 该订单正在处理中，请稍候。"}
                                {payment.status === "success" && " 该订单已成功完成支付。"}
                                {payment.status === "failed" && " 该订单支付失败，请检查支付信息。"}
                            </p>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowPaymentDialog(false)}>
                            关闭
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}


