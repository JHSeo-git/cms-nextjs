import categories from '../../meta/categories.yml';

export type CategoryContent = {
  readonly slug: string;
  readonly name: string;
};

const tagMap: { [key: string]: CategoryContent } = generateTagMap();

function generateTagMap(): { [key: string]: CategoryContent } {
  let result: { [key: string]: CategoryContent } = {};
  for (const category of categories.category) {
    result[category.slug] = category;
  }
  return result;
}

export function getTag(slug: string) {
  return tagMap[slug];
}

export function listTags(): CategoryContent[] {
  return categories.category;
}
