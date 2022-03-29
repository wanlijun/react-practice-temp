import { useEffect } from "react";
import { Form, Divider, Space, Input, Switch } from "antd";
import BaseInfo from "./BaseInfo";
import styles from "./index.module.less";

const ListUI = () => {
  const [form] = Form.useForm();
  return (
    <div className={styles.box}>
      <Form form={form}>
        <BaseInfo />
        <Divider style={{ marginTop: 0 }} />
      </Form>
    </div>
  );
};
export default ListUI;
