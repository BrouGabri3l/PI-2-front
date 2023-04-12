import React from "react";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "@/presentation/styles/globals.css";

const poppins = Poppins({
  weight: "400",
  variable: "--poppins",
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --poppins: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
