import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const useTable = (
  handleDelete: (key: string) => void,
  handleUpdate: (key: string) => void
) => {
  return [
    {
      title: "Product",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: { title: string }) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => handleUpdate(record.title)}
            style={{ color: "blue", cursor: "pointer" }}
          >
            <EditOutlined />
          </button>
          <button
            onClick={() => handleDelete(record.title)}
            style={{ color: "red", cursor: "pointer" }}
          >
            <DeleteOutlined />
          </button>
        </div>
      ),
    },
  ];
};
