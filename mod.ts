import init, {source, render_markdown} from "./wasm.js";

await init(source);

/**
 * Render markdown code to HTML
 * @param markdown markdown
 * @return HTML Code
 */
export function renderMarkdown(markdown: string): string {
    return render_markdown(markdown);
}

