import slug1 from '$lib/assets/blog/image-1.png?enhanced';
import slug2 from '$lib/assets/blog/image-2.png?enhanced';
import slug3 from '$lib/assets/blog/trollface.webp?enhanced';
import slug4 from '$lib/assets/blog/hooks.jpg?enhanced';
import slug5 from '$lib/assets/blog/date.jpg?enhanced';
import slug6 from '$lib/assets/blog/feet.jpg?enhanced';
import slug7 from '$lib/assets/blog/data-flow.webp?enhanced';
import slug8 from '$lib/assets/blog/testing.webp?enhanced';

/**
 * @param {string} slug - The slug of the blog post.
 * @returns {string|null} - The image URL corresponding to the slug.
 */
export function getImage(slug) {
  switch (slug) {
    case 'using-fonts-in-tailwind-4':
      return slug1;
    case 'why-tailwind':
      return slug2;
    case 'react-why':
      return slug3;
    case 'react-custom-hooks':
      return slug4;
    case 'random-common-date-format':
      return slug5;
    case 'keep-footer-at-bottom-of-the-page':
      return slug6;
    case 'react-data-fetching':
      return slug7;
    case 'react-unit-testing':
      return slug8;
    default:
      return null;
  }
}
