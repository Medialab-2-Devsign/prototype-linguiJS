/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "nl", "tr"],
  sourceLocale: "en",
  catalogs: [
    {
      path: "<rootDir>/locales/{locale}/messages",
      include: ["<rootDir>/App.js"],
    },
  ],
  format: "po",
};
