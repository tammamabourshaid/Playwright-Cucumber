module.exports = {
  default: {
    paths: ["src/features/**/*.feature"],
    require: [
      "src/step-definitions/**/*.ts",
      "support/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: ["progress"]
  }
};