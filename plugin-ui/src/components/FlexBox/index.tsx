import React from 'react';
import styles from './index.module.less';

export interface IFlexBox {
  children: React.ReactNode,
  gutter?: number
}
const Full: React.FC<IFlexBox> =  ({children, gutter = 40}) => {
  return <div className={styles.box}>{
    React.Children.map(children, (child) => {
      return(
        <div style={{marginRight: gutter + 'px'}}>
           {child}
        </div>
      )
    })
    }</div>
}
export default Full;