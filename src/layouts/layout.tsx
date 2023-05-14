import { ReactNode } from 'react';

import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
