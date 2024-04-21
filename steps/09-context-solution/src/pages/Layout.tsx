import React from 'react';
import { Header } from '../components/Header';

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
