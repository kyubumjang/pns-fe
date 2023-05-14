import Text from '@/components/common/Text/Text';

import * as S from './InfoTitle.styles';

interface Props {
  title: string;
  subTitle: string;
  alignItems?: 'flex-start' | 'flex-end';
}

const InfoTitle = ({ title, subTitle, alignItems }: Props) => {
  return (
    <S.Container alignItems={alignItems ?? 'flex-start'}>
      <Text tag='h3'>{title}</Text>
      <S.SubTitleWrapper>
        <Text tag='h2'>{subTitle}</Text>
      </S.SubTitleWrapper>
    </S.Container>
  );
};

export default InfoTitle;
