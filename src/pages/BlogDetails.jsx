import { Helmet } from "react-helmet-async";

import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import { blogPosts } from "../data/blogData";

import "../page-elements/blog-elements/blog.css";

const BlogDetails = () => {
  const { slug } = useParams();

  const [seo, setSeo] = useState({});

  const post = blogPosts.find((item) => item.slug === slug);

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    fetch(`https://dsks.co.in/blue/wp-json/wp/v2/posts?slug=${slug}`)
      .then((res) => res.json())

      .then((data) => {
        if (data.length > 0) {
          setSeo({
            title: data[0].yoast_head_json?.title,

            description: data[0].yoast_head_json?.description,
          });
        }
      });
  }, [slug]);

  if (!post) {
    return <h2>Blog Not Found</h2>;
  }

  return (
    <>
      <Helmet>
        <title>{seo.title || `${post.title} | Bluehorn`}</title>

        <meta name="description" content={seo.description || post.excerpt} />
      </Helmet>

      <section className="blog-details">
        {/* HERO BANNER */}
        <div
          className="blog-details-hero"
          style={{
            backgroundImage: `url(${post.image})`,
          }}
        >
          <div className="overlay"></div>

          <div className="container hero-content">
            <div className="breadcrumb">
              <Link to="/blog">Blog</Link>

              {" / "}

              {post.category}
            </div>

            <span className="category-pill">{post.category}</span>

            <h1>{post.title}</h1>

            <div className="meta-row">
              <span>{post.author}</span>

              <span>{post.date}</span>

              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="container blog-body">
          {/* LEFT CONTENT */}
          <div className="article">
            <div className="pull-quote">{post.excerpt}</div>

            <div
              className="article-content"
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />

            {/* TAGS */}
            <div className="tags">
              {post.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {/* BACK BUTTON */}
            <div className="back-btn-wrapper">
              <Link to="/blog">
                <button className="animated-button fade-animate-up back-btn">
                  <span className="text">Back to All Articles</span>
                </button>
              </Link>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="sidebar">
            <div className="author-card">
              <h4>About the Author</h4>

              <p className="author-name">{post.author}</p>

              <p className="author-role">{post.authorRole}</p>
            </div>

            <div className="related">
              <h4>Related Articles</h4>

              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="related-item"
                >
                  <img src={item.image} alt={item.title} />

                  <div>
                    <span>{item.category}</span>

                    <p>{item.title}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="cta-box1">
              <h5>Free Consultation</h5>

              <p>Ready to reduce your energy costs?</p>

              <a
                href="https://wa.me/+916293122232"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="animated-button fade-animate-up">
                  <span className="text">Get Free Analysis</span>
                </button>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
