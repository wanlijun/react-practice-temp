import { IInputData, IFields, IFormItemType } from '@plugin/data-form';
import {
  COMPONENT_MAP,
  CUSTOM_COMPONENTS_TYPE,
} from './utils/constant';
import {
  getAntdComponent,
  getFormBody,
  getCustomComponent,
  CustomComponentType
} from './utils/temp';
import {
  upperCaseFirstLetter
} from './utils/helper';
type ComponentType = keyof typeof COMPONENT_MAP

function getComponentsType(data: IFields[]) {
  const types = data.map((item) => item.type);
  return new Array(...new Set(types));
}
function createRequestMethod(hasEdit: boolean) {
  if (hasEdit) {
    return `
      const { id } = parse(this.props.location.search)
      const params = this.handleParams(values);
      console.log(params)
      if (id) {
        // 编辑
      } else {
        // 新增
      }
    `
  }
  return `
    const params = this.handleParams(values);
    console.log(params)
  `
}
function createComponentStr(moduleName: string, fields: IFields[], prefix: boolean, hasEdit = false) {
  const typeList = getComponentsType(fields);
  const antdComponentsType = typeList.filter((type) => !CUSTOM_COMPONENTS_TYPE.includes(type));
  const customComponentsType = typeList.filter((type) => CUSTOM_COMPONENTS_TYPE.includes(type));
  // TODO:类型需要优化
  const components = getAntdComponent(antdComponentsType as ComponentType[]);
  const customComponents = getCustomComponent(customComponentsType as CustomComponentType[])
  const { str } = getFormBody(fields);

  return `
  import React, { Component } from 'react';
  import { observer, inject } from 'mobx-react';
  import { Form, Button, ${components}} from 'antd';
  import ModuleTitle from 'components/common/ModuleTitle';
  import MainTitle from 'components/common/mainTitle';
  ${hasEdit ? `import { parse } from 'query-string';` : ''}
  ${customComponents}
  import styles from './index.less';
  
  @Form.create()
  @inject('${upperCaseFirstLetter(moduleName)}Store')
  @observer
  class ${moduleName} extends Component {
    constructor(props) {
      super(props);
      // TODO:需要修改面包屑导航
      this.breadcrumbData = [
        { href: '', name: '金融中心', id: 2 },
        { href: '', name: '新增', id: 3 },
      ]
    }
    componentDidMount() {

    }
    // 处理参数
    handleParams(data) {
      const {
        ...params
      } = data;
      return params;
    }
    // 保存
    requestSave = () => {
      const {
        validateFields
      } = this.props.form;
      validateFields((error, values) => {
        if (!error) {
          ${createRequestMethod(hasEdit)}
        }
      })
    }
    goBack = () => {
      history.go(-1);
    }
  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      ${hasEdit ? ' detail: { data, loading: detailLoading },' : ''}
      formInfo: { loading }
    } = this.props.${moduleName}Store;
    return (
      <div className={styles.box}>
        <MainTitle items={this.breadcrumbData} />
        <div className={styles.form}>
          {/**TODO:标题**/}
          <ModuleTitle text="新闻信息" />
          <div className={styles.content}>
            <Form>
              ${str}
            </Form>
          </div>
        </div>
        <div className={styles.operation}>
          <Button onClick={this.goBack}>返回</Button>
          <Button
            type='primary'
            onClick={this.requestSave}
            loading={loading}
          >
            保存
          </Button>
        </div>
      </div>
    )
  }
}
  export default ${moduleName};
`;
}

export function generateTemp(data: IInputData) {
  const { moduleFlag, group, moduleName } = data;
  if (moduleFlag) {
    const result = group.map(({ subModuleName, fields, prefix }) => {
      return [
        {
          path: `./${subModuleName}/index.js`,
          render: () => createComponentStr(subModuleName, fields, prefix)
        },
        {
          path: `./${subModuleName}/index.less`,
          render: () => ''
        },
      ]
    })
    return result.flat(Infinity)
  }
  const fields = data.group[0].fields;
  return [
    {
      path: './index.js',
      render: () => createComponentStr(moduleName, fields, false)
    },
    {
      path: './index.less',
      render: () => ''
    },
  ]
}