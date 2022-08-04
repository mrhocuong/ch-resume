import { FC, ReactNode } from 'react';
import Style from '../../styles/Shared/A4Page.module.scss';
interface IA4PageProps {
  children?: ReactNode;
}
const A4Page: FC<IA4PageProps> = (props) => {
  return <div className={Style.a4Page}>{props.children}</div>;
};

export default A4Page;
