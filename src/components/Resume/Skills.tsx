import { FC } from "react";
import Tag from "./../Shared/Tag";
const Skills: FC = () => {
  const skills = [
    ".Net Core",
    "EF Core",
    "SignalR",
    "RESTful API",
    "Azure App Service",
    "Azure DevOps",
    "ReactJs",
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
