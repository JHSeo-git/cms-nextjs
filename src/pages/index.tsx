import Layout from '../components/base/Layout';
import SideMenu from '../components/base/SideMenu';
import Home from '../components/Home';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Practice" sideMenu={<SideMenu />}>
    <Home />
  </Layout>
);

export default IndexPage;
