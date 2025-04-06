import React from "react";
import Work from "../Components/Work";
import Education from "../Components/Education";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p  className="text-content md:text-lg lg:text-xl cursor-pointer text-justify">{personalDetails.about}</p>
      </section>
      <section>
        <h1 className="mt-8 text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Client, Location, Technology, Type, Duration, Responsibilities }) => (
            <Work
              position={Position}
              company={Company}
              client={Client}
              location={Location}
              technology={Technology}
              type={Type}
              duration={Duration}
              responsibilities={Responsibilities}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Degree, University, Location, Type, Duration }) => (
            <Education
              degree={Degree}
              university={University}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
