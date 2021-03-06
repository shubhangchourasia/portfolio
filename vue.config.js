module.exports = {
  pwa: {
    name: "Shubhang Chourasia - Frontend Developer",
    themeColor: "#ffffff",
    msTileColor: "#ffffff",
    appleMobileWebAppCapable: "no",
    appleMobileWebAppStatusBarStyle: "default",
    manifestPath: "manifest.json",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      // ...other Workbox options...
      exclude: [/\.map$/, /_redirects/],
    },
  },
};
