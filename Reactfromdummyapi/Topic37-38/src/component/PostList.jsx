import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/Post-List-Store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, initialpost } = useContext(postListData);

  const handleongetpost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
         initialpost(data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage Getpostonclick={handleongetpost} />
      )}
      {postList.map((post) => (
        <Post key={post.id} Post={post} />
      ))}
    </>
  );
};
export default PostList;
