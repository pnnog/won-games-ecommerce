import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const pathsArray = ['rota-1', 'rota-2', 'rota-3', 'rota-4', 'rota-5'];

  const paths = pathsArray.map((slug) => ({ params: { slug: slug } }));
  console.log(paths);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (item) => {
  console.log(item);
  return {
    props: {},
  };
};

export default function Game() {
  return (
    <div>
      <h1>Game</h1>
    </div>
  );
}
