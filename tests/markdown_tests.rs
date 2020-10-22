use pulldown_cmark::{html, Parser};

#[test]
fn test_parse_markdown() {
    let markdown = include_str!("demo.md");
    let parser = Parser::new(markdown);
    let mut html_output = String::new();
    html::push_html(&mut html_output, parser);
    println!("{}", html_output);
}
