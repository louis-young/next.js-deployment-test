import { AsynchronousComponent } from "@/common/components/asynchronous-component";
import { Posts } from "@/features/posts";
import { useGetPosts } from "@/features/posts/use-get=posts";

const ClientSideRenderingPage = () => {
  const { postsData, postsStatus } = useGetPosts();

  return (
    <>
      <h1>Client-side Rendering</h1>

      <p>This page is rendered on the client.</p>

      <AsynchronousComponent
        data={postsData}
        errorFallback="Error."
        hasError={postsStatus === "error"}
        isLoading={postsStatus === "loading"}
        loadingFallback="Loading..."
      >
        {(posts) => <Posts posts={posts} />}
      </AsynchronousComponent>
    </>
  );
};

export default ClientSideRenderingPage;
