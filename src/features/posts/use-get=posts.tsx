import { postsApi } from "@/common/api/posts";
import { useQuery } from "@tanstack/react-query";

export const useGetPosts = () => {
  const query = useQuery({ queryFn: postsApi.posts.get, queryKey: ["posts"] });

  const {
    data: postsData,
    status: postsStatus,
    ...additionalQueryProperties
  } = query;

  return {
    postsData,
    postsStatus,
    ...additionalQueryProperties,
  };
};
