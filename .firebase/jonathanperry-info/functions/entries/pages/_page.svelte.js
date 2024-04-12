import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-between gap-4 items-center" data-svelte-h="svelte-dui1rj"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="relative z-4">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Personal Blog App",
      icon: "fa-solid fa-blog",
      href: "https://jonnyramenblog.netlify.app"
    },
    {
      name: "Flowmazon",
      icon: "fa-brands fa-amazon",
      href: "https://nextjs-ecommerce-app-chi.vercel.app"
    },
    {
      name: "Reacstagram",
      icon: "fa-brands fa-instagram",
      href: "https://reacstagram.com"
    },
    {
      name: "Ionic Angular Pokedex",
      icon: "fa-solid fa-tablet",
      href: "https://ionic-angular-pokedex.netlify.app"
    },
    {
      name: "Jonny Ramen Weather",
      icon: "fa-solid fa-sun",
      href: "https://jonnyramenweather.netlify.app/"
    },
    {
      name: "Next.js To-Do List",
      icon: "fa-solid fa-spinner",
      href: "https://google.com"
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
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14" data-svelte-h="svelte-1go7mik"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! I&#39;m <span class="poppins text-violet-400">Jonathan</span> Perry
        <br>
        Full Stack
        <span class="poppins text-violet-400">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="poppins text-violet-400">favorite tech</span> includes Javascript,
        Next.js or SvelteKit, TailwindCSS, Node.js + Express.js &amp; PostgreSQL or Firebase/Firestore!</p> <a class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" href="https://www.linkedin.com/in/jonathanpperry" target="_blank"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch →</h4></a></div> <div class="relative shadow-2xl grid place-items-center"> <img${add_attribute("src", "images/profile.png", 0)} alt="Profile image" class="object-cover z-[2] max-h-[70]"></div></section> <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-13comok"><h6 class="text-lg sm:text-lg md:text-2xl">A few of my creative endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work?</h3></div> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200" data-svelte-h="svelte-a00n4m"><i class="fa-regular fa-circle-play"></i> <p>Watch the video</p></a> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1g62gh6">My <strong class="text-violet-400">personal blog</strong> was created
          with
          <strong class="text-violet-400">Next.js v13, Contentlayer, TailwindCSS</strong>
          and stores views data per blog page in a back end using
          <strong class="text-violet-400">Supabase.</strong>
          Features responsive design, animations, SEO optimizations and an ability
          to toggle between light/dark modes.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1apt2a5">Flowmazon is a full-stack
          <strong class="text-violet-400">e-commerce site</strong> built with
          <strong class="text-violet-400">Next.js 14, MongoDB, DaisyUI, Next Auth, and Prisma ORM</strong>
          that allows a user to login, shop around and add items to their cart, and
          implements merge of anonymous cart data with logged-in data after logging
          in.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-j9qydz">Reacstagram is an Instagram clone created with
          <strong class="text-violet-400">React, Chakra UI, and Firebase (Auth, Firestore, Storage)</strong>
          This clone features a design similar to Instagram with many of the features.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[3] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1hbuzmf">The <strong class="text-violet-400">Ionic Angular Pokédex</strong> was
          created with
          <strong class="text-violet-400">Ionic Framework and hitting the Pokémon API</strong>. Features dynamic fetching of data and a slide library to show
          various images of each Pokémon.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[4] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1v4w2ob">A simple weather application built using
          <strong class="text-violet-400">Next.js v14 and Jotai state management library</strong>.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[5] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-c32u9c">A work in progress, the To-Do Application will feature user
          authentication and stores to-do data in a database back end using
          <strong class="text-violet-400">MongoDB.</strong>
          Features responsive design, animations, and more.</p>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-1pr81kz"><h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-1xbwjyh">I am . . .</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return `<div class="flex gap-6 sm:gap-8"><p class="poppings text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div>  <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins" data-svelte-h="svelte-1f719c">The <span class="text-violet-400 poppins">Complete</span> Package</h5> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full" data-svelte-h="svelte-lfa1wz"><table class="bg-white text-slate-700 rounded text-center"><thead class="border-b border-solid border-slate-200"><tr class=""><th></th> <th class="whitespace-nowrap p-2 px-4">Candidate #1</th> <th class="whitespace-nowrap p-2 px-4">Candidate #2</th> <th class="whitespace-nowrap p-2 px-4">Candidate #3</th> <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8">Me</th></tr></thead> <tbody><tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-4 py-4 font-semibold text-sm whitespace-nowrap">Dedication</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-4 py-4 font-semibold text-sm whitespace-nowrap">Critical Thought</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-4 py-4 font-semibold text-sm whitespace-nowrap">Interpersonal Skills</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-4 py-4 font-semibold text-sm whitespace-nowrap">Programming Ability</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td></tr></tbody></table></div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50" data-svelte-h="svelte-1fnroui"><p>Scroll to see more →</p></div> <p class="mx-auto" data-svelte-h="svelte-g5q3n9">So why not invest?</p></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
