import { FC } from 'react';
import A4Page from './Shared/A4Page';
import ExperienceCard from './Shared/ExperienceCard';
import Style from '../styles/SecondPage.module.scss';

const SecondPage: FC = () => {
  return (
    <A4Page>
      <div className={Style.page}>
        <div className={`${Style.body} ${Style.secondPage}`}>
          <div className={`${Style.column} ${Style.left}`}>
            <ExperienceCard
              cssClasses={Style.experienceCardCustom}
              hasTag
              key={'4'}
              title={'Full-stack Developer'}
              note={'Jun 2020 - Dec 2020'}
              subtitle={'FPT Software - Vietnam'}
              achievements={[
                'Transform a Material Management System built by Webform to Web Application',
                'Develop backend by C#, .Net Framework 4.5, MVC, Entity Framework, and Oracle database',
                'Develop frontend using Bootstraps and Jquery, ASP.NET Razor',
              ]}
            />
          </div>
          <div className={Style.column}></div>
        </div>
      </div>
    </A4Page>
  );
};

export default SecondPage;
