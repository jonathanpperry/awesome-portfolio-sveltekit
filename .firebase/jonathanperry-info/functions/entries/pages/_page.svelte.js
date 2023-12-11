import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-between gap-4 items-center"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="relative z-4" data-svelte-h="svelte-avspdr">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Reacstagram",
      icon: "fa-brands fa-instagram",
      href: "https://reacstagram.com"
    },
    {
      name: "Ultimate Todos",
      icon: "fa-solid fa-list-check"
    },
    {
      name: "Pokedex",
      icon: "fa-solid fa-diagram-project"
    }
  ];
  let benefits = [
    {
      name: "a graduate of a top public university ",
      description: "I studied computer science at the University of Michigan College of Engineering. Some of my major electives were Artificial Intelligence, Computer Security, and User Interface Design."
    },
    {
      name: "a product design & UX fanatic",
      description: "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences."
    },
    {
      name: "an excellent communicator",
      description: "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! I&#39;m <span class="poppins text-violet-400" data-svelte-h="svelte-a4rtin">Jonathan</span> Perry
        <br>
        Full Stack
        <span class="poppins text-violet-400" data-svelte-h="svelte-1g2scfk">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="poppins text-violet-400" data-svelte-h="svelte-1xjnfsm">favorite tech</span> includes Javascript,
        Next.js or SvelteKit, TailwindCSS, Node.js + Express.js &amp; PostgreSQL or Firebase/Firestore!</p> <a class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" href="https://www.linkedin.com/in/jonathanpperry" target="_blank"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9" data-svelte-h="svelte-sc9lnl">Get in touch →</h4></a></div> <div class="relative shadow-2xl grid place-items-center"><img${add_attribute("src", "images/profile.png", 0)} alt="Profile image" class="object-cover z-[2] max-h-[70]"></div></section> <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24"><div class="flex flex-col gap-2 text-center"><h6 class="text-lg sm:text-lg md:text-2xl" data-svelte-h="svelte-u5puf2">A few of my creative endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400" data-svelte-h="svelte-1ar2jvj">see</span> my work?</h3></div> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"><i class="fa-regular fa-circle-play"></i> <p data-svelte-h="svelte-1kfbkvj">Watch the video</p></a> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p>Reacstagram is an Instagram clone created with
          <strong class="text-violet-400" data-svelte-h="svelte-1d0ocvn">React, Chakra UI, and Firebase (Auth, Firestore, Storage)</strong>
          This clone features a design similar to Instagram with many of the features.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p>Todoist is a full-stack
          <strong class="text-violet-400" data-svelte-h="svelte-1fi8lg7">React &amp; Firebase/Firestore</strong> CRUD
          application that allows a user to login, manage a tidy and efficacious
          todo list, and persist this information across all devices.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p>The Pokedex is a
          <strong class="text-violet-400" data-svelte-h="svelte-1uxs1sb">Ionic Framework</strong> based web
          application hosted on
          <strong class="text-violet-400" data-svelte-h="svelte-16fzqy2">Netlify</strong>, that consumes and
          caches the <strong class="text-violet-400" data-svelte-h="svelte-af3e0e">Pokemon API</strong> to display
          all Pokemon information. Gotta catch em all!</p>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"><h6 class="text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-9ge9h">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400" data-svelte-h="svelte-1prx1ip">about</span> me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-1xbwjyh">I am . . .</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return `<div class="flex gap-6 sm:gap-8"><p class="poppings text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div>  <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">The <span class="text-violet-400 poppins" data-svelte-h="svelte-lrosfd">Complete</span> Package</h5> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"><table class="bg-white text-slate-700 rounded text-center"><thead class="border-b border-solid border-slate-200"><tr class=""><th></th> <th class="whitespace-nowrap p-2 px-4" data-svelte-h="svelte-1g7rl2v">Candidate #1</th> <th class="whitespace-nowrap p-2 px-4" data-svelte-h="svelte-eye7ak">Candidate #2</th> <th class="whitespace-nowrap p-2 px-4" data-svelte-h="svelte-1bko2x9">Candidate #3</th> <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8" data-svelte-h="svelte-8sufec">Me</th></tr></thead> <tbody><tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-4 py-4 font-semibold text-sm whitespace-nowrap" data-svelte-h="svelte-kojd5g">Dedication</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-4 py-4 font-semibold text-sm whitespace-nowrap" data-svelte-h="svelte-1gpvop2">Critical Thought</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-4 py-4 font-semibold text-sm whitespace-nowrap" data-svelte-h="svelte-10n35lq">Interpersonal Skills</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-4 py-4 font-semibold text-sm whitespace-nowrap" data-svelte-h="svelte-18nq9nv">Programming Ability</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td></tr></tbody></table></div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50"><p data-svelte-h="svelte-a6m9qq">Scroll to see more →</p></div> <p class="mx-auto" data-svelte-h="svelte-g5q3n9">So why not invest?</p></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
