import Layout from "../src/components/Layout/Layout";
import "../styles/globals.css";
import "../styles/Home.sass";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
