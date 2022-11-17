import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import config from "../cms/config";
import Script from "next/script";

const CMS = dynamic(
  () =>
    (import("netlify-cms-app") as any).then((cms: any) => {
      console.log(config);
      cms.init({ config });
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage: React.FC = () => {
  return (
    <>
      <Script
        async
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      />
      <CMS />
    </>
  );
};

export default AdminPage;

{
  /* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> */
}
