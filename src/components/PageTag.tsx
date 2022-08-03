import { FC } from 'react';
import Style from '../styles/PageTag.module.scss';

interface PageTagProps {
  position?: 'left' | 'right';
}
const PageTag: FC<PageTagProps> = (props) => {
  return (
    <div
      className={`${Style.tag} ${
        props.position === 'right' ? Style.right : null
      }`}
    ></div>
  );
};

export default PageTag;
