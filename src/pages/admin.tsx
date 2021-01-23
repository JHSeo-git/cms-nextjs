import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import config from '../../public/config.yml';
import LoadingBar from '../components/common/LoadingBar';
// import PostPreview from '../templates/PostPreview';

const PostPreview = dynamic(() => import('../templates/PostPreview'));

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
        <LoadingBar />
      ) : (
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      )}
    </>
  );
};

export default Admin;
