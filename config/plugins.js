module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_HgypgXDWG765xK9vOx3B2UJqcXq9/b6jCJvyLxp",
      apiToken: "0s71feYVNGing7wzQf4IRMcB",
      appFilter: "moldova-europeana-back",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});