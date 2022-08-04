import { faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import Style from '../styles/FirstPage.module.scss';
import Educations from './Educations';
import Interests from './Interests';
import Organizations from './Organizations';
import A4Page from './Shared/A4Page';
import ExperienceCard from './Shared/ExperienceCard';
import PageTag from './Shared/PageTag';
import Skills from './Skills';
import avatar from '../assets/avatar.png';
import Languages from './Languages';

const FirstPage: FC = () => {
  return (
    <A4Page>
      <div className={Style.page}>
        <div className={Style.header}>
          <div className={Style.headerColumn}>
            <div className={`${Style.column} ${Style.first}`}>
              <PageTag />
              <div className={Style.content}>
                <h1>Cuong Ho</h1>
                <h3>Senior Software Developer</h3>
                <h4>A programming lover{'</>'}</h4>
              </div>
            </div>
            <div className={`${Style.column} ${Style.seconds}`}>
              <img src={avatar} alt='Avatar' />
            </div>
            <div className={`${Style.column} ${Style.third}`}>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> cuonghh913@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> +84 79 23 10 456
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> Ho Chi Minh City,
                Vietnam
              </p>
              <p>
                <FontAwesomeIcon icon={faLinkedin} />{' '}
                <a
                  href='https://linkedin.com/in/cuongho913'
                  target='_blank'
                  rel='noreferrer'
                >
                  linkedin.com/in/cuongho913
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faSkype} /> cuonghh913
              </p>
            </div>
          </div>
        </div>
        <div className={Style.body}>
          <div className={`${Style.column} ${Style.left}`}>
            <h2>WORK EXPERIENCE</h2>
            <ExperienceCard
              hasTag
              cssClasses={Style.experienceCardCustom}
              key={'1-1'}
              title={'Senior Full-stack Software Developer'}
              subtitle={'Creative Technology - Aurecon Vietnam'}
              note={'12/2020 - Present'}
              achievements={[
                "Research and develop solution base on client's requirement",
                'Coach team members',
                'Delegating tasks and set deadlines for team',
              ]}
            />
            <ExperienceCard
              hasTag
              cssClasses={Style.experienceCardCustom}
              key={'1'}
              title={'Technical Leader'}
              subtitle={'FPT Software - Vietnam'}
              note={'06/2020 - 12/2020'}
              achievements={[
                "Research and develop solution base on client's requirement",
                'Coach team members',
                'Delegating tasks and set deadlines for team',
              ]}
            />
            <ExperienceCard
              cssClasses={Style.experienceCardCustom}
              hasTag
              key={'2'}
              title={'Senior Full-stack Software Developer'}
              note={'01/2018 - 04/2020'}
              subtitle={'Coinhako - Singapore'}
              achievements={[
                'Design and implement the microservices system (.Net Core 2.2, Angular 7, VueJs, Redis, Hangfire...etc)',
                'Build a scalable system. Using Kubernetes and Docker container for deployment on Azure App Service and GCP',
                'Set up CI/CD by Azure DevOps',
                'Manage the team has 5 members using the Scrum process',
              ]}
            />
            <ExperienceCard
              cssClasses={Style.experienceCardCustom}
              hasTag
              key={'3'}
              title={'Full-stack Software Developer'}
              note={'05/2016 - 12/2017'}
              subtitle={'Saigon Technology Software - Vietnam'}
              achievements={[
                'Lead the backend team to build a Real Estate Management System using .Net Core 1.0 and ElasticSearch. Support the mobile team to develop the application using React Native',
                'Work in Malaysia with the team to enhance the performance of the Payroll Management System',
                'Work with Australia clients to support to build of an Apartment Agreement Management System using AngularJs 1, .Net Framework 4.5 and MSSQL',
                'Working as full stack developer in another projects',
              ]}
            />
          </div>
          <div className={`${Style.column} ${Style.right}`}>
            <Skills />
            <Educations />
            <Organizations />
            <Languages />
            <Interests />
          </div>
        </div>
      </div>
    </A4Page>
  );
};

export default FirstPage;
