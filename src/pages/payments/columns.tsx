"use client"

import type {ColumnDef} from "@tanstack/react-table"
import {ArrowUpDown, MoreHorizontal} from "lucide-react"
import {Button} from "@/components/ui/button"
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Checkbox} from "@/components/ui/checkbox";

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const columns: ColumnDef<Payment>[] = [{
    id: "select", header: ({table}) => (<Checkbox
            checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="全选"
        />), cell: ({row}) => (<Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="选择行"
        />), enableSorting: false, enableHiding: false,
}, {
    accessorKey: "status", header: "Status",
}, {
    accessorKey: "email", header: ({column}) => {
        return (<Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>)
    },

}, {
    accessorKey: "amount", header: () => <div className="text-right">Amount</div>, cell: ({row}) => {
        const amount = parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD",
        }).format(amount)

        return <div className="text-right font-medium">{formatted}</div>
    },
}, {
    id: "actions", cell: ({row}) => {
        const payment = row.original

        return (<DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">打开菜单</span>
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>操作</DropdownMenuLabel>
                <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                    复制付款 ID
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>查看客户</DropdownMenuItem>
                <DropdownMenuItem>查看支付详情</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>)
    },
},]