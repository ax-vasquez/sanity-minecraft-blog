export default {
  widgets: [
    { name: `structure-menu` },
    {
      name: `project-info`,
      options: {
        __experimental_before: [
          // {
          //   name: "netlify",
          //   options: {
          //     description:
          //       "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
          //     sites: [
          //       {
          //         buildHookId:
          //           "60ba94f7cdd67623974ade36",
          //         title: "Sanity Studio",
          //         name: "sanity-minecraft-blog-studio",
          //         apiId: "0a768c8a-b478-47ec-bf7f-fe7c01f74fbc",
          //       },
          //       {
          //         buildHookId: "",
          //         title: "Blog Website",
          //         name: "",
          //         apiId: "",
          //       },
          //     ],
          //   },
          // },
        ],
        data: [
          {
            title: `GitHub repo`,
            value:
              `https://github.com/ax-vasquez/sanity-minecraft-blog`,
            category: `Code`,
          },
          {
            title: `Frontend`,
            value: ``,
            category: `apps`,
          },
        ],
      },
    },
    { name: `project-users`, layout: { height: `auto` } },
    {
      name: `document-list`,
      options: {
        title: `Recently-added blocks`,
        order: `_createdAt desc`,
        types: [`minecraftBlock`],
      },
      layout: { width: `medium` },
    },
  ],
}
