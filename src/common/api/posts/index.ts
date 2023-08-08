import { httpService } from "@/common/services/http";

export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type GetPostsResponse = Post[];

export const postsApi = {
  posts: {
    get: () => {
      return httpService.get<GetPostsResponse>(
        "https://jsonplaceholder.typicode.com/posts"
      );
    },
  },
};
