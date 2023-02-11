import Head from 'next/head';
import Main from 'components/Main';

type Props = {
  title: string;
};

export default function Home({ title = 'Boilerplate' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Cabeçalho da página Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
