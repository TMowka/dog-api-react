const IMAGES_COUNT = 10;

export const imageByBreedUrl = (breed, subBreed, count = IMAGES_COUNT) => {
  let url = 'https://dog.ceo/api/breed/';

  if (subBreed) {
    url += `${breed}/${subBreed}/images/random/${count}`;
  } else {
    url += `${breed}/images/random/${count}`;
  }

  return url;
};
