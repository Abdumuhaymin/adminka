import { Table, Modal, Form, Input } from "antd";
import { useState } from "react";
import { useTable } from "./useTable";

type Product = {
  title: string;
  price: number;
  description: string;
  category: string;
  stock?: number;
};

export const ProductsTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [form] = Form.useForm();

  const handleDelete = (key: string) => {
    const storedProducts: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    const updatedProducts = storedProducts.filter(
      (product) => product.title !== key
    );

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    alert(`Product "${key}" has been deleted.`);
    window.location.reload(); // Reload to reflect changes
  };

  const handleUpdate = (key: string) => {
    const storedProducts: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    const productToUpdate = storedProducts.find(
      (product) => product.title === key
    );

    if (productToUpdate) {
      setEditingProduct(productToUpdate);
      form.setFieldsValue(productToUpdate);
      setIsModalVisible(true);
    } else {
      alert("Product not found.");
    }
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      const storedProducts: Product[] = JSON.parse(
        localStorage.getItem("products") || "[]"
      );
      const updatedProducts = storedProducts.map((product) =>
        product.title === editingProduct?.title
          ? { ...product, ...values }
          : product
      );

      localStorage.setItem("products", JSON.stringify(updatedProducts));
      alert(`Product "${editingProduct?.title}" has been updated.`);
      setIsModalVisible(false);
      setEditingProduct(null);
      window.location.reload(); // Reload to reflect changes
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setEditingProduct(null);
  };

  const columns = useTable(handleDelete, handleUpdate);
  const data: Product[] = JSON.parse(localStorage.getItem("products") || "[]");

  return (
    <>
      <h1>Products</h1>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.title}
      />

      <Modal
        title="Edit Product"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Save"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Product Name"
            rules={[
              { required: true, message: "Please input the product name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="price"
            label="Product Price"
            rules={[
              { required: true, message: "Please input the product price!" },
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            name="category"
            label="Product Category"
            rules={[
              { required: true, message: "Please input the product category!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="description"
            label="Product Description"
            rules={[
              {
                required: true,
                message: "Please input the product description!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="stock" label="Product Stock">
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
