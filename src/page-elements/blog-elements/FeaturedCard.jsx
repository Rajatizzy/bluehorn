import { Link } from "react-router-dom";
import "../blog-elements/blog.css";

const FeaturedCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="featured-card">
      <img src={post.image} alt={post.title} />

      <div className="featured-content">
        <span className="featured-tag">Featured</span>

        <h2>{post.title}</h2>

        <p>{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default FeaturedCard;
