<script>
  import Nav from "../assets/nav.svelte";
  import Intro from "../assets/intro.svelte";

  import { onMount, onDestroy } from "svelte";
  import Test from "../assets/test.svelte";
  import Projects from "../assets/projects.svelte";
  import Video from "../assets/video.svelte";
  let currentIndex = 0;
  let gsap;
  let dets = { x: 0, y: 0 };

  // Use a flag to check if we are in the browser
  let isBrowser = typeof window !== "undefined";

  onMount(() => {
    if (isBrowser) {
      // Dynamically load GSAP CDN
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js";
      script.onload = () => {
        gsap = window.gsap; // GSAP will be available as window.gsap
        initAnimations(); // Initialize your GSAP animations
      };
      document.head.appendChild(script);

      // Add mousemove event listener
      window.addEventListener("mousemove", handleMouseMove);

      // Add event listeners to handle cursor hover effect
      document.addEventListener("mouseover", handleMouseOver, true);
      document.addEventListener("mouseout", handleMouseOut, true);
    }
  });

  function initAnimations() {
    if (gsap) {
      gsap.to(".cursor", {
        x: () => dets.x,
        y: () => dets.y,
        ease: "power1.out",
      });
    }
  }

  function handleMouseMove(event) {
    dets.x = event.clientX;
    dets.y = event.clientY;

    if (gsap) {
      gsap.to(".cursor", { x: dets.x, y: dets.y, ease: "power1.out" });
    }
  }

  function handleMouseOver(event) {
    if (event.target !== document.querySelector(".cursor")) {
      document.querySelector(".cursor").classList.add("cursor-hover");
    }
  }

  function handleMouseOut(event) {
    document.querySelector(".cursor").classList.remove("cursor-hover");
  }

  onDestroy(() => {
    if (isBrowser) {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
    }
  });
</script>

<div class="cursor"></div>

<Nav {currentIndex}></Nav>

<Intro></Intro>

<Projects></Projects>
<Video></Video>

<!-- <Test></Test> -->

<style>
  .cursor {
    @apply w-5 h-5 bg-transparent border-2 border-transparent fixed
    pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50;
    /* transition-colors duration-300 ease-out; */

    /* background-color: transparent; */
    /* border: solid red 2px; */
    background: white;
    transition: 0.1s;
    transform: translate(-50%, -50%);
    pointer-events: none;
    top: 0;
    left: 0;
    mix-blend-mode: difference;
  }
</style>
