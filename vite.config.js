// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: process.env.NODE_ENV === "production" ? "/bluehorn/" : "/",
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],

//   base: process.env.NODE_ENV === "production" ? "/blue/" : "/",

//   build: {
//     manifest: true,
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  base: "/wp-content/themes/blue/",

  build: {
    manifest: true,
  },
});
