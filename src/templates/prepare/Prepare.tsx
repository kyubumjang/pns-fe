import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';

import Text from '@/components/Text/Text';
import { LinkContentWrapper } from '@/styles/common';

import * as S from './Prepare.styles';

const PrepareTemplate = () => {
  return (
    <S.PrepareContainer>
      <S.PrepareInfoContainer>
        <S.PrepareTitle>
          <Text tag='h3'>페이지를 준비하고 있어요</Text>
          <Text tag='h3'>빠르게 이용하실 수 있도록 노력할게요</Text>
        </S.PrepareTitle>
        <S.LinkWrapper>
          <Link href='/'>
            <LinkContentWrapper>
              <AiFillHome />
              홈으로 이동하기
            </LinkContentWrapper>
          </Link>
        </S.LinkWrapper>
      </S.PrepareInfoContainer>
    </S.PrepareContainer>
  );
};

export default PrepareTemplate;
