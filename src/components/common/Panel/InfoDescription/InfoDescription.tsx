import Text from '../../Text/Text';
import * as S from './InfoDescription.styles';

interface InfoDescriptionProps {
  description: string;
}

const InfoDescription = ({ description }: InfoDescriptionProps) => {
  return (
    <S.Container>
      <Text tag='h4'>{description}</Text>
    </S.Container>
  );
};

export default InfoDescription;
