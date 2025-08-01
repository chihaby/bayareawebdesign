import Document, { Html, Head, Main, NextScript } from "next/document";
import emailjs from "@emailjs/browser";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@450&display=swap" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/fontawesome.min.css" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript
            async
            defer
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          ></NextScript>
          <NextScript async defer type="text/javascript" id="emailjs">
            (function () {emailjs.init("bzukQFTBHtPKXaRNc")}
            )();
          </NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
