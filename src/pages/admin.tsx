import { useEffect } from 'react';
import PostPreview from '../templates/PostPreview';
import config from '../../public/config.yml';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init({
        config,
      });

      CMS.registerPreviewTemplate('posts', PostPreview);
      const Widget = (await import('netlify-identity-widget')).default;
      Widget.init();
      Widget.open();
    })();
  }, []);

  return <div />;
};

export default Admin;
