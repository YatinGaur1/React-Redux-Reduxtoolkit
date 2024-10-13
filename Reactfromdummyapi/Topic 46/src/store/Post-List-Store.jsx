import { createContext, useCallback,useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  fetching:false,
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
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
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
   
 
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {      
        initialpost(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{
        postList,
        fetching,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
