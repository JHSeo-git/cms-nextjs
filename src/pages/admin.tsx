import Head from 'next/head';
import { useEffect, useState } from 'react';
import PostPreview from '../templates/PostPreview';
import config from '../../public/config.yml';

const Admin = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init({
        config,
      });

      CMS.registerPreviewTemplate('posts', PostPreview);

      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      )}
    </>
  );
};

export default Admin;
