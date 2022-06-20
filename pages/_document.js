import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="no">
        <Head>
          <link
            rel="icon"
            href="https://res.cloudinary.com/dt3k2apqd/image/upload/v1655658524/Nils%20Georg/SVGs/NG_favicon_v6_bfuiv1.svg"
          />
          <link
            rel="stylesheet"
            href="https://use.typekit.net/umy7pxl.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
