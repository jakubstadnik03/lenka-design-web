import Link from "next/link";
import { getPostBySlug, getAllPosts } from "../lib/api";
import Head from "next/head";
import markdownToHtml from "../lib/markdownToHtml";
import CoverImage from "../../components/cover-image";
import KontaktBtn from "../../components/kontaktBtn";

export default function Post({ post, morePosts, preview }) {
  return (
    <>
      <div className="min-h-screen">
        <main>
          <div className="max-width">
            <article className="mb-32">
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>

              <div>
                <h1>{post.title}</h1>
                <CoverImage title={post.title} src={post.coverImage} />
              </div>
              <div className="blog-data">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              <Link href="/kontakt">
                <button className="button button-rounded">Kontaktovat</button>
              </Link>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
