import { build } from 'vite';

build().catch(e => {
  console.log("ERROR MESSAGE:", e.message);
  console.log("ERROR DETAILS:", JSON.stringify(e, Object.getOwnPropertyNames(e), 2));
  if (e.errors) {
    console.log("SUB-ERRORS:", JSON.stringify(e.errors, Object.getOwnPropertyNames(e), 2));
  }
});
