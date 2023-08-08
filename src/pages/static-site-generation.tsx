import type { InferGetStaticPropsType } from "next";

import { postsApi } from "@/common/api/posts";
import { Posts } from "@/features/posts";

const StaticSiteGenerationPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1>Static Site Generation</h1>

      <p>This page is statically generated at build time.</p>

      <Posts posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const posts = await postsApi.posts.get();

    return {
      props: {
        posts,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default StaticSiteGenerationPage;
