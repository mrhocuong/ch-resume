import {
  faLinkedin,
  faSkype,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import Style from "../../styles/FirstPage.module.scss";
import Organizations from "./Organizations";
import Skills from "./Skills";
import avatar from "../../assets/avatar.jpg";
import Languages from "./Languages";
import A4Page from "../Shared/A4Page";
import ExperienceCard from "../Shared/ExperienceCard";
import PageTag from "../Shared/PageTag";
interface IFirstPageProps {
  id?: string;
}
const FirstPage: FC<IFirstPageProps> = (props) => {
  return (
    <A4Page id={props.id}>
      <div className={Style.page}>
        <div className={Style.header}>
          <div className={Style.headerColumn}>
            <div className={`${Style.column} ${Style.first}`}>
              <PageTag />
              <div className={Style.content}>
                <h1>Cuong Ho</h1>
                <h3>Senior Software Developer</h3>
                <h4>A programming lover{"</>"}</h4>
              </div>
            </div>
            <div className={`${Style.column} ${Style.seconds}`}>
              <img src={avatar} alt="Avatar" />
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
                <FontAwesomeIcon icon={faLinkedin} />{" "}
                <a
                  href="https://linkedin.com/in/cuongho913"
                  target="_blank"
                  rel="noreferrer"
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
              key={"1-1"}
              title={" Founder"}
              subtitle={"Ve vé - Mua vé phải vui!"}
              note={"08/2023 - Present"}
              achievements={[
                "Founding a startup specializing in ticket sales and event management",
                "Assuming various roles in the project such as Product Owner, Technical Leader, Project Manager, Business Analyst, Tester, and Sales and Marketing",
                "Managing a Scrum team consisting of 4 members.",
              ]}
            />
            <ExperienceCard
              hasTag
              cssClasses={Style.experienceCardCustom}
              key={"1-2"}
              title={"Senior Full-stack Developer - Technical Leader"}
              subtitle={"Creative Technology - Aurecon Vietnam"}
              note={"12/2020 - Present"}
              achievements={[
                "Developing the code base for both backend and frontend",
                "Managing code quality and actively resolving production issues",
                "Conducting research to develop solutions based on client requirements.",
              ]}
            />
            <ExperienceCard
              hasTag
              cssClasses={Style.experienceCardCustom}
              key={"1"}
              title={"Technical Leader"}
              subtitle={"FPT Software - Vietnam"}
              note={"06/2020 - 12/2020"}
              achievements={[
                "Research and develop solutions based on clients' requirements",
                "Provide coaching to team members.",
              ]}
            />
          </div>
          <div className={`${Style.column} ${Style.right}`}>
            <Skills />
            <Languages />
            <Organizations />
          </div>
        </div>
      </div>
    </A4Page>
  );
};

export default FirstPage;
