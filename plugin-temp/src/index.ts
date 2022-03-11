import {
  IInputData,
  IFormItem,
  FormItemType
} from './data';

const componentMap: Partial<Record<FormItemType, any>>  = {
  INPUT: 'BaseInput',
  SELECT: 'BaseSelect'
}
function getComponentType(filters: IFormItem[]) {
  const types = filters?.map((item) => item.type);
  const typeList = new Array(...new Set(types));
  const components = typeList.map((type) => componentMap[type]);
  return components.join(',');
}
function renderForm(filters: IFormItem[]) {
  let str = ``;
  return filters.map((item) => {
    switch (item.type) {
      case 'INPUT':
        str += `
          <Form.Item
            name="${item.key}"
            label="${item.label}"
          >
          <BaseInput
            placeholder="请输入${item.label}"/>
          </Form.Item>
        `
        break;
      case 'SELECT':
        str += `
          <Form.Item
            name="${item.key}"
            label="${item.label}"
          >
          <BaseSelect
            hasAll
            options={${item.options}}
          />
        </Form.Item>
        `
    }
  })
  return str;
}
export function renderTable(data: IInputData) {
  const { moduleName, filters } = data;
  if (!filters) {
  return ''
  }
  const components = getComponentType(filters);
  components
  return `
    import { ${components}} 'src/components/BaseForm'
    const layOut = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      }
    }
    const ${moduleName} = () => {
      return (
        <Form form={form} {...layOut}>
        <GridLayout
          number={4}>
          ${renderForm(filters)}
        </GridLayout>
        </Form>
    }
    export default ${moduleName};
  `
}


