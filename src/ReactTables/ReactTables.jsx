import React, { useMemo } from "react";
import { Table as AntTable } from "antd";
import {useReactTable,getCoreRowModel,getPaginationRowModel,flexRender} from "@tanstack/react-table";

const ReactTable = () => {
  const data = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        role: i % 2 === 0 ? "Admin" : "User",
      })),
    []
  );
 
  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "role", header: "Role" },
    ],
    []
  );

 
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <AntTable
        dataSource={table.getRowModel().rows.map((row) => ({
          key: row.id,
          ...row.original,
        }))}
        columns={table.getHeaderGroups().flatMap((headerGroup) =>
          headerGroup.headers.map((header) => ({
            title: flexRender(
              header.column.columnDef.header,
              header.getContext()
            ),
            dataIndex: header.column.columnDef.accessorKey,
          }))
        )}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default ReactTable;