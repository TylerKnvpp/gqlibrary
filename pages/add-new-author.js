import Layout from "../components/Layout";
import AuthorForm from "../components/AuthorForm";
import withData from "../lib/apollo";
import Head from "next/head";

export default withData(props => {
  return (
    <Layout>
      <Head>
        <title>Add an Author</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "auto",
          textAlign: "center"
        }}
      >
        Add a new Author
      </h1>
      <AuthorForm />
      <style global jsx>{`
        html,
        body {
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </Layout>
  );
});
