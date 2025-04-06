// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { personalDetails } from "../Details";

// function Home() {
//   const { name, tagline, img } = personalDetails;

//   const h11 = useRef(null);
//   const h12 = useRef(null);
//   const h13 = useRef(null);
//   const myimageref = useRef(null);

//   useEffect(() => {
//     if (!h11.current || !h12.current || !h13.current || !myimageref.current) return;

//     // Slight delay to make sure elements are mounted
//     const timeout = setTimeout(() => {
//       const tl = gsap.timeline();
//       tl.from(h11.current, {
//         x: "-100%",
//         delay: 0.8,
//         opacity: 0,
//         duration: 2,
//         ease: "Power3.easeOut",
//       })
//         .from(h12.current, {
//           x: "-100%",
//           delay: 0.5,
//           opacity: 0,
//           duration: 2,
//           ease: "Power3.easeOut",
//         }, "<")
//         .from(h13.current, {
//           x: "-100%",
//           delay: 0.1,
//           opacity: 0,
//           duration: 2,
//           ease: "Power3.easeOut",
//         }, "<")
//         .from(myimageref.current, {
//           x: "200%",
//           delay: 0.5,
//           opacity: 0,
//           duration: 2,
//           ease: "Power3.easeOut",
//         }, "<");
//     }, 50); // Small timeout helps in single-page apps

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <main className="container mx-auto max-width section md:flex justify-between items-center">
//       <div>
//         <h1
//           ref={h11}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           Hi,👋<br />I'm<br />
//         </h1>
//         <h1
//           ref={h12}
//           className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           {name}
//         </h1>
//         <h2
//           ref={h13}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           {tagline}
//         </h2>
//       </div>
//       <div className="mt-5 md:mt-0">
//         <img
//           ref={myimageref}
//           className="w-1/2 md:ml-auto rounded-full object-cover"
//           src={img}
//           alt="Pavan MG"
//         />
//       </div>
//     </main>
//   );
// }

// export default Home;


import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  const h11 = useRef(null);
  const h12 = useRef(null);
  const h13 = useRef(null);
  const myimageref = useRef(null);

  useEffect(() => {
    if (!h11.current || !h12.current || !h13.current || !myimageref.current) return;

    // Ensure initial visibility in case animation fails
    h11.current.style.opacity = 1;
    h12.current.style.opacity = 1;
    h13.current.style.opacity = 1;
    myimageref.current.style.opacity = 1;

    const timeout = setTimeout(() => {
      const tl = gsap.timeline();
      tl.from(h11.current, {
        x: "-100%",
        opacity: 0,
        duration: 1.5,
        ease: "Power3.easeOut",
        clearProps: "all",
      })
        .from(h12.current, {
          x: "-100%",
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
          clearProps: "all",
        }, "<")
        .from(h13.current, {
          x: "-100%",
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
          clearProps: "all",
        }, "<")
        .from(myimageref.current, {
          x: "100%",
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
          clearProps: "all",
        }, "<");
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="container mx-auto px-4 py-10 section flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left">
        <h1
          ref={h11}
          className="text-xl sm:text-2xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading"
        >
          Hi,👋<br />I'm<br />
        </h1>
        <h1
          ref={h12}
          className="text-xl sm:text-2xl md:text-4xl xl:text-5xl font-bold bg-clip-text bg-gradient text-transparent"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-lg sm:text-xl md:text-3xl xl:text-4xl font-bold text-dark-heading dark:text-light-heading"
        >
          {tagline}
        </h2>
      </div>

      <div className="mt-8 md:mt-0 w-full flex justify-center md:justify-end">
        <img
          ref={myimageref}
          className="w-2/3 sm:w-1/2 md:w-1/3 rounded-full object-cover"
          src={img}
          alt={name}
        />
      </div>
    </main>
  );
}

export default Home;
