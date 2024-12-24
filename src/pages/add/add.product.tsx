import { Button, Form, Input } from "antd";

export type Product = {
  title: string;
  price: number;
  description: string;
  category: string;
  stock?: number;
};

export const AddProduct = () => {
  const onFinish = async (values: Product) => {
    const storedProducts: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    const updatedProducts = [...storedProducts, values];

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    alert("Product added successfully!");
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      className="grid grid-cols-2 gap-5"
    >
      <Form.Item
        name="title"
        label="Product Name"
        rules={[{ required: true, message: "Please input product name!" }]}
      >
        <Input placeholder="Enter product name" />
      </Form.Item>

      <Form.Item
        name="price"
        label="Product Price"
        rules={[{ required: true, message: "Please input product price!" }]}
      >
        <Input type="number" placeholder="Enter product price" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Product Description"
        rules={[
          { required: true, message: "Please input product description!" },
        ]}
      >
        <Input.TextArea placeholder="Enter product description" />
      </Form.Item>

      <Form.Item
        name="category"
        label="Product Category"
        rules={[{ required: true, message: "Please input product category!" }]}
      >
        <Input placeholder="Enter product category" />
      </Form.Item>

      <Form.Item name="stock" label="Product Stock">
        <Input type="number" placeholder="Enter product stock" />
      </Form.Item>

      <Form.Item className="col-span-2">
        <Button
          htmlType="submit"
          className="float-right w-[200px]"
          type="primary"
        >
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );
};
