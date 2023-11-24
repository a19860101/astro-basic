import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_cdf3d1ff.mjs';
import 'clsx';

const html = "<h1 id=\"hello-astro\">hello Astro</h1>\n<p>hey</p>";

				const frontmatter = {"title":"hello"};
				const file = "/Users/zac/Desktop/astro/astro-basic/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "# hello Astro\nhey";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hello-astro","text":"hello Astro"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
