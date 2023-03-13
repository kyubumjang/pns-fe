import { Goal } from './Goal';
import { Growth } from './Growth';
import { History } from './History';
import { Investment } from './Investment';
import { Mission } from './Mission';
import * as S from './TeamIntroduce.styles';
import { Vision } from './Vision';

const TeamIntroduce = () => {
  return (
    <S.Container>
      <Vision />
      <Growth />
      <Mission />
      <History />
      <Goal />
      <Investment />
    </S.Container>
  );
};

export default TeamIntroduce;
