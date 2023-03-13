import Text from '@/components/common/Text/Text';

import * as S from './Goal.styles';

const Goal = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <Text tag='h2'>피엔에스가 나아가는 방향</Text>
        <Text tag='h5'>최고의 품질의 콜렛을 만들고자 합니다.</Text>
      </S.TitleWrapper>
    </S.Container>
  );
};

export default Goal;
