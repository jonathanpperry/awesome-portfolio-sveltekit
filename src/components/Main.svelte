<script>
  import Step from "./Step.svelte";

  let steps = [
    {
      name: "2D Game Portfolio",
      icon: "fa-solid fa-gamepad",
      href: "https://jonathanpperry.github.io/portfolio/",
    },
    {
      name: "Personal Blog App",
      icon: "fa-solid fa-blog",
      href: "https://jonnyramenblog.netlify.app",
    },
    {
      name: "Flowmazon",
      icon: "fa-brands fa-amazon",
      href: "https://nextjs-ecommerce-app-chi.vercel.app",
    },
    {
      name: "Reacstagram",
      icon: "fa-brands fa-instagram",
      href: "https://reacstagram.com",
    },
    {
      name: "Ionic Angular Pokedex",
      icon: "fa-solid fa-tablet",
      href: "https://ionic-angular-pokedex.netlify.app",
    },
    {
      name: "Jonny Ramen Weather",
      icon: "fa-solid fa-sun",
      href: "https://jonnyramenweather.netlify.app/",
    },
  ];

  let benefits = [
    {
      name: "a graduate of a top public university ",
      description:
        "I studied computer science at the University of Michigan College of Engineering. Some of my major electives were Artificial Intelligence, Computer Security, and User Interface Design.",
    },
    {
      name: "a product design & UX fanatic",
      description:
        "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.",
    },
    {
      name: "an excellent communicator",
      description:
        "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">Jonathan</span> Perry
        <br />
        Full Stack
        <span class="poppins text-violet-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="poppins text-violet-400">favorite tech</span> includes Javascript,
        Next.js or SvelteKit, TailwindCSS, Node.js + Express.js & PostgreSQL or Firebase/Firestore!
      </p>
      <a
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
        href="https://www.linkedin.com/in/jonathanpperry"
        target="_blank"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={"images/profile.png"}
        alt="Profile image"
        class="object-cover z-[2] max-h-[70]"
      />
    </div>
  </section>
  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-lg md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-400">see</span> my work?
      </h3>
    </div>
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Watch the video</p>
    </a>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          A portfolio site built using <strong class="text-violet-400">
            Prisma.js
          </strong>
          to showcase portfolio and projects in a fun, interactive,
          <strong class="text-violet-400">video game</strong>-like setting.
        </p>
      </Step>

      <Step step={steps[1]}>
        <p>
          My <strong class="text-violet-400">personal blog</strong> was created
          with
          <strong class="text-violet-400"
            >Next.js v13, Contentlayer, TailwindCSS</strong
          >
          and stores views data per blog page in a back end using
          <strong class="text-violet-400">Supabase.</strong>
          Features responsive design, animations, SEO optimizations and an ability
          to toggle between light/dark modes.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          Flowmazon is a full-stack
          <strong class="text-violet-400">e-commerce site</strong> built with
          <strong class="text-violet-400">
            Next.js 14, MongoDB, DaisyUI, Next Auth, and Prisma ORM
          </strong>
          that allows a user to login, shop around and add items to their cart, and
          implements merge of anonymous cart data with logged-in data after logging
          in.
        </p>
      </Step>
      <Step step={steps[3]}>
        <p>
          Reacstagram is an Instagram clone created with
          <strong class="text-violet-400"
            >React, Chakra UI, and Firebase (Auth, Firestore, Storage)</strong
          >
          This clone features a design similar to Instagram with many of the features.
        </p>
      </Step>
      <Step step={steps[4]}>
        <p>
          The <strong class="text-violet-400">Ionic Angular Pokédex</strong> was
          created with
          <strong class="text-violet-400"
            >Ionic Framework and hitting the Pokémon API</strong
          >. Features dynamic fetching of data and a slide library to show
          various images of each Pokémon.
        </p>
      </Step>
      <Step step={steps[5]}>
        <p>
          A simple weather application built using
          <strong class="text-violet-400"
            >Next.js v14 and Jotai state management library</strong
          >.
        </p>
      </Step>
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-400">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppings text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>

    <!-- Table Section -->
    <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">
      The <span class="text-violet-400 poppins">Complete</span> Package
    </h5>
    <div
      class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
    >
      <table class="bg-white text-slate-700 rounded text-center">
        <thead class="border-b border-solid border-slate-200">
          <tr class="">
            <th />
            <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
            <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8"
              >Me</th
            >
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-4 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Dedication
            </td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-4 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Critical Thought
            </td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-4 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Interpersonal Skills
            </td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-4 py-4 font-semibold text-sm whitespace-nowrap"
            >
              Programming Ability
            </td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
      <p>Scroll to see more &rarr;</p>
    </div>
    <p class="mx-auto">So why not invest?</p>
  </section>
</main>
