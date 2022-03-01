import { useState } from 'react'
import './App.css'
import { IInputData } from './data';

const vscode = acquireVsCodeApi();

declare const acquireVsCodeApi:any;
function App() {
  const [name, setName] = useState('')
  const data:IInputData  = {
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
    }
  }
  const save = () => {
    vscode.postMessage({
      command: 'save',
      data
    })
  }
  return (
    <div className="App">
      <input value={name} onChange={(evt) => setName(evt.target.value)}/>
      <button onClick={save}>保存</button>
    </div>
  )
}

export default App