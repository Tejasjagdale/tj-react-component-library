import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

console.dir(dts, { depth: 4 });

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        alias: {
          components: "./src/components",
          hooks: "./src/hooks",
          FormGenerator: "./src/components/FormGenerator",      
          Footer: "./src/components/Footer",
          Header: "./src/components/Header",
        },
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }), // Removed the extra comma here
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.plugins],
  },
];
