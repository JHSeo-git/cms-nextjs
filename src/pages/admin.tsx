import { useEffect } from 'react';
import PostPreview from '../templates/PostPreview';
import config from '../../public/config.yml';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const IdWidget = (await import('netlify-identity-widget')).default;

      IdWidget.init();
    })();

    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init(config);

      CMS.registerPreviewTemplate('posts', PostPreview);
    })();
  }, []);

  return <div />;
};

export default Admin;
