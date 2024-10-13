import { useContext, useRef } from "react";
import { PostList } from "../store/Post-List-Store";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
 const navigate= useNavigate();

  const userIdElement = useRef();
  const userTitleElement = useRef();
  const userBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const userTitle = userTitleElement.current.value;
    const userBody = userBodyElement.current.value;
    const reactions = { likes: reactionsElement.current.value };
    const tags = tagsElement.current.value.split(" ");

     userIdElement.current.value="";
    userTitleElement.current.value="";
    userBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: userTitle,
        body: userBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });
  };

  return (
    <form className="create-post" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          UserId
        </label>
        <input
          type="text"
          className="form-control"
          id="UserId"
          ref={userIdElement}
          placeholder="Enter your UserId here.."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={userTitleElement}
          placeholder="How are you feeling today.."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          className="form-control"
          rows={4}
          ref={userBodyElement}
          id="body"
          placeholder="Tell us more about yourself.."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          ref={reactionsElement}
          placeholder="How many people reacted to this post.."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hastags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Please enter tags using space."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
