import React, { useEffect } from 'react';

import PostPreview from '../templates/PostPreview';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();

      CMS.registerPreviewTemplate('posts', PostPreview);
    })();
  }, []);

  return <div />;
};

export default Admin;
