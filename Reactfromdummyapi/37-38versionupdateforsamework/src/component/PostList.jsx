import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/Post-List-Store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, initialpost } = useContext(postListData);
  const [datafetch, setdatafetch] = useState(false);
  if (!datafetch) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        initialpost(data.posts);
      });
  }
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage/>
      )}
      {postList.map((post) => (
        <Post key={post.id} Post={post} />
      ))}
    </>
  );
};
export default PostList;
