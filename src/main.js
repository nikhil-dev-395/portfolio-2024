const FrontendSkills = [
  { id: "1", name: "HTML", icon: "fa-brands fa-html5" },
  { id: "2", name: "CSS", icon: "fa-brands fa-css3" },
  { id: "3", name: "JavaScript", icon: "fa-brands fa-js" },
  { id: "4", name: "Bootstrap", icon: "devicon-bootstrap-plain" },
  { id: "5", name: "React JS", icon: "devicon-react-original" },
  { id: "6", name: "Tailwind", icon: "devicon-tailwindcss-original" },
];

const BackendSkills = [
  { id: "1", name: "node js ", icon: "devicon-nodejs-plain-wordmark" },
  { id: "2", name: "express js", icon: "devicon-express-original-wordmark" },
  { id: "3", name: "mongo db", icon: "devicon-mongodb-plain" },
  { id: "4", name: "postman ", icon: "devicon-postman-plain" },
  { id: "5", name: "API development", icon: "devicon-fastapi-plain" },
  { id: "6", name: "mongoose", icon: "devicon-mongoose-original-wordmark" },
];

const skills = document.querySelector("#skills");

const FrontendSkillsList = FrontendSkills.map((skill) => {
  return `
    <li class="pt-5 ">
      <div class="flex items-center gap-4">
        <i class="${skill.icon} py-2 px-3 text-3xl"></i>
        <div>
          <h2 class="">${skill.name}</h2>
        </div>
      </div>
    </li>`;
}).join(""); // Join array into a single string

skills.innerHTML = FrontendSkillsList;

const Backend = document.querySelector("#backendSkills");

const BackendSkillsList = BackendSkills.map((skill) => {
  return `
    <li class="pt-5">
      <div class="flex items-center gap-4">
        <i class="${skill.icon} py-2 px-3 text-3xl"></i>
        <div>
          <h2>${skill.name}</h2>
        </div>
      </div>
    </li>`;
}).join(""); // Join array into a single string

Backend.innerHTML = BackendSkillsList;
