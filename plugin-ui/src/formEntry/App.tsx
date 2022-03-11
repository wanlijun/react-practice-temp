import { useState } from 'react'
// import './App.less'
import { IInputData } from './data';
import Form from './Form';

// const vscode = acquireVsCodeApi();

declare const acquireVsCodeApi: any;
function App() {
  const [name, setName] = useState('')
  const data: IInputData = {
    moduleName: name,
    moduleTitle: '用户列表',
    table: {
      fields: [
        {
          key: 'name',
          label: '用户ID'
        },
        {
          key: 'tel',
          label: '手机号'
        },
        {
          key: 'point',
          label: '剩余点数'
        }
      ]
    },
    filters: [
      {
        key: 'name',
        label: '姓名',
        type: 'INPUT'
      },
      {
        key: 'phone',
        label: '手机号',
        type: 'INPUT'
      },
      {
        key: 'name',
        label: '用户类型',
        type: 'SELECT',
        options: [
          {
            label: '银行客户经理',
            value: 'BANK_CUSTOMER'
          },
          {
            label: '企业服务经纪人',
            value: 'ENTERPRISE_SERVICE'
          }
        ]
      },
      {
        key: 'name',
        label: '是否内部人员',
        type: 'SELECT',
        options: [
          {
            label: '是',
            value: true
          },
          {
            label: '否',
            value: false
          }
        ]
      }
    ]
  }
  const save = () => {
    // vscode.postMessage({
    //   command: 'save',
    //   data
    // })
  }
  return (
    <div className="App">
      <Form />
      <button onClick={save}>保存</button>

    </div>
  )
}

export default App