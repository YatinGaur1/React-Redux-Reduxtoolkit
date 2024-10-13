import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/Post-List-Store";

const PostList = () => {
  const { postList } = useContext(postListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} Post={post} />
      ))}
    </>
  );
};
export default PostList;
