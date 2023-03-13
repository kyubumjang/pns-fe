import Text from '@/components/common/Text/Text';
import theme from '@/styles/theme';

import * as S from './History.styles';

interface History {
  year: string;
  yearInfo: MonthHistory[] | [];
}

interface MonthHistory {
  month: string;
  monthInfo: string;
}

const History = () => {
  const history: History[] = [
    {
      year: '2023',
      yearInfo: [{ month: '03', monthInfo: '피엔에스 사이트 오픈' }],
    },
    { year: '2022', yearInfo: [] },
    { year: '2021', yearInfo: [] },
    { year: '2020', yearInfo: [] },
    { year: '2019', yearInfo: [] },
    { year: '2018', yearInfo: [] },
    { year: '2017', yearInfo: [] },
    { year: '2016', yearInfo: [] },
    {
      year: '2015',
      yearInfo: [{ month: '05', monthInfo: '베스펠 사업 거래처 추가' }],
    },
    {
      year: '2014',
      yearInfo: [{ month: '07', monthInfo: '5000만 자본금 유치' }],
    },
    { year: '2013', yearInfo: [] },
    { year: '2012', yearInfo: [{ month: '12', monthInfo: '2억 매출액 달성' }] },
    {
      year: '2011',
      yearInfo: [{ month: '12', monthInfo: '1억 7700만 매출액 달성' }],
    },
    { year: '2010', yearInfo: [] },
    { year: '2009', yearInfo: [] },
    { year: '2008', yearInfo: [] },
    { year: '2007', yearInfo: [] },
    { year: '2006', yearInfo: [] },
    { year: '2005', yearInfo: [] },
    {
      year: '2004',
      yearInfo: [{ month: '04', monthInfo: '(주)피엔에스 설립' }],
    },
  ];
  return (
    <S.Container>
      <Text
        fontSize='48px'
        fontWeight={600}
        color={theme.color.white}
      >
        피앤에스팀은 한걸음 한걸음 묵묵히 걸어갑니다.
      </Text>
      <S.YearWrapper>
        {history.map(
          (yearInfo) =>
            yearInfo &&
            yearInfo.yearInfo.map((monthInfo, index) => (
              <S.YearRowWrapper key={index}>
                <Text
                  fontSize='22px'
                  fontWeight={600}
                  color={theme.color.white}
                >{`${yearInfo.year}.${monthInfo.month}`}</Text>
                <Text
                  fontSize='22px'
                  fontWeight={600}
                  color={theme.color.white}
                >
                  {monthInfo.monthInfo}
                </Text>
              </S.YearRowWrapper>
            )),
        )}
      </S.YearWrapper>
    </S.Container>
  );
};

export default History;
