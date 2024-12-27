<script>
  import { onMount } from "svelte";

  onMount(async () => {
    gsap = (await import("gsap")).default;
    ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

    gsap.registerPlugin(ScrollTrigger);
    videoanimate();
  });
  let gsap;
  function videoanimate() {
    gsap.fromTo(
      ".video",
      {
        scale: 1.5, // Start scale
      },
      {
        scale: 0.5, // End scale
        scrollTrigger: {
          trigger: ".video",
          start: "top top", // Animation starts when the top of the trigger hits the top of the viewport
          end: "75% center", // Animation ends when the bottom of the trigger hits the top of the viewport
          scrub: true,
          // markers: true,
        },
      }
    );
  }
</script>

<div class="videoparent relative">
  <div class="absolute group bg-[#EDE8E4] videodiv my-5 top-4">
    <video
      class=" z-10 w-full video pt-7"
      src="https://clarissemichard.com/SHOWREEL_CLA.4ddd3918.mp4"
      autoplay
      loop
      muted
      controls
      poster="https://via.placeholder.com/800x450.png?text=Preview"
    >
    </video>
  </div>
</div>
