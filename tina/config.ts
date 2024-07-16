import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "public",
      publicFolder: "uploads",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "pages",
        label: "Strony",
        path: "content",
        format: "json",
        fields: [
          {
            type: "boolean",
            label: "Czy są aktualności?",
            name: "hasNews",
          },
          {
            type: "object",
            label: "Ogłoszenie",
            name: "news",
            // Define inner fields for the 'news' object here
            // Example:
            fields: [
              {
                type: "string",
                label: "Tytuł ogłoszenia",
                name: "title",
              },
              {
                type: "image",
                label: "Zdjęcie",
                name: "photo",
              },
              {
                type: "string",
                label: "Opis",
                name: "description",
              },
              {
                label: "Cena przed",
                type: "string",
                name: "priceBefore",
              },
              {
                label: "Cena po",
                name: "priceAfter",
                type: "string",
              },
            ],
          },
        ],
      },
      // ui: {
      //   // This is an DEMO router. You can remove this to fit your site
      //   router: ({ document }) => `/demo/blog/${document._sys.filename}`,
      // },
    ],
  },
});
