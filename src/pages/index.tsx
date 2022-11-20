import styled from '@emotion/styled';
import type { NextPage } from 'next';

import Introduce from 'templates/main/Introduce/Introduce';

const Home: NextPage = () => {
  return (
    <Container>
      <Introduce />
    </Container>
  );
};

export default Home;

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
});
