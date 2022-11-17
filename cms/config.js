// eslint-disable-next-line import/no-anonymous-default-export
export default {
  cms_manual_init: true,
  backend: {
    name: "test-repo",
    // repo: "yourname/your-github-repo-name",
    branch: "main",
  },
  local_backend: true,
  media_folder: "public/uploads",
  public_folder: "uploads",
  collections: [
    {
      name: "pages",
      label: "Strony",
      folder: "content",
      create: true,
      format: "json",
      extension: "json",
      files: [
        {
          label: "Ogłoszenia",
          name: "news",
          file: "content/news.json",
          fields: [
            {
              label: "Czy są ogłoszenia?",
              name: "hasNews",
              widget: "boolean",
              // required: true,
            },
            // {
            //   label: "Ogłoszenie",
            //   name: "news",
            //   widget: "object",
            //   required: false,
            //   fields: [
            //     {
            //       label: "Tytuł",
            //       name: "title",
            //       widget: "string",
            //     },
            //   ],
            // },
          ],
        },
        // {
        //   name: "repairs",
        //   label: "Naprawy",
        //   file: "content/repairs.json",
        //   fields: [
        //     {
        //       label: "Czy są ogłoszenia?",
        //       name: "has_news",
        //       widget: "boolean",
        //       required: true,
        //     },
        //     {
        //       label: "Ogłoszenie",
        //       name: "news",
        //       widget: "object",
        //       required: false,
        //       fields: [
        //         {
        //           label: "Tytuł",
        //           name: "title",
        //           widget: "string",
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
      // news and repairs
    },
  ],
};
