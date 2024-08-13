"use client";

import { Button } from "@/components/ui/button";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import useAddWineModal from "@/hooks/useAddWineModal";
import { Plus } from "lucide-react";

// async function getData(): Promise<Payment[]> {
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//   ];
// }

export default function Client() {
  // const data = await getData();
  const addWineModal = useAddWineModal();

  const data: any = [
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
      email: "s@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];

  return (
    <>
      <div className="w-full mt-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Vinlista</h1>
            <h2 className="font-bold text-gray-500">This is your CMS grid</h2>
          </div>
          <Button
            onClick={addWineModal.onOpen}
            className="flex items-center gap-1 justify-center"
          >
            <Plus size={16} /> Nytt vin
          </Button>
        </div>
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}
