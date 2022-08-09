export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62f1e878cd9252672e3a1ce7",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ufq3cwoz",
                  apiId: "f51a7dad-f271-4137-bc7f-aae43f8bfe54",
                },
                {
                  buildHookId: "62f1e878cd925266d93a1dee",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-25rcpuja",
                  apiId: "b02a890f-e223-4f87-80bb-bb577c82ff65",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/glenfish/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-25rcpuja.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
