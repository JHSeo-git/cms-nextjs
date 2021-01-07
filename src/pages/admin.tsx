import { useEffect } from 'react';
import PostPreview from '../templates/PostPreview';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const IdWidget = (await import('netlify-identity-widget')).default;

      IdWidget.init();
    })();

    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();

      CMS.registerPreviewTemplate('posts', PostPreview);
    })();
  }, []);

  return <div />;
};

export default Admin;
