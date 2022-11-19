import React from "react";
import dynamic from "next/dynamic";
import Script from "next/script";

import config from "../cms/config";

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
