import type { InferGetServerSidePropsType } from "next";

import { postsApi } from "@/common/api/posts";
import { Posts } from "@/features/posts";

const ServerSideRenderingPage = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <h1>Server-side Rendering</h1>

      <p>This page is rendered on-demand on the server.</p>

      <Posts posts={posts} />
    </>
  );
};

export const getServerSideProps = async () => {
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

export default ServerSideRenderingPage;
