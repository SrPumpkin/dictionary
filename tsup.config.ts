import { defineConfig } from "tsup";

export default defineConfig((options) => ({
    entry: [
        "src/index.tsx"
    ],
    dts: true,
    format: ["esm", "cjs"],
    clean: true,
    minify: false
}));
