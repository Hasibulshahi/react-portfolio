import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
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
    node,
    angular,
  } = techStackDetails;
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
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="text-center">
          <div className="relative">
            <img src={html} title="HTML" alt="HTML" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">HTML</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={css} title="CSS" alt="CSS" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">CSS</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={js} title="JavaScript" alt="JavaScript" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">JavaScript</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={react} title="React" alt="React" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">React</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={redux} title="Redux" alt="Redux" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">Redux</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">Tailwind</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={bootstrap} title="Bootstrap" alt="Bootstrap" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">Bootstrap</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={sass} title="SASS" alt="SASS" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">SASS</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={java} title="Java" alt="Java" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">Java</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={android} title="Android" alt="Android" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">Android</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={kotlin} title="Kotlin" alt="Kotlin" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">Kotlin</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={node} title="Node" alt="Node" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">Node.Js</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={angular} title="Angular" alt="Angular" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">Angular</p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="text-center">
          <div className="relative">
            <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">VSCode</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={git} title="Git" alt="Git" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">Git</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={github} title="Github" alt="Github" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">Github</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={figma} title="Figma" alt="Figma" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">Figma</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={npm} title="NPM" alt="NPM" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">NPM</p>
          </div>
        </div>
        <div className="text-center">
          <div className="relative">
            <img src={postman} title="Postman" alt="Postman" className="mx-auto w-16 h-16" />
            <p className="text-sm mt-2 text-dark-heading dark:text-light-heading">Postman</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Technologies;