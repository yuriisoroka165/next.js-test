// interface Props {
// 	params: {
// 		id: string[]; //тип масив строк
// 	};
// }

export async function generateStaticParams() {
	const films = await fetch("https://swapi.dev/api/films").then((res) =>
		res.json()
	);

	return films.results.map((film: any) => ({
		slug: film.title.replace(/\s+/g, "-"),
	}));
}

//npm run build
// > next.js-test@0.1.0 build
// > next build

//  ✓ Creating an optimized production build
//  ✓ Compiled successfully
//  ✓ Linting and checking validity of types
//  ✓ Collecting page data
//  ✓ Generating static pages (13/13)
//  ✓ Finalizing page optimization

// Route (app)                              Size     First Load JS
// ┌ ○ /                                    156 B          79.4 kB
// ├ ○ /                                    156 B          79.4 kB
// ├ ○ /                                    156 B          79.4 kB
// ├ ○ /_not-found                          878 B          80.1 kB
// ├ ○ /about                               157 B          79.4 kB
// ├ ○ /about/contacts                      157 B          79.4 kB
// └ ● /post/[slug]                         157 B          79.4 kB
//     ├ /post/A-New-Hope
//     ├ /post/The-Empire-Strikes-Back
//     ├ /post/Return-of-the-Jedi
//     └ [+3 more paths]
// + First Load JS shared by all            79.2 kB
//   ├ chunks/864-09b3a8582fc8ab81.js       26.6 kB
//   ├ chunks/fd9d1056-e4abb10dc68a7173.js  50.8 kB
//   ├ chunks/main-app-d00fdb7b50994b3c.js  221 B
//   └ chunks/webpack-bc466917885f1332.js   1.64 kB


// ○  (Static)  automatically rendered as static HTML (uses no initial props)
// ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)

export default function Post({ params }: any) {
	return (
		<div>
			<p>Post with id {JSON.stringify(params)}</p>
		</div>
	);
}
