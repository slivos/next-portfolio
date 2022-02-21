import React from 'react';
import { Header } from '../components/Header/Header';
import { Burger } from '../components/Header/Burger/Burger';

import ProgressBar from 'react-progressbar-on-scroll';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../components/particles/GlobalStyle';
import { theme } from '../components/particles/theme';
import { MainSection } from '../components/MainSection/MainSection';
import { CardItem } from '../components/CardItem/CardItem';
import { Footer } from '../components/Footer/Footer';
import Projects from '../components/Projects/Projects';

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <GlobalStyle />
                <ProgressBar color="#004C99" />
                <Header />
                <Burger />
                <MainSection />
                <CardItem />
                <Projects />
                <Footer />
            </div>
        </ThemeProvider>
    );
}
