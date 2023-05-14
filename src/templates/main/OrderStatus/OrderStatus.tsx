import InfoDescription from '@/components/common/Panel/InfoDescription/InfoDescription';
import InfoTitle from '@/components/common/Panel/InfoTitle/InfoTitle';

import * as S from './OrderStatus.styles';

const OrderStatus = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <InfoTitle
          title='홈 주문 현황'
          subTitle='콜렛 주문 관리,
        주문부터 일정까지 똑똑하게'
        />
        <S.InfoDescriptionWrapper>
          {/* <InfoDescription
            description={`P&S에서 콜렛을 주문해 보세요.
            원하는 콜렛을 주문 제작은 기본,
            일자별 주문 현황을 확인할 수 있어요.`}
          /> */}
          <InfoDescription
            description={`P&S에서 콜렛을 주문해 보세요.
            원하는 콜렛을 빠르게 제작하여 보내드릴게요.`}
          />
        </S.InfoDescriptionWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default OrderStatus;
