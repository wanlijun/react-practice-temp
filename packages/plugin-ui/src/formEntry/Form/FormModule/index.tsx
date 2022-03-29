import {
  Form,
  Input,
  Switch,
  Space,
  Divider,
  Button,
  FormInstance
} from "antd";
import Fields from "../Fields";
import FlexBox from "src/components/FlexBox";
import styles from './index.module.less';
interface FormModuleProps {
  form: FormInstance,
}
const FormModule = ({ form }: FormModuleProps) => {
  const { getFieldValue } = form;
  return (
    <Form.List
      name="group"
      initialValue={[{ moduleName: "defaultModule", prefix: false }]}
    >
      {(fields, { add, remove }) => {
        return fields.map(({ key, name, ...restField }, idx) => {
          return (
            <div key={key}>
              <Form.Item shouldUpdate>
                {
                  () => {
                    if (getFieldValue('moduleFlag')) {
                      return (
                        <FlexBox gutter={30}>
                          <Form.Item
                            className={styles.moduleName}
                            {...restField}
                            label="模块名字"
                            name={[name, "subModuleName"]}
                            rules={[
                              {
                                required: true,
                                message: '请输入模块名字'
                              }
                            ]}
                          >
                            <Input placeholder="请输入文件名称"></Input>
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            label="prefix"
                            name={[name, "prefix"]}
                            valuePropName="checked"
                          >
                            <Switch />
                          </Form.Item>
                          <Button onClick={() => remove(idx)}>删除</Button>
                        </FlexBox>
                      )
                    }
                    return null
                  }
                }
              </Form.Item>
              <Fields name={[name, "fields"]} />
              <Divider style={{ marginTop: 0 }} />
              <Form.Item shouldUpdate>
                {
                  () => (
                    getFieldValue('moduleFlag') && idx === fields.length - 1 &&
                    <Button className={styles.addBtn} onClick={() => add()}>添加模块</Button>
                  )
                }
              </Form.Item>
            </div>
          );
        });
      }}
    </Form.List >
  );
};
export default FormModule;
