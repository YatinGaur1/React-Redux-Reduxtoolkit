import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/Post-List-Store";
const Post = ({ Post }) => {
  const {deletePost}=useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "40rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {Post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-warning delete-span"onClick={()=>{deletePost(Post.id)}}>
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{Post.body}</p>
        {Post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-warning hastag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {Post.reactions.likes} people.
        </div>
      </div>
    </div>
  );
};
export default Post;
