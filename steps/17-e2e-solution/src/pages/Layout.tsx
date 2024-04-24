import React from 'react';
import { Header } from '../components/Header';
import { Messages } from '../components/Messages';

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '1rem' }}>
        {children}
        <br />
        <Messages />
      </main>
    </>
  );
}
