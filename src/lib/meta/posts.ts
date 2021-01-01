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
  readonly author: string;
  readonly category: string;
  readonly tags?: string[];
}

const fetchPostContent = (category?: string) => {
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
    const matterData = matterResult.data as PostContent;
    const slug = path.parse(fullFileName).name;

    // Validate slug string
    if (matterData.slug !== slug) {
      throw new Error(
        'slug field not match with the path of its content source'
      );
    }

    return matterData;
  });
  // Sort posts by date
  const result = postsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return result;
};

export const listPostContent = (category?: string) => {
  return fetchPostContent(category);
};

export const getPostData = (slug: string) => {
  const fullPath = glob.sync(path.join(postsDirectory, '*', `${slug}.mdx`));
  const postContent = fullPath && fs.readFileSync(fullPath[0], 'utf8');

  return postContent;
};

export const getPostCategoryByPostSlug = (slug: string) => {
  const postContent = getPostData(slug);
  const { data } = matter(postContent, {
    engines: {
      yaml: (s) =>
        yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as Record<
          string,
          unknown
        >,
    },
  });
  return data;
};

export const getAllPostSlugs = () => {
  const fullFileNames = glob.sync(path.join(postsDirectory, '*', '*.mdx'));
  const slugs = fullFileNames.map(
    (fullFileName) => path.parse(fullFileName).name
  );
  return slugs.flatMap((slug) => {
    return [
      {
        params: {
          slug: [slug],
        },
      },
    ];
  });
};
