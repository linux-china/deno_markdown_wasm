build:
  deno run -A scripts/build.ts

demo:
  deno run demo.ts

wasmpack:
  wasm-pack build --target web --release
