import type { NextPage } from 'next';

import { Button } from '@/components/Button/Button.styles';

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        padding: '8px',
      }}
    >
      <h1>Part and Solution</h1>
      <Button
        width='110px'
        height='40px'
      >
        자세히 알아보기
      </Button>
      <Button buttonTheme='grey'>grey 버튼</Button>
      <Button buttonTheme='weakBlue'>weakBlue 버튼</Button>
      <Button
        outline
        height='42px'
      >
        outline 버튼
      </Button>
    </div>
  );
};

export default Home;
