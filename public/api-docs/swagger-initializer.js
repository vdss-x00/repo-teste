window.onload = function () {
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
