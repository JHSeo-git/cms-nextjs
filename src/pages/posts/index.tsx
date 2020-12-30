import { GetStaticProps } from 'next';
import Link from 'next/link';

type Props = {
  posts: PostContent[];
  tags: TagContent[];
};

export default function Index({ posts, tags }: Props) {}
