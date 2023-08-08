import type { Post as PostType } from "@/common/api/posts";

type PostProps = Pick<PostType, "body" | "title">;

const Post = ({ body, title }: PostProps) => {
  return (
    <li>
      <h2>{title}</h2>

      <p>{body}</p>
    </li>
  );
};

interface PostsProps {
  posts: PostType[];
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <ul>
      {posts.map((post) => (
        <Post body={post.body} key={post.id} title={post.title} />
      ))}
    </ul>
  );
};
