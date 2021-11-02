module.exports = {
  apps: [
    {
      name: "Resume Playground",
      script: "./angular-front/dist/ghost-chess/server/main.js",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
    {
      name: "Resume Playground Websocket",
      script: "./websocket-server/websocket-server.js",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ]
}
