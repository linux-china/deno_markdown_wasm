import init, {
    source,
    render_markdown
} from "./wasm.js";

await init(source);

export function renderMarkdown(markdown: string): string {
    return render_markdown(markdown);
}

