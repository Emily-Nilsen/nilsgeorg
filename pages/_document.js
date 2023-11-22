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
            href="https://res.cloudinary.com/dt3k2apqd/image/upload/v1700653921/Nils%20Georg/SVGs/ng-favicon_xpzx2i.svg"
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
