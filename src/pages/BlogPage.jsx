import { Helmet } from "react-helmet-async";

import { useEffect, useState } from "react";

import { blogPosts } from "../data/blogData";

// ✅ correct imports
import BlogCard from "../page-elements/blog-elements/BlogCard";

import FeaturedCard from "../page-elements/blog-elements/FeaturedCard";

import "../page-elements/blog-elements/blog.css";

import PageBanner from "../component/PageBanner";

import img1 from "../assets/img/about-1.jpg";

const BlogPage = () => {
  const [seo, setSeo] = useState({});

  const featured = blogPosts.find((p) => p.featured);

  useEffect(() => {
    fetch("https://dsks.co.in/blue/wp-json/wp/v2/pages?slug=blog")
      .then((res) => res.json())

      .then((data) => {
        if (data.length > 0) {
          setSeo({
            title: data[0].yoast_head_json?.title,

            description: data[0].yoast_head_json?.description,
          });
        }
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>

        <meta name="description" content={seo.description} />
      </Helmet>

      <section className="blog-page">
        <div className="">
          <PageBanner title="Blog" image={img1} />
        </div>

        <div className="container">
          {/* Featured Blog */}
          {featured && <FeaturedCard post={featured} />}

          {/* 3-column grid blogs */}
          <div className="blog-grid">
            {blogPosts
              .filter((p) => !p.featured)
              .map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
