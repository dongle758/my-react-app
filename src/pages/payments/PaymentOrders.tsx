import { useEffect, useState } from "react";
import { columns, type Payment } from "./columns";
import { DataTable } from "./data-table";

// 模拟异步获取数据（可以替换成真实的 API 请求）
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
      {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "g@example.com",
      },
      {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "d@example.com",
      },
      {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "as@example.com",
      },
      {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "vvaf@example.com",
      },
      {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "m@example.com",
      },
      {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "m@example.com",
      },
      {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "m@example.com",
      },
      {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "m@example.com",
      },
      {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "m@example.com",
      },
      {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "m@example.com",
      },
      {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "m@example.com",
      },
      {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "m@example.com",
      },
    // ...
  ];
}

// 注意：这里不能把组件本身写成 async
// 在 React（尤其是 Next 的 Client Component）里，组件必须是同步函数
// 异步逻辑放在 useEffect 里处理
export default function PaymentOrdersPage() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    getData()
      .then(setData)
      .catch((err) => {
        console.error("加载支付数据失败:", err);
      });
  }, []);

  return (
    <div className="container py-10 mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
