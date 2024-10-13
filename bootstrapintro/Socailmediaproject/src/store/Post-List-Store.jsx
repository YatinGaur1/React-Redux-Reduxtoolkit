import { createContext, useReducer } from "react";
import { RiEyeCloseFill } from "react-icons/ri";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
}); //inside this function we have to give defualt structure.

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.postId
    );
  }else if(action.type==="ADD_POST"){
    newPostList=[action.payload,...currPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  ); //use reducer also repaint a component when any change it done or when we call dispatch.

  const addPost = (userId, userTitle, userBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: userId,
        title: userTitle,
        body: userBody,
        reactions: 15,
        userId: reactions,
        tags: tags,
      },
    });
  };

  const deletePost = (Id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId: Id,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Hi,Friends.today i am going to mumbai to my vacation.Hope to enjoy a lot.peace out",
    reactions: 2,
    userId: "user-9",
    tags: ["vacations", "mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "pass ho gye",
    body: "Graduate in btech with full masti. Hard to beleive",
    reactions: 15,
    userId: "user-15",
    tags: ["graduate", "Btech", "unbeleivable"],
  },
];

export default PostListProvider;
