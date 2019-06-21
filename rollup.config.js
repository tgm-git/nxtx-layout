import pegjs from "rollup-plugin-pegjs";
import { terser } from "rollup-plugin-terser";

const dev = true;

const plugins = dev ? [

] : [
    terser()
];

export default {
    input: `src/layout.js`,
    output: {
        name: 'nxtx',
        file: `dist/layout.js`,
        format: 'iife',
        sourcemap: true
    },
    plugins: plugins
}