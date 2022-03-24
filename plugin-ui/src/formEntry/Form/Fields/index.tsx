import {
  Form,
  Input,
  Select
} from "antd";
import {
  PlusCircleOutlined,
  MinusCircleOutlined
} from '@ant-design/icons';
import FlexBox from "src/components/FlexBox";
import {
  TYPE_MAP_OPTIONS
} from 'src/formEntry/constants';
import styles from './index.module.less'
import Rule from './Rule';

const { Option } = Select;

const Fields = ({ name }) => {
  return (
    <Form.List
      name={name}
      initialValue={[{ key: "1", type: true }]}
    >
      {(fields, { add, remove }) => {
        return fields.map(({ key, name: childName, ...restField }, idx) => {
          console.log(name, childName, '=====???Fields')
          return (
            <div key={key} className={styles.fields}>
              <FlexBox gutter={30}>
                <Form.Item
                  {...restField}
                  label="字段名"
                  name={[childName, "label"]}
                >
                  <Input placeholder="请输入"></Input>
                </Form.Item>
                <Form.Item {...restField}
                  label="字段key"
                  name={[childName, "key"]}>
                  <Input placeholder="请输入"></Input>
                </Form.Item>
                <Form.Item
                  {...restField}
                  label="类型"
                  name={[childName, "type"]}
                >
                  <Select
                    style={{ width: '195px' }}
                    placeholder="请选择类型"
                  >
                    {
                      TYPE_MAP_OPTIONS.map((item) => (
                        <Option
                          value={item.value}
                          key={item.value}
                        >
                          {item.label}
                        </Option>
                      ))
                    }
                  </Select>
                </Form.Item>
                <Rule name={[childName, "rules"]} />
                <PlusCircleOutlined onClick={() => add()} style={{ fontSize: '30px', color: '#2196f3' }} />
                <MinusCircleOutlined onClick={() => remove(idx)} style={{ fontSize: '30px', color: '#2196f3' }} />
              </FlexBox>
            </div>
          );
        });
      }}
    </Form.List>
  );
};
export default Fields;
