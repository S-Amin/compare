const requireModule = require.context("./", true, /\.tsx$/);

interface LooseObject {
  [key: string]: any;
}

const pages: LooseObject = {};
const regex = /(^\.|\/index\.tsx$|\.tsx$)/g;

requireModule.keys().forEach((fileName) => {
  if (fileName === "./index.ts") return;
  const moduleName = fileName.replace(regex, "");
  console.log({ fileName, moduleName });
  if (moduleName) pages[moduleName] = requireModule(fileName).default;
});

export default pages;
