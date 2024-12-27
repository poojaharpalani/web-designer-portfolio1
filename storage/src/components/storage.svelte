<script>
  import { onMount } from "svelte";
  import { storage } from "../firebaseConfig.js";
  import { uploadimage } from "../firebaseconfig.js"; // Import the Firebase storage
</script>

<input type="file" id="photo" />
<img id="image" alt="upload" />
<button on:click={uploadimage}>upload image</button>

<!-- <style>
  #image {
    height: 200px;
    width: 200px;
  }
</style> -->
