import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/Post-List-Store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinnger";

const PostList = () => {
  const { postList, fetching } = useContext(postListData);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} Post={post} />)}
    </>
  );
};
export default PostList;
