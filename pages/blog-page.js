import Layout from '../components/Layout';
import Post from '../components/Post';
import { getAllPostsData } from '../lib/posts';
export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <ul className="mt-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  // ビルド時に実行される。
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
