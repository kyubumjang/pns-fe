import type { NextPage } from 'next';

import { Button } from '@/components/Button/Button.styles';
import Text from '@/components/Text/Text';

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        padding: '8px',
      }}
    >
      <Text tag='h1'>콜렛의 모든 것 P&S에서 쉽고 빠르게</Text>
      <Text tag='h2'>콜렛의 모든 것 P&S에서 쉽고 빠르게</Text>
      <Text tag='h3'>콜렛의 모든 것 P&S에서 쉽고 빠르게</Text>
      <Text tag='h4'>콜렛의 모든 것 P&S에서 쉽고 빠르게</Text>
      <Text tag='h5'>콜렛의 모든 것 P&S에서 쉽고 빠르게</Text>
      <Text tag='h6'>콜렛의 모든 것 P&S에서 쉽고 빠르게</Text>
      <Text tag='p'>콜렛의 모든 것 P&S에서 쉽고 빠르게</Text>
      <Text tag='span'>콜렛의 모든 것 P&S에서 쉽고 빠르게</Text>
      <Text
        fontSize='10px'
        fontWeight='bold'
        color='grey'
      >
        콜렛의 모든 것 P&S에서 쉽고 빠르게
      </Text>
    </div>
  );
};

export default Home;
