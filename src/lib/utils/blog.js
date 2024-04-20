import slug1 from '$lib/assets/blog/image-1.png?enhanced&w=1440';
import slug2 from '$lib/assets/blog/image-2.png?enhanced&w=1440';
import slug3 from '$lib/assets/blog/trollface.webp?enhanced&w=1440';
import slug4 from '$lib/assets/blog/hooks.jpg?enhanced&w=1440';
import slug5 from '$lib/assets/blog/date.jpg?enhanced&w=1440';
import slug6 from '$lib/assets/blog/feet.jpg?enhanced&w=1440';
import slug7 from '$lib/assets/blog/data-flow.webp?enhanced&w=1440';
import slug8 from '$lib/assets/blog/testing.webp?enhanced&w=1440';

import slug1Small from '$lib/assets/blog/image-1.png?enhanced&w=620';
import slug2Small from '$lib/assets/blog/image-2.png?enhanced&w=620';
import slug3Small from '$lib/assets/blog/trollface.webp?enhanced&w=620';
import slug4Small from '$lib/assets/blog/hooks.jpg?enhanced&w=620';
import slug5Small from '$lib/assets/blog/date.jpg?enhanced&w=620';
import slug6Small from '$lib/assets/blog/feet.jpg?enhanced&w=620';
import slug7Small from '$lib/assets/blog/data-flow.webp?enhanced&w=620';
import slug8Small from '$lib/assets/blog/testing.webp?enhanced&w=620';

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

/**
 * @param {string} slug - The slug of the blog post.
 * @returns {string|null} - The image URL corresponding to the slug.
 */
export function getImageSmall(slug) {
  switch (slug) {
    case 'using-fonts-in-tailwind-4':
      return slug1Small;
    case 'why-tailwind':
      return slug2Small;
    case 'react-why':
      return slug3Small;
    case 'react-custom-hooks':
      return slug4Small;
    case 'random-common-date-format':
      return slug5Small;
    case 'keep-footer-at-bottom-of-the-page':
      return slug6Small;
    case 'react-data-fetching':
      return slug7Small;
    case 'react-unit-testing':
      return slug8Small;
    default:
      return null;
  }
}
