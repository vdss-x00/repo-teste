import { cpSync, mkdirSync } from "node:fs";
import { writeFileSync } from "node:fs";

mkdirSync("public/api-docs", { recursive: true });
cpSync("node_modules/swagger-ui-dist", "public/api-docs", {
    recursive: true,
    force: true,
});

writeFileSync(
    "public/api-docs/swagger-initializer.js",
    `window.onload = function () {
  window.ui = SwaggerUIBundle({
    url: "/swagger.json",
    dom_id: "#swagger-ui",
    deepLinking: true,
    tryItOutEnabled: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout"
  });
};
`,
);

const { default: swaggerSpec } = await import("../src/config/swagger.js");
writeFileSync(
    "public/api-docs/swagger.json",
    JSON.stringify(swaggerSpec, null, 2),
);
