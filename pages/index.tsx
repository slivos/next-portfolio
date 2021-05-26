import React from 'react';
import { Header } from '../components/Header/Header';
import { Burger } from '../components/Header/Burger/Burger';


import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../components/particles/GlobalStyle';
import { theme } from '../components/particles/theme';
import { MainSection } from '../components/MainSection/MainSection';
import { CardItem } from '../components/Cards/CardItem/CardItem';




const prefix = '/next-portfolio';

export default function Home() {
 
  return ( 
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header />
        <Burger />
        <MainSection />
        <CardItem />
      </div>
    </ThemeProvider>
  );
};
