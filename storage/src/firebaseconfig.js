// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaCqp3EVfxHST2gRL1_QPaNbVZj-qRBS4",
  authDomain: "fir-authentication-7dc66.firebaseapp.com",
  projectId: "fir-authentication-7dc66",
  storageBucket: "fir-authentication-7dc66.appspot.com",
  messagingSenderId: "220243357568",
  appId: "1:220243357568:web:730cb9c38610e2ec9b1b65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Initialize storage
const storageRef = ref(storage); // Create a reference to the storage

export function uploadimage() {
  const file = document.querySelector("#photo").files[0];

  if (!file) {
    alert("No file selected");
    return;
  }

  const name = new Date().toISOString() + "-" + file.name;
  const fileRef = ref(storage, name); // Use the storage reference

  const uploadTask = uploadBytesResumable(fileRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    },
    (error) => {
      // Handle unsuccessful uploads
      console.error("Upload failed:", error);
    },
    () => {
      // Handle successful uploads on complete
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        alert("Image upload successful");

        localStorage.setItem("uploadedImageUrl", downloadURL);
        const image = document.querySelector("#image");
        image.src = downloadURL;
      });
    }
  );
}

// Export Firebase services
export const auth = getAuth(app);
export { storage }; // Export the storage instance
