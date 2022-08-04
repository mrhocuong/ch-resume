import { FC } from 'react';
import ExperienceCard from './Shared/ExperienceCard';
import Style from './../styles/Organizations.module.scss';
const Organizations: FC = () => {
  return (
    <>
      <h2>ORGANIZATIONS</h2>
      <ExperienceCard
        cssClasses={Style.organizationCardCustom}
        title={'Fpt Software (06/2020 - Present)'}
        subtitle={'Full-stack Developer'}
      />
      <ExperienceCard
        cssClasses={Style.organizationCardCustom}
        title={'Coinhako (01/2018 - 04/2020)'}
        subtitle={'Senior Full-stack Developer'}
      />
      <ExperienceCard
        cssClasses={Style.organizationCardCustom}
        title={'Saigon Technology Software (05/2016 - 12/2017)'}
        subtitle={'Full-stack Developer'}
      />
      <ExperienceCard
        cssClasses={Style.organizationCardCustom}
        title={'Fpt Software (10/2014 - 04/2015)'}
        subtitle={'Full-stack Developer'}
      />
      <h2>LANGUAGES</h2>
      <ExperienceCard
        cssClasses={Style.organizationCardCustom}
        title={'Vietnamese'}
        subtitle={'Native or Bilingual Proficiency'}
      />
      <ExperienceCard
        cssClasses={Style.organizationCardCustom}
        title={'English'}
        subtitle={'Professional Working Proficiency'}
      />
    </>
  );
};

export default Organizations;
