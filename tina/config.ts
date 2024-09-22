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
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: "Strony",
        name: "pages",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "boolean",
            label: "Czy wyświetlić news?",
            name: "hasNews",
          },
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
            type: "rich-text",
            label: "Opis",
            name: "body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
