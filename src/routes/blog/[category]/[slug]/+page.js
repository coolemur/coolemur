import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, url, fetch }) {
  try {
    const post = await import(`../../../../posts/${params.slug}.md`);

    const baseURL = url.origin;
    const response = await fetch(`${baseURL}/api/posts`);
    const posts = await response.json();
    const postsFiltered = posts
      .filter((p) => p.category === post.metadata.category && p.slug !== params.slug)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    if (!post.metadata.published) {
      error(404, {
        message: 'Not found'
      });
    }

    return {
      relatedPosts: postsFiltered,
      slug: params.slug,
      content: post.default,
      meta: post.metadata,
      title: post.metadata.title
    };
  } catch (e) {
    error(404, {
      message: 'Not found'
    });
  }
}
