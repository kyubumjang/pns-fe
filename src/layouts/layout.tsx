import { ReactNode } from 'react';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

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
