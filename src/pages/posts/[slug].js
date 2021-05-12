import Layout from "../../components/layout";
import { getAllPostSlugs, getPostData } from "../../utils/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      <h1>{postData.title}</h1>
      {postData.date}
    </Layout>
  );
}

export const getStaticPaths = () => {
  const paths = getAllPostSlugs();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const postData = await getPostData(params.slug);
  console.log(postData);
  return {
    props: {
      postData,
    },
  };
};
