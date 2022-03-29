import { Form, Divider, Space, Input, Switch, Button } from "antd";
import { useEffect, useState } from "react";
import {
  IInputData
} from '@plugin/data-form';
import BaseInfo from "./BaseInfo";
import FormModule from "./FormModule";
import styles from "./index.module.less";

interface FormUIProps {
  onSave: (data: IInputData) => void;
}

const FormUI = ({ onSave }: FormUIProps) => {
  const [form] = Form.useForm();
  const submitHandle = (value: IInputData) => {
    onSave(value);
  }
  return (
    <div className={styles.box}>
      <Form
        form={form}
        onFinish={submitHandle}
      >
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
