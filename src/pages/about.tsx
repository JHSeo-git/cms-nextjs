import Layout from '../components/base/Layout';
import About from '../components/About';
import SideMenu from '../components/base/SideMenu';

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example" sideMenu={<SideMenu />}>
    <About />
  </Layout>
);

export default AboutPage;
