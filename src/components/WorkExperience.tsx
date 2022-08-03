import { FC, ReactNode } from 'react';
import Style from '../styles/WorkExperience.module.scss';
import PageTag from './PageTag';
interface IA4PageProps {
  hasTag: boolean;
  title: string;
  range: string;
  company: string;
  achievements: string[];
}
const WorkExperience: FC<IA4PageProps> = (props) => {
  const { hasTag, title, company, range, achievements } = props;
  return (
    <div className={Style.workExperience}>
      <div className={Style.headerWrapper}>
        {hasTag && <PageTag isSecondary />}
        <div className={Style.header}>
          <div className={Style.title}>{title}</div>
          <div className={Style.company}>{company}</div>
          <div className={Style.range}>{range}</div>
        </div>
      </div>
      <div className={Style.content}>
        <ul>
          {achievements.map((achievement) => (
            <li>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
