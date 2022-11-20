// eslint-disable-next-line import/no-anonymous-default-export
export default {
  cms_manual_init: true,
  backend: {
    name: "git-gateway",
    // name: "test-repo",
    branch: "main",
  },
  media_folder: "public/uploads",
  public_folder: "uploads",
  collections: [
    {
      name: "pages",
      label: "Strony",
      format: "json",
      extension: "json",
      files: [
        {
          label: "Ogłoszenia",
          name: "news",
          file: "content/news.json",
          fields: [
            {
              label: "Czy są aktualności?",
              name: "hasNews",
              widget: "boolean",
              required: true,
            },
            {
              label: "Ogłoszenie",
              name: "news",
              widget: "object",
              required: false,
              fields: [
                {
                  label: "Tytuł",
                  name: "title",
                  widget: "string",
                  required: false,
                },
                {
                  label: "Zdjęcie",
                  name: "photo",
                  widget: "image",
                  required: false,
                },
                {
                  label: "Opis",
                  name: "description",
                  widget: "string",
                  required: false,
                },
                {
                  label: "Cena przed",
                  name: "priceBefore",
                  widget: "string",
                  required: false,
                },
                {
                  lable: "Cena po",
                  name: "priceAfter",
                  widget: "string",
                  required: false,
                },
              ],
            },
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
