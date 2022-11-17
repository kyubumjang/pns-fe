import type { NextPage } from 'next';

import Header from '@/api/Header/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>Part and Solution</h1>
    </div>
  );
};

export default Home;
