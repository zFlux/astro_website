import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	// Filter out posts without pubDate since RSS requires publication dates
	const postsWithDates = posts.filter(post => post.data.pubDate);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: postsWithDates.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
