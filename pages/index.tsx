import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import { Burger } from '../components/Header/Burger/Burger';
import { Menu } from '../components/Header/Menu/Menu';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../components/particles/GlobalStyle';
import { theme } from '../components/particles/theme';
import { MainSection } from '../components/MainSection/MainSection';
import { CardItem } from '../components/Cards/CardItem/CardItem';




export default function Home() {
  const [open, setOpen] = useState(false);

  return ( 
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <MainSection />
        <CardItem />
      </div>
    </ThemeProvider>
  );
}
