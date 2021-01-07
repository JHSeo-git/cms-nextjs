import Head from 'next/head';
import { useEffect } from 'react';
import PostPreview from '../templates/PostPreview';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();

      CMS.registerPreviewTemplate('posts', PostPreview);
    })();
  }, []);

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <div />
    </>
  );
};

export default Admin;
