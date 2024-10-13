import { createContext, useCallback, useMemo, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  initialpost: () => {},
  addPost: () => {},
  deletePost: () => {},
}); //inside this function we have to give defualt structure and it also used autocomplete,

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type === "INITIAL_POST") {
    newPostList = action.payload.post;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []); //use reducer also repaint a component when any change it done or when we call dispatch.
  //console.log(postList);

  const addPost = (userId, userTitle, userBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: userId,
        title: userTitle,
        body: userBody,
        reactions: reactions,
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
  const initialpost = useCallback((post) => {
    // console.log(post)
    dispatchPostList({
      type: "INITIAL_POST",
      payload: {
        post,
      },
    });
  }, []);
  // const arr = [123, 33, 43];
  // const sortedArr = useMemo(() => {
  //   return arr.sort();
  // }, [arr]);

  return (
    <PostList.Provider
      value={{
        postList,
        initialpost,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
