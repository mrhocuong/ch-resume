import A4Page from './components/A4Page';
import PageTag from './components/PageTag';
import WorkExperience from './components/WorkExperience';
import Style from './styles/App.module.scss';

function App() {
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
                <p>cuonghh913@gmail.com</p>
                <p>+84 79 23 10 456</p>
                <p> Ho Chi Minh City, Vietnam</p>
                <p> linkedin.com/in/cuongho913</p>
                <p>cuonghh913</p>
              </div>
            </div>
          </div>
          <div className={Style.body}>
            <div className={`${Style.column} ${Style.left}`}>
              <h2>WORK EXPERIENCE</h2>
              <WorkExperience
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
            <div className={Style.column}></div>
          </div>
        </div>
      </A4Page>

      <A4Page>
        <div className={Style.body}>
          <div className={`${Style.column} ${Style.left}`}>
            <h2>WORK EXPERIENCE</h2>
            <WorkExperience
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
      </A4Page>
    </div>
  );
}

export default App;
