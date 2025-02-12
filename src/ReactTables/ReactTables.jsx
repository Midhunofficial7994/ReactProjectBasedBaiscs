import React from "react";
import { Input, Table as AntTable, Button, Modal, Form, Pagination, Row, Col } from "antd";
import { useReactTable, getCoreRowModel, getPaginationRowModel } from "@tanstack/react-table";
import useTableLogic from "./useTableLogic";

const initialData = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index % 2 === 0 ? "Admin" : "User",
}));

const Table = () => {
  const {
    data,
    searchTerm,
    setSearchTerm,
    pagination,
    setPagination,
    isModalOpen,
    setIsModalOpen,
    handleDelete,
    handleEdit,
    handleSave,
    handleSort,
  } = useTableLogic(initialData);

  const [form] = Form.useForm();

  const table = useReactTable({
    data,
    columns: [
      {
        accessorKey: "id",
        header: "ID",
        enableSorting: true,
      },
      {
        accessorKey: "name",
        header: "Name",
        enableSorting: true,
      },
      {
        accessorKey: "email",
        header: "Email",
        enableSorting: true,
      },
      {
        accessorKey: "role",
        header: "Role",
        enableSorting: true,
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div style={{ display: "flex", gap: "8px" }}>
            <Button type="link" onClick={() => handleEdit(row.original)} style={{ color: "#1890ff" }}>
              Edit
            </Button>
            <Button type="link" danger onClick={() => handleDelete(row.original.id)}>
              Delete
            </Button>
          </div>
        ),
      },
    ],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { pagination },
    onPaginationChange: setPagination,
  });

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      <Row gutter={[16, 16]} justify="center">
        <Col span={12}> 
          <Input
            placeholder="Search users"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              marginBottom: 16,
              width: "100%",
              maxWidth: "500px", 
              padding: "10px",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          />
        </Col>
      </Row>

      <AntTable
        dataSource={table.getRowModel().rows.map((row) => ({ key: row.id, ...row.original }))}
        columns={table.options.columns.map((col) => ({
          title: col.header,
          dataIndex: col.accessorKey,
          key: col.id,
          render: col.cell
            ? (_, record) => col.cell({ row: { original: record } })
            : undefined,
          onHeaderCell: () => ({
            onClick: () => handleSort(col.accessorKey),
          }),
        }))}
        pagination={false}
        rowClassName={(record, index) => (index % 2 === 0 ? "table-row-even" : "table-row-odd")}
        bordered
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "80%", 
          maxWidth: "1000px",
          margin: "0 auto", 
        }}
      />

      <Pagination
        current={table.getState().pagination.pageIndex + 1}
        pageSize={table.getState().pagination.pageSize}
        total={data.length}
        onChange={(page, pageSize) => {
          setPagination({ pageIndex: page - 1, pageSize });
        }}
        showSizeChanger
        pageSizeOptions={[5, 10, 15, 20]}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        style={{ marginTop: 16, textAlign: "center" }} 
      />

      <Modal
        title="Edit User"
        open={isModalOpen}
        onOk={() => handleSave(form)}
        onCancel={() => setIsModalOpen(false)}
        okText="Save Changes"
        cancelText="Cancel"
        style={{ maxWidth: "600px" }}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input style={{ borderRadius: "4px" }} />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
            <Input style={{ borderRadius: "4px" }} />
          </Form.Item>
          <Form.Item name="role" label="Role" rules={[{ required: true }]}>
            <Input style={{ borderRadius: "4px" }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Table;
