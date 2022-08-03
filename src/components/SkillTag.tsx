import { FC } from 'react';
import Style from '../styles/SkillTag.module.scss';

interface SkillTagProps {
  name: string;
}
const SkillTag: FC<SkillTagProps> = (props) => {
  return <span className={Style.skillTag}>{props.name}</span>;
};

export default SkillTag;
