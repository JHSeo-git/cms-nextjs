import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import yaml from 'js-yaml';
import glob from 'glob';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostContent {
  readonly slug: string;
  readonly title: string;
  readonly date: string;
  readonly tags?: string[];
  readonly categories?: string[];
}

let postCache: PostContent[];

const fetchPostContent = (category?: string) => {
  if (postCache) {
    return postCache;
  }

  const fileNames = glob.sync(
    path.join(postsDirectory, category ? category : '*', '*')
  );
  const postsData = fileNames.map((fullFileName) => {
    const fileContents = fs.readFileSync(fullFileName, 'utf8');
    const matterResult = matter(fileContents, {
      engines: {
        yaml: (s) =>
          yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as Record<
            string,
            unknown
          >,
      },
    });
    const matterData = matterResult.data as {
      date: string;
      title: string;
      tags: string[];
      slug: string;
    };
    const slug = path.parse(fullFileName).name.replace(/\.mdx$/, '');

    // Validate slug string
    if (matterData.slug !== slug) {
      throw new Error(
        'slug field not match with the path of its content source'
      );
    }

    return matterData;
  });
  // Sort posts by date
  postCache = postsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return postCache;
};

export const listPostContent = (category?: string) => {
  return fetchPostContent(category);
};
