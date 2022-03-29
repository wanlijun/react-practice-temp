import { useState } from 'react'
// import './App.less'
import { IInputData } from '@plugin/data-form';
import Form from './Form';

let vscode: any;
declare const acquireVsCodeApi: any;
if (import.meta.env.MODE !== 'development') {
  vscode = acquireVsCodeApi();
}
function App() {
  const [name, setName] = useState('')
  const saveHandle = (data: IInputData) => {
    console.log(import.meta.env.MODE, 'env')
    if (import.meta.env.MODE !== 'development') {
      console.log(vscode, '=====???save')
      vscode.postMessage({
        command: 'save',
        data
      })
    } else {
      console.log(data, '=====???')
    }
  }
  return (
    <div className="App">
      <Form onSave={saveHandle} />
    </div>
  )
}

export default App