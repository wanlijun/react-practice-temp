import { Form, Divider, Space, Input, Switch } from "antd";
import { useEffect } from "react";
import BaseInfo from "./BaseInfo";
import FormModule from "./FormModule";
import styles from "./index.module.less";

const FormUI = () => {
  const [form] = Form.useForm();
  const initFields = () => {
    form.setFieldsValue({
      group: [
        {
          moduleName: "111",
          moduleFlag: false,
        },
        {
          moduleName: "111",
          moduleFlag: false,
        },
        {
          moduleName: "111",
          moduleFlag: false,
        },
      ],
    });
  };
  return (
    <div className={styles.box}>
      <Form form={form}>
        <BaseInfo />
        <Divider style={{ marginTop: 0 }} />
        <FormModule />
        <button onClick={initFields}>初始化</button>
      </Form>
    </div>
  );
};
export default FormUI;
