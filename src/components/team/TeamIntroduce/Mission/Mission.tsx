import Text from '@/components/common/Text/Text';
import theme from '@/styles/theme';

import * as S from './Mission.styles';

const Mission = () => {
  return (
    <S.Container>
      <S.TeamMissionWrapper>
        <Text
          fontSize='24px'
          fontWeight={600}
          color={theme.color.grey300}
        >
          Team Mission
        </Text>
        <Text
          fontSize='28px'
          fontWeight={600}
          color={theme.color.white}
        >
          피앤에스팀은 국내외로 경쟁력을 갖춘 전문 제조화 기업입니다.
        </Text>
        <Text
          fontSize='28px'
          fontWeight={600}
          color={theme.color.white}
        >
          불량이 많고, 느리고, 비싸게 느껴지는 제조 업체가 아닌 고객을 위해
          가치를 창조하고 뛰어난 품질과 정해진 납기일에 맞춰 적정한 가격으로
          제작하는 것이 피앤에스의 목표입니다.
        </Text>
      </S.TeamMissionWrapper>
    </S.Container>
  );
};

export default Mission;
