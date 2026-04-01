import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    reactNative,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    android,
    kotlin,
    java,
    flutter,
    node,
    aspnet,
    aspnetcore,
    springboot,
    angular,
    aws,
    azure,
    docker,
  } = techStackDetails;

  const frontendStack = [
    { icon: html, label: "HTML" },
    { icon: css, label: "CSS" },
    { icon: js, label: "JavaScript" },
    { icon: react, label: "React" },
    { icon: reactNative, label: "React Native" },
    { icon: redux, label: "Redux" },
    { icon: tailwind, label: "Tailwind" },
    { icon: bootstrap, label: "Bootstrap" },
    { icon: sass, label: "SASS" },
    { icon: angular, label: "Angular" },
    { icon: android, label: "Android" },
    { icon: flutter, label: "Flutter" },
  ];

  const backendStack = [
    { icon: java, label: "Java" },
    { icon: kotlin, label: "Kotlin" },
    { icon: springboot, label: "Spring Boot" },
    { icon: node, label: "Node.js" },
    { icon: aspnet, label: "ASP.NET" },
    { icon: aspnetcore, label: "ASP.NET Core" },
  ];

  const cloudStack = [
    { icon: aws, label: "AWS" },
    { icon: azure, label: "Azure" },
    { icon: docker, label: "Docker" },
  ];

  const toolsStack = [
    { icon: vscode, label: "VSCode" },
    { icon: git, label: "Git" },
    { icon: github, label: "Github" },
    { icon: figma, label: "Figma" },
    { icon: npm, label: "NPM" },
    { icon: postman, label: "Postman" },
  ];

  const renderTechGrid = (items) => (
    <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-10 pt-6">
      {items.map(({ icon, label }) => (
        <div className="text-center" key={label}>
          <div className="relative">
            <img
              src={icon}
              title={label}
              alt={label}
              className="mx-auto w-16 h-16 object-contain"
            />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">{label}</p>
          </div>
        </div>
      ))}
    </section>
  );

  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>

      <section className="pt-6">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl font-semibold">
          Frontend
        </h2>
        {renderTechGrid(frontendStack)}
      </section>

      <section className="pt-10">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl font-semibold">
          Backend
        </h2>
        {renderTechGrid(backendStack)}
      </section>

      <section className="pt-10">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl font-semibold">
          Cloud
        </h2>
        {renderTechGrid(cloudStack)}
      </section>

      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
        {renderTechGrid(toolsStack)}
      </section>
    </main>
  );
}

export default Technologies;