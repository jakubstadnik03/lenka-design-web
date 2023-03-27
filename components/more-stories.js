import CoverImage from "./cover-image";
import Link from "next/link";
import DateFormatter from "./date-formatter";

const MoreStories = ({ posts }) => {
  return (
    <section className="blogs-section max-width">
      <h1 className="">Blog</h1>
      <div className="blog-post-container">
        {posts.map((post) => (
          <div className="blog-post">
            <div className="cover-image">
              <CoverImage
                slug={post.slug}
                title={post.title}
                src={post.coverImage}
              />
            </div>
            <h3 className="post-title">
              <Link
                as={`/posts/${post.slug}`}
                href="/posts/[slug]"
                className="hover:underline"
              >
                {post.title}
              </Link>
            </h3>
            <div className="">
              <DateFormatter dateString={post.date} />
            </div>
            <p className="">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
