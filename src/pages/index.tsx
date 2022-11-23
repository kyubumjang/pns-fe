import type { NextPage } from 'next';

import { Container } from '@/styles/common';
import Introduce from 'templates/main/Introduce/Introduce';

const Home: NextPage = () => {
  return (
    <Container>
      <Introduce />
    </Container>
  );
};

export default Home;
