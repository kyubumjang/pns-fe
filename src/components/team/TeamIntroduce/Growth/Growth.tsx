import Text from '@/components/common/Text/Text';

import * as S from './Growth.styles';
import { TitleDescription } from './TitleDescription';

const Growth = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <Text tag='h2'>
          꼼꼼하고 신속한 사람들이 모여, 정확하고 빠르게 납품합니다.
        </Text>
      </S.TitleWrapper>
      <S.ResultWrapper>
        <S.ResultRowWrapper>
          <TitleDescription
            title='제품 수'
            description='10개 +'
          />
          <TitleDescription
            title='보유 설비 수'
            description='25개 +'
          />
        </S.ResultRowWrapper>
        <S.ResultRowWrapper>
          <TitleDescription
            title='직원 수'
            description='10명 +'
          />
          <TitleDescription
            title='누적 투자금액'
            description='1억 원 +'
          />
        </S.ResultRowWrapper>
        <Text fontSize='12px'>2022년 11월 기준</Text>
      </S.ResultWrapper>
    </S.Container>
  );
};

export default Growth;
