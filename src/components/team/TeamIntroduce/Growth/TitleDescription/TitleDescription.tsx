import Text from '@/components/common/Text/Text';

import * as S from './TitleDescription.styles';

interface TitleDescriptionProps {
  title: string;
  description: string;
}

const TitleDescription = ({ title, description }: TitleDescriptionProps) => {
  return (
    <S.Container>
      <Text tag='h4'>{title}</Text>
      <Text tag='h2'>{description}</Text>
    </S.Container>
  );
};

export default TitleDescription;
