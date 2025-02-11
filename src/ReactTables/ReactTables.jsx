import React, { useState, useMemo } from "react";
import { Table as AntTable, Input, Button, Modal, Form, Pagination } from "antd";
import { useReactTable, getCoreRowModel, getPaginationRowModel } from "@tanstack/react-table";

const initialData = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index % 2 === 0 ? "Admin" : "User",
}));

const Table = () => {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  
  const filteredData = useMemo(() => 
    data.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ), 
    [data, searchTerm]  
  );

  const table = useReactTable({
    data: filteredData, 
    columns: [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "role", header: "Role" },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div>
            <Button type="link" onClick={() => handleEdit(row.original)}>Edit</Button>
            <Button type="link" danger onClick={() => handleDelete(row.original.id)}>Delete</Button>
          </div>
        ),
      },
    ],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { pagination },
    onPaginationChange: setPagination,
  });

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    form.setFieldsValue(user);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      setData((prevData) =>
        prevData.map((user) =>
          user.id === editingUser.id ? { ...user, ...values } : user
        )
      );
      setIsModalOpen(false);
      setEditingUser(null);
    });
  };

  return (
    <div>
      <Input
        placeholder="Search users"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 16, width: 300 }}
      />

      <AntTable
        dataSource={table.getRowModel().rows.map((row) => ({ key: row.id, ...row.original }))}
        columns={table.options.columns.map((col) => ({
          title: col.header,
          dataIndex: col.accessorKey,
          key: col.id,
          render: col.cell
            ? (_, record) => col.cell({ row: { original: record } })
            : undefined,
        }))}
        pagination={false} 
      />

      
      <Pagination
        current={table.getState().pagination.pageIndex + 1}
        pageSize={table.getState().pagination.pageSize}
        total={filteredData.length}
        onChange={(page, pageSize) => {
          table.setPageIndex(page - 1);
          table.setPageSize(pageSize);
        }}
        showSizeChanger
        pageSizeOptions={[5, 10, 15, 20]}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        style={{ marginTop: 16, textAlign: "center" }}
      />


      <Modal
        title="Edit User"
        open={isModalOpen}
        onOk={handleSave}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Role" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Table;
