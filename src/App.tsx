import { faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';
import {
  faCoffee,
  faElevator,
  faEnvelope,
  faLocation,
  faPhone,
  faPhoneAlt,
  faPhoneSlash,
  faPhoneSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import A4Page from './components/A4Page';
import PageTag from './components/PageTag';
import SkillTag from './components/SkillTag';
import WorkExperience from './components/WorkExperience';
import Style from './styles/App.module.scss';

function App() {
  const skills = [
    'Asp.Net Core',
    'Entity Framework',
    'Azure App Service',
    'Azure DevOps',
    'Reactjs',
    'VueJs',
    'Micro-services',
    'SignalR',
    'RESTful API',
    'Git',
    'Redis',
    'Kubernetes',
    'Docker',
    'Ubuntu',
  ];
  return (
    <div className={Style.App}>
      <A4Page>
        <div className={Style.page}>
          <div className={Style.header}>
            <div className={Style.headerColumn}>
              <div className={`${Style.column} ${Style.first}`}>
                <PageTag />
                <div className={Style.content}>
                  <h1>Cuong Ho</h1>
                  <h3>Senior Software Developer</h3>
                  <h5>A programming lover{'</>'}</h5>
                </div>
              </div>
              <div className={`${Style.column} ${Style.seconds}`}>
                <img
                  src='https://www.w3schools.com/howto/img_avatar.png'
                  alt='Avatar'
                />
              </div>
              <div className={`${Style.column} ${Style.third}`}>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} /> cuonghh913@gmail.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> +84 79 23 10 456
                </p>
                <p>
                  <FontAwesomeIcon icon={faLocation} /> Ho Chi Minh City,
                  Vietnam
                </p>
                <p>
                  <FontAwesomeIcon icon={faLinkedin} />{' '}
                  linkedin.com/in/cuongho913
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
              <WorkExperience
                hasTag
                title={'Technical Leader'}
                range={'Jun 2020 - Dec 2020'}
                company={'FPT Software - Vietnam'}
                achievements={[
                  "Research and develop solution base on client's requirement",
                  'Coach team members',
                  'Delegating tasks and set deadlines for team',
                ]}
              />
              <WorkExperience
                hasTag
                title={'Senior Full-stack Software Developer'}
                range={'Jun 2020 - Dec 2020'}
                company={'Coinhako - Singapore'}
                achievements={[
                  'Design and implement the microservices system ( .Net Core 2.2, Angular 7, VueJs, Redis, Hangfire...etc)',
                  'Build a scalable system. Using Kubernetes and Docker container for deployment on Azure App Service and GCP',
                  'Set up CI/CD by Azure DevOps',
                  'Manage the team has 5 members using the Scrum process',
                ]}
              />
              <WorkExperience
                hasTag
                title={'Full-stack Software Developer'}
                range={'Jun 2020 - Dec 2020'}
                company={'Saigon Technology Software - Vietnam'}
                achievements={[
                  'Lead the backend team to build a Real Estate Management System using .Net Core 1.0 and ElasticSearch. Support the mobile team to develop the application using React Native',
                  'Work in Malaysia with the team to enhance the performance of the Payroll Management System',
                  'Work with Australia clients to support to build of an Apartment Agreement Management System using AngularJs 1, .Net Framework 4.5 and MSSQL',
                  'Working as full stack developer in another projects',
                ]}
              />
            </div>
            <div className={`${Style.column} ${Style.right}`}>
              <h2>Skills</h2>
              {skills.map((skill) => (
                <SkillTag name={skill} />
              ))}
              <h2>EDUCATION</h2>
              <WorkExperience
                hasTag={false}
                title={'FPT University'}
                company={'Software Engineering'}
                range={'Oct 2011 - Oct 2016'}
                achievements={[]}
              />
            </div>
          </div>
        </div>
      </A4Page>

      <A4Page>
        <div className={Style.page}>
          <div className={`${Style.body} ${Style.secondPage}`}>
            <div className={`${Style.column} ${Style.left}`}>
              <WorkExperience
                hasTag
                title={'Full-stack Developer'}
                range={'Jun 2020 - Dec 2020'}
                company={'FPT Software - Vietnam'}
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
    </div>
  );
}

export default App;
