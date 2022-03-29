
import React, { useMemo, isValidElement } from 'react';
import Full from './Full';
import styles from './index.module.less';

export interface IGridLayout {
  /**
   * @description　设置每一行放几个元素
   * @default 1　
   */
  number?: number;
  /**
   * @description　设置每个元素的间距，会给数字加上px
   * @default -　
   */
  gutter?: number;
  children: React.ReactNode;
};
const GridLayout: React.FC<IGridLayout> & { Full: typeof Full } =  ({ number = 1, children, gutter }) => {
  const width = useMemo(() => 100 / number, [number]);
  const gutterStyle = gutter ? { marginLeft: -gutter + 'px', marginRight: -gutter + 'px' } : undefined;
  const colStyle = gutter ?
    Object.assign(
      { paddingLeft: gutter + 'px',  paddingRight: gutter + 'px'},
      {width: `${width}%`})
    : {width: `${width}%`};
  return (
    <div className={styles.layout} style={gutterStyle}>
      {React.Children.map(children, (child) => {
        let colCss = colStyle;
        if (isValidElement(child)) {
          colCss = child.type === Full ? Object.assign({}, colStyle, {width: '100%'}) : colStyle
        } 
        return (
          <div
            className={styles.col}
            style={colCss}>
            {child}
          </div>
        )
      })}
    </div>
  )
}
GridLayout.Full = Full;
export default GridLayout;