import type { NextPage } from 'next';

import { Container } from '@/styles/common';
import Introduce from '@/templates/main/Introduce/Introduce';
import OrderStatus from '@/templates/main/OrderStatus/OrderStatus';

const Home: NextPage = () => {
  return (
    <Container>
      <Introduce />
      <OrderStatus />
    </Container>
  );
};

export default Home;
