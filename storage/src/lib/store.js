import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const Username = writable(
  browser
    ? JSON.parse(localStorage.getItem("Username") || JSON.stringify(""))
    : ""
);
Username.subscribe(
  (val) => browser && (localStorage.Username = JSON.stringify(val))
);

