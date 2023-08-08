import type { InferGetStaticPropsType } from "next";

import { postsApi } from "@/common/api/posts";
import { Posts } from "@/features/posts";

const IncrementalStaticRegenerationPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1>Incremental Static Regeneration</h1>

      <p>
        This page was pre-rendered at build time. After a minute, the next
        request will trigger a regeneration of the page in the background. Once
        the page generates successfully, Next.js will invalidate the cache and
        show the updated page.
      </p>

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
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
      revalidate: 60,
    };
  }
};

export default IncrementalStaticRegenerationPage;
