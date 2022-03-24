import { Form, Divider, Space, Input, Switch, Button } from "antd";
import { useEffect } from "react";
import {
  IInputData,
} from 'src/formEntry/data.d';
import BaseInfo from "./BaseInfo";
import FormModule from "./FormModule";
import styles from "./index.module.less";

const FormUI = () => {
  const [form] = Form.useForm();
  const submitHandle = (value: IInputData) => {
    console.log(value, '===onsave')
  }
  const { getFieldValue } = form;
  const enableModule = getFieldValue('moduleFlag')
  console.log(enableModule, '====???')
  return (
    <div className={styles.box}>
      <Form form={form} onFinish={submitHandle}>
        <BaseInfo />
        <Divider />
        <FormModule form={form} />
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form>

    </div>
  );
};
export default FormUI;
