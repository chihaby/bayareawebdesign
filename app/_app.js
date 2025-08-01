import Script from "next/script";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google tag (gtag.js)  */}
      <Script
        id="my-ga-script"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-MEEP9J381J"
      ></Script>
      <Script
        id="ga-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)};
            gtag('js', new Date());
  
            gtag('config','G-MEEP9J381J');
           `,
        }}
      />
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        defer
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-MEEP9J381J"
      />
      <Script
        async
        defer
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MEEP9J381J', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=<GTM ID>`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
