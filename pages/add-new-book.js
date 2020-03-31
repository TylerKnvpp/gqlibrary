import Layout from "../components/Layout";
import BookForm from "../components/BookForm";
import withData from "../lib/apollo";
import Head from "next/head";

export default withData(props => {
  return (
    <Layout>
      <Head>
        <title>Add a Book</title>
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
        Add a new book
      </h1>
      <BookForm />
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
