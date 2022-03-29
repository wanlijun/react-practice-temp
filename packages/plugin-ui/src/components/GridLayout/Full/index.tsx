import React from 'react';

export interface IFull {
  children: React.ReactNode
}
const Full: React.FC<IFull> =  ({children}) => {
  return <div>{children}</div>
}
export default Full;