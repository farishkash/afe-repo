import { getSortedPostsData } from "../utils/posts";
import Layout from "../components/layout";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md|\.mdx$/, ""),
      },
    };
  });
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section>
        <h2>Blog</h2>
        <ul class="list-group">
          {allPostsData.map(({ slug, date, title }) => (
            <li key={slug} class="list-group-item">
              {title} : {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
