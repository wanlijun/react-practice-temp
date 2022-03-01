import { IInputData } from './data';
export function renderTable(data: IInputData) {
  const { moduleName } = data;
  return `
    const Demo = () => {
      return <div>${moduleName}</div>
    }
    export default Demo;
  `
}