import { error } from '@sveltejs/kit';

/**
 * @typedef {Object} Post
 * @property {string} category
 * @property {boolean} published
 */

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, url }) {
  const PAGE_SIZE = 4;

  const show = url.searchParams.get('show') || PAGE_SIZE;

  const response = await fetch('api/posts');
  const posts = (await response.json()).filter((/** @type {Post} */ post) => post.published);

  const categories = [...new Set(posts.map((/** @type {Post} */ post) => post.category))];
  checkCategoryExists(params, categories);

  const postsFiltered = posts.filter(
    (/** @type {Post} */ post) => post.category === params.category || params.category == null
  );

  const postsLength = postsFiltered.length;

  console.log(postsLength);

  const postsSliced = postsFiltered.slice(0, show);

  return {
    posts: postsSliced,
    categories: categories,
    currentCategory: params.category,
    title: '𓁹‿𓁹',
    pathname: url.pathname,
    // pageEnd: show >= posts.length,
    // showMoreEnabled: postsLength > PAGE_SIZE,
    showMore: !(show >= posts.length) && postsLength > PAGE_SIZE
  };
}

/**
 * Check if the specified category exists in the categories array.
 * If not found, throw a 404 error.
 * @param {import('./$types').RouteParams} params - The route parameters.
 * @param {string[]} categories - The array of categories.
 */
function checkCategoryExists(params, categories) {
  if (params.category && !categories.includes(params.category)) {
    error(404, {
      message: 'Not found'
    });
  }
}
