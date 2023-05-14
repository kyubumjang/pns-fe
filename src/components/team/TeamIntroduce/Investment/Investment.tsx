import Text from '@/components/common/Text/Text';

import * as S from './Investment.styles';

const Investment = () => {
  return (
    <S.Container>
      <Text tag='h2'>최고의 거래처들과 함께합니다.</Text>
      <S.InvestmentWrapper>
        {/* <Text tag='h4'>RFSemi</Text>
        <Text tag='h4'>삼성전기</Text>
        <Text tag='h4'>AUK</Text> */}
      </S.InvestmentWrapper>
    </S.Container>
  );
};
export default Investment;
