import { FC } from "react";
import A4Page from "./../Shared/A4Page";
import ExperienceCard from "./../Shared/ExperienceCard";
import Style from "../../styles/SecondPage.module.scss";
import Educations from "./Educations";
import Interests from "./Interests";
interface ISecondPageProps {
  id?: string;
}
const SecondPage: FC<ISecondPageProps> = (props) => {
  return (
    <A4Page id={props.id}>
      <div className={Style.page}>
        <div className={`${Style.body} ${Style.secondPage}`}>
          <div className={`${Style.column} ${Style.left}`}>
            <ExperienceCard
              cssClasses={Style.experienceCardCustom}
              hasTag
              key={"2"}
              title={"Senior Full-stack Software Developer"}
              note={"01/2018 - 04/2020"}
              subtitle={"Coinhako - Singapore"}
              achievements={[
                "Design and implement microservices and scalable systems using technologies like .Net Core 2.2, Angular 7, VueJs, Redis, Hangfire, Kubernetes, Docker, Azure, and more",
                "Manage a team of 5 members using the Scrum process.",
              ]}
            />
            <ExperienceCard
              cssClasses={Style.experienceCardCustom}
              hasTag
              key={"3"}
              title={"Full-stack Software Developer"}
              note={"05/2016 - 12/2017"}
              subtitle={"Saigon Technology Software - Vietnam"}
              achievements={[
                "Lead the backend team in constructing a Real Estate Management System with .Net Core 1.0 and ElasticSearch, while assisting the mobile team in React Native application development.",
                "Collaborate with the team in Malaysia to improve the performance of the Payroll Management System.",
                "Assist Australian clients in constructing an Apartment Agreement Management System using AngularJs 1, .Net Framework 4.5, and MSSQL.",
                "Fulfilling the role of a full-stack developer in other projects.",
              ]}
            />
            <ExperienceCard
              cssClasses={Style.experienceCardCustom}
              hasTag
              key={"4"}
              title={"Full-stack Developer"}
              note={"10/2014 - 04/2015,"}
              subtitle={"FPT Software - Vietnam"}
              achievements={[
                "Convert a Material Management System from Webform to a Web Application.",
                "Build the backend using C#, .Net Framework 4.5, MVC, Entity Framework, and an Oracle database.",
                "Develop the frontend using Bootstrap, jQuery, and ASP.NET Razor.",
              ]}
            />
          </div>
          <div className={`${Style.column} ${Style.right}`}>
            <Educations />
            <Interests />
          </div>
        </div>
      </div>
    </A4Page>
  );
};

export default SecondPage;
