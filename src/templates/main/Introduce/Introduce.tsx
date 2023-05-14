import Image from 'next/image';
import Link from 'next/link';
import { AiFillTool, AiFillShopping } from 'react-icons/ai';
import { SlArrowDown } from 'react-icons/sl';

import Text from '@/components/common/Text/Text';
import { LinkContentWrapper } from '@/styles/common';

import mainBg from '../../../../public/assets/images/main.png';
import * as S from './Introduce.styles';

const IntroduceTemplate = () => {
  return (
    <S.IntroduceContainer>
      <S.SloganContainer>
        <S.ImgBgWrapper>
          <Image
            src={mainBg.src}
            alt='mainBg'
            objectFit='cover'
            layout='fill'
          />
        </S.ImgBgWrapper>
        <S.ImgGradientWrapper />
        <S.SloganContentContainer>
          <S.SloganInnerContainer>
            <Text tag='h1'>콜렛 제작</Text>
            <Text tag='h1'>P&S에서 쉽고 빠르게</Text>
            <S.SloganBtnContainer>
              <Link href='/prepare'>
                <LinkContentWrapper>
                  <AiFillShopping />
                  주문하기
                </LinkContentWrapper>
              </Link>
              <Link href='https://daehan-tech.vercel.app/'>
                <LinkContentWrapper>
                  <AiFillTool />
                  대한테크
                </LinkContentWrapper>
              </Link>
            </S.SloganBtnContainer>
          </S.SloganInnerContainer>
          <S.ArrowDownBtn>
            <S.BtnWrapper>
              <SlArrowDown size='40px' />
            </S.BtnWrapper>
          </S.ArrowDownBtn>
        </S.SloganContentContainer>
      </S.SloganContainer>
      <S.DescriptionContainer>
        <Text tag='p'>
          콜렛 주문 제작 서비스를 자세히 확인하고 원하는 치수로 쉽고 빠르게
          주문하세요.
        </Text>
        <Text tag='p'>이제껏 경험 못했던 쉽고 편리한 콜렛 주문 서비스,</Text>
        <Text tag='p'>Part and Solution에서 주문해서 빠르게 받아보세요.</Text>
      </S.DescriptionContainer>
    </S.IntroduceContainer>
  );
};

export default IntroduceTemplate;
