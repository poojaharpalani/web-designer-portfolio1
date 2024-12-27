<script>
  import { onMount } from "svelte";

  let colors = [
    { bg: "#EDE8E4", text: "#000000" },
    { bg: "#272727", text: "#D0E955" },
    { bg: "#141D2E", text: "#2571F2" },
    { bg: "#1F6246", text: "#FCBCD2" },
    { bg: "#BA554A", text: "#ffe085" },
    { bg: "#504C26", text: "#E6EA59" },
    { bg: "#99A3BF", text: "#EBF0FD" },
    { bg: "#081E4A", text: "#FD4441" },
    { bg: "#42503E", text: "#FFD4AF" },
  ];
  let gifs = [
    { src: "https://clarissemichard.com/1.e3e58c57.gif", alt: "hello" },
    { src: "https://clarissemichard.com/2.a6927a93.gif", alt: "Description 2" },
    { src: "https://clarissemichard.com/3.1feac4ad.gif", alt: "Description 3" },
    { src: "https://clarissemichard.com/4.e0dea947.gif", alt: "Description 4" },
    { src: "https://clarissemichard.com/5.e08aa619.gif", alt: "Description 5" },
    { src: "https://clarissemichard.com/6.8b35ecac.gif", alt: "Description 6" },
    { src: "https://clarissemichard.com/7.6c73d1b1.gif", alt: "Description 7" },
    { src: "https://clarissemichard.com/8.3d56f037.gif", alt: "Description 8" },
    { src: "https://clarissemichard.com/9.2e0f7da2.gif", alt: "Description 9" },

    // Add more GIF objects as needed
  ];
  let currentIndex = 0;

  function changeMood() {
    currentIndex = (currentIndex + 1) % colors.length;
    document.documentElement.style.setProperty(
      "--bg-color",
      colors[currentIndex].bg
    );
    document.documentElement.style.setProperty(
      "--text-color",
      colors[currentIndex].text
    );
    changeGif();
  }

  onMount(() => {
    // Initialize color values on the client side
    document.documentElement.style.setProperty(
      "--bg-color",
      colors[currentIndex].bg
    );

    document.documentElement.style.setProperty(
      "--text-color",
      colors[currentIndex].text
    );
  });

  import { browser } from "$app/environment";
  import SplitType from "split-type";

  let gsap;
  let ScrollTrigger;

  onMount(async () => {
    if (browser) {
      gsap = (await import("gsap")).default;
      ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

      gsap.registerPlugin(ScrollTrigger);

      const text = new SplitType(".test", { types: "lines" });

      gsap.set(text.lines, {
        y: "100%",
        opacity: 0,
      });
      nav();
      hr();
      square();
      ScrollTrigger.create({
        trigger: "main",
        start: "top center",
        end: "bottom top",
        // markers: true,
        onEnter: () => animateText(text.lines),
        onEnterBack: () => animateText(text.lines),
        onLeave: () => resetText(text.lines),
        onLeaveBack: () => resetText(text.lines),
      });

      function animateText(elements) {
        gsap.to(elements, {
          y: "0%",
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        });
      }

      function resetText(elements) {
        gsap.set(elements, {
          y: "100%",
          opacity: 0,
        });
      }
    }
  });
  function nav() {
    gsap.from(".up-down", {
      y: -110,
      duration: 1,
    });
  }
  function hr() {
    gsap.fromTo(
      ".hr",
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 1 }
    );
  }
  function square() {
    gsap.fromTo(
      ".square",
      { rotation: 0, scale: 0 },
      { rotation: -360, scale: 1, duration: 2 }
    );
  }
</script>

<main>
  <!-- navbar -->
  <div
    class=" up-down bg-[#EDE8E4] flex items-center justify-between overflow-x-hidden overflow-y-hidden h-28 px-7 sticky top-0 left-0"
  >
    <div class=" top-0 left-0 p-4">
      <svg
        class="changable-svg logo lg:w-28 lg:h-24 h-20 w-18"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        style="fill: var(--text-color);"
      >
        <path
          d="M76.52,35.73V32.25H56.94v3.48H53.46v1.52H50v4.09h9.08V37.86H70.89v3.48h3.5v4.85h-3.5v3.53H66.78V46.19H56.9v3.48H53.46v3.48H50v4.31H48.61v2.36c-.86,1.94-2.13,3.74-3.84,3.74-2,0-3-4-3-11.23a94.94,94.94,0,0,1,.54-10c5.88-7.6,9.4-18.19,9.4-24.07,0-2.78-1-4.44-2.56-4.44-1,0-2.22.71-3.56,2.16-4.87,5.25-7.4,19-7.69,29.62l-.08.83v1.43c0,.88,0,1.73.05,2.55a20.35,20.35,0,0,1-7.69,8.32,18.09,18.09,0,0,1-5.28,2.13V36.55A8.7,8.7,0,0,0,30.05,38s2.33.22,4.06-3.74c1.81-4.16-1.54-8.08-1.54-8.08s1,3.7-.54,4.64c-1.29.78-2.38.48-5.57-1a9.07,9.07,0,0,0-7.59,0l-.3.16c-3.21,1.64-6.69,3.5-7.51,9.56s3.85,10,3.85,10,3.66,4,3.23,5.88c-.19.83-.54,1.45-3,3.56a19.51,19.51,0,0,1-6-7c-6.37-16.42,6.93-22.6,6.93-22.6C-2,33.24-.11,48.78.22,51.06c.36,2.53,4.22,14.88,16.72,15.11h.93c10.72.1,16.82-6.76,20.13-12.93.64,7.89,2.78,12.44,6,12.44,2.25,0,4.09-1.5,5.48-4.47H50v1h3.47v3.52H71.29V62.24h4.12v3.5H80v-30ZM47.61,17.3c.61-1.17,1.15-1.59,1.43-1.59s.86.88.86,2.8c0,6-3.7,15.49-7.39,21.28C43.69,30,45.75,20.91,47.61,17.3ZM24.11,61a12.06,12.06,0,0,1-7.85-1.38,11.37,11.37,0,0,0,3.71-4c2.28-4.2,2.39-6.36,2.09-8.33s-3.27-5.8-4.09-6.85L17.65,40a5.89,5.89,0,0,1-1.37-3C16.1,34.94,19,34.36,19,34.36s2-.61,5.07,1.68Zm50.28-4.36h-3.5v3.48H57.33V51.8H74.39Z"
          transform="translate(0 -13.83)"
        ></path>
      </svg>
    </div>
    <div class=" text-center h-screen flex items-center justify-center">
      <button
        class="rounded-full border-black border-2 px-3 cursor-pointer lg:text-sm text-xs"
        on:click={changeMood}
        style="color: var(--text-color);"
      >
        change the mood
      </button>
    </div>

    <div class="uppercase hover:underline">contact</div>
  </div>
  <!-- body -->
  <div>
    <div class=" heart flex justify-center">
      <svg
        class="changable-svg hero-picto lg:h-5 lg:w-5 h-3 w-3 beating-heart"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 99.81 93.24"
        style="fill: var(--text-color);"
      >
        <path
          d="M.1,60.51V13.56H11.26V3.38h22V13.69H44.48V29.18H55.57V13.69H66.74V3.38h22V13.56H99.9V60.51H88.77V70.75h-11V81.16H61.16V96.62H38.84V81H22.23V70.69H11.17V60.51Z"
          transform="translate(-0.1 -3.38)"
        ></path>
      </svg>
    </div>
  </div>
  <div
    class="  heading lg:text-9xl font-bold text-center text-4xl py-6 overflow-x-hidden"
  >
    <div>
      <p class="uppercase test">creative <br /> web designer</p>
      <p class="uppercase lg:text-xl test text-lg">co-founder of okey studio</p>
      <div class="relative flex items-center">
        <p
          class="absolute font-normal lg:text-sm left-5 lg:-top-44 pl-3 up-down text-xs -top-20"
        >
          1995
        </p>
        <p
          class="absolute font-normal text-sm pl-8 left-36 -top-44 up-down lg:flex hidden"
        >
          11.3
        </p>
        <p
          class="absolute font-normal text-sm uppercase right-36 -top-44 up-down lg:flex hidden"
        >
          free
        </p>
        <p
          class="absolute font-normal lg:text-sm right-5 lg:-top-44 pr-3 up-down text-xs -top-20"
        >
          2024
        </p>
      </div>
    </div>
  </div>
  <!-- fhffhfh -->
  <div class=" lg:flex lg:justify-between flex-wrap overflow-hidden">
    <!-- 1 -->
    <div class=" w-64 lg:px-7 mt-60">
      <ul
        class="flex lg:gap-5 h-full lg:justify-center items-center justify-between gap-x-32 mx-11"
      >
        <li>Instagram</li>
        <li>Dribble</li>
        <li>Linkedin</li>
      </ul>
    </div>
    <!-- 2 -->
    <div
      class="  lg:flex-col lg:w-52 lg:justify-center lg:items-center lg:gap-3 lg:top-5 lg:mt-0 -mt-56"
    >
      <div
        class=" lg:right-20 flex gap-3 lg:w-full lg:justify-center items-center lg:pl-0 pl-72"
      >
        <p class="h-4 w-4 bg-black"></p>
        <p class="test uppercase">i'm clarrise</p>
      </div>

      <div
        class="square lg:flex-col lg:justify-center h-52 lg:w-3/4 lg:pl-0 pl-80"
      >
        <img
          src={gifs[currentIndex].src}
          alt={gifs[currentIndex].alt}
          width="175"
          height="175"
          class="object-cover"
        />
      </div>
    </div>
    <!-- 3 -->
    <div class=" top-72 lg:-top-4 right-0">
      <hr class=" hr border-black border lg:w-56" />
      <div class="  uppercase flex items-center gap-x-16 py-2">
        <p class="test text-5xl">ui, ux</p>
        <p class="h-4 w-4 bg-black -mt-5 lg:ml-0 ml-56"></p>
      </div>

      <hr class="hr border-black border lg:w-56" />
      <p class="test text-5xl uppercase py-2">& web</p>
      <hr class="hr border-black border lg:w-56" />
      <p class=" test text-5xl uppercase py-2">design</p>
      <hr class="test border-black border lg:w-56" />
      <div>
        <p class=" test text-sm">
          I’m freelance web designer and <br /> co-founder of Okey Studio, a
          <br />studio focused on creating <br /> tailor-made websites.
        </p>
        <p class=" test text-sm font-bold py-6">Discover Okey Studio</p>
      </div>
    </div>
  </div>
</main>

<style>
  :global(body) {
    background-color: var(--bg-color, #ede8e4); /* Default background color */
    color: var(--text-color, #000000); /* Default text color */
    transition:
      background-color 0.5s,
      color 0.5s;
  }
  :global(.up-down) {
    background-color: var(
      --bg-color,
      #ede8e4
    ); /* Default nav background color */
  }
  @keyframes beat {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .beating-heart {
    animation: beat 1s infinite;
  }
  main p .line {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  main p .char {
    transform: translateY(120px);
    transition: transform 0.5s ease-in-out;
  }
</style>
