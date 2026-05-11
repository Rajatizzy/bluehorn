import { Link } from "react-router-dom";
import "../blog-elements/blog.css";

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
        <span className="blog-category">{post.category}</span>
      </div>

      <div className="blog-card-body">
        <h3>{post.title}</h3>
        <p>{post.excerpt.split(" ").slice(0, 17).join(" ")}...</p>

        <div className="blog-meta">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
