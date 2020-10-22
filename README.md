Deno markdown-wasm
==================

A markdown parser module with WebAssembly for Deno

# how to use?

```typescript
import {renderMarkdown} from "https://denopkg.com/linux-china/deno_markdown_wasm/mod.ts";

console.log(renderMarkdown("#h1"));
```

# References

* The `wasm-bindgen` Guide: https://rustwasm.github.io/docs/wasm-bindgen/
* pulldown_cmark: Pull parser for CommonMark https://docs.rs/pulldown-cmark/0.8.0/pulldown_cmark/
