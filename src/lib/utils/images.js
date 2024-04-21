const pictures = import.meta.glob('$lib/assets/blog/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
  eager: true,
  query: {
    enhanced: true
  }
});

const picturesSM = import.meta.glob('$lib/assets/blog/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
  eager: true,
  query: {
    enhanced: true,
    w: 640
  }
});

const picturesLG = import.meta.glob('$lib/assets/blog/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
  eager: true,
  query: {
    enhanced: true,
    w: 1440
  }
});

const imageModules = {};
const imageModulesSM = {};
const imageModulesLG = {};

for (const path in pictures) {
  const filename = path.split('/').pop();
  imageModules[filename] = pictures[path].default;
}

for (const path in picturesSM) {
  const filename = path.split('/').pop();
  imageModulesSM[filename] = picturesSM[path].default;
}

for (const path in picturesLG) {
  const filename = path.split('/').pop();
  imageModulesLG[filename] = picturesLG[path].default;
}

export function getImage(filename, size = 'sm') {
  switch (size) {
    case 'sm':
      return imageModulesSM[filename] || null;
    case 'lg':
      return imageModulesLG[filename] || null;
    default:
      return imageModules[filename] || null;
  }
}

console.log(getImage('data-flow.webp')); // This should now log the correct module or null
