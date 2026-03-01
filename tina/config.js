import { defineConfig } from "tinacms";

// Tina CMS Architecture: Single-page site mapping
// Schema corresponds to src/data/site.json

export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "site",
        label: "Site Settings",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
            required: true,
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "title", label: "Hero Title" },
              { type: "string", name: "subtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "cta", label: "CTA Button Text" },
            ],
          },
          {
            type: "object",
            list: true,
            name: "sections",
            label: "Main Content Sections",
            ui: {
              itemProps: (item) => ({ label: item?.heading || "Section" }),
            },
            fields: [
              { type: "string", name: "id", label: "Section ID (for anchors)" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "text", label: "Text Content", ui: { component: "textarea" } },
            ],
          },
        ],
      },
    ],
  },
});
