import { Button, Form, Input } from "antd";
import { UserInfo } from "../../types";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (value: UserInfo) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        value
      );
      const data = await res.data;

      const expiryTime = new Date().getTime() + 3600 * 1000;
      localStorage.setItem("accesToken", data.token);
      localStorage.setItem("tokenExpiry", expiryTime.toString());

      navigate("/app");
    } catch (e) {
      console.log(e as string);
    }
  };

  const checkTokenExpiry = () => {
    const expiry = localStorage.getItem("tokenExpiry");
    const currentTime = new Date().getTime();

    if (expiry && currentTime > parseInt(expiry)) {
      localStorage.removeItem("accesToken");
      localStorage.removeItem("tokenExpiry");
      return false;
    }

    return true;
  };

  useEffect(() => {
    const isTokenValid = checkTokenExpiry();
    if (!isTokenValid) {
      navigate("/login");
    }
  }, []);

  const token = localStorage.getItem("accesToken");
  if (!token) {
    return (
      <>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Field cannot be empty!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Field cannot be empty!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            className="w-full"
          >
            Submit
          </Button>
        </Form>
      </>
    );
  }
  return <Navigate to={"/app"} />;
};
