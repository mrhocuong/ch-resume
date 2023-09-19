import { FC } from "react";
import Tag from "./../Shared/Tag";
const Skills: FC = () => {
  const skills = [
    "Asp.Net Core",
    "Entity Framework",
    "SignalR",
    "RESTful API",
    "Azure App Service",
    "Azure DevOps",
    "Azure Service Bus",
    "ReactJs",
    "VueJs",
    "Git",
    "Redis",
    "Docker",
    "Micro-services",
    "CQRS",
  ];
  return (
    <>
      <h2>SKILLS</h2>
      {skills.map((skill, i) => (
        <Tag key={i} name={skill} type={"primary"} />
      ))}
    </>
  );
};

export default Skills;
