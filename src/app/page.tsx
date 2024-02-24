"use client"

import { useEffect, useState } from 'react';

import { useTheme } from './ThemeProvider';

import { Main } from '@/components/Main';
import styles from './app.module.scss';

import { Header } from "@/components/Header";
import { HeaderMobile } from '@/components/headerMobile';

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);   
  const {theme} = useTheme();

  useEffect(() => {
    function updateIsMobile(event?: MediaQueryListEvent) {
      
      const matches = event ? event.matches : window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(matches);
    }

    updateIsMobile();

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener('change', updateIsMobile);

  }, [])

  if (isMobile === undefined) return null;

  return (
      <div className={`${styles.app} ${theme === 'default' ? styles.backgroundDefault : styles.backgroundDark}`}>
        {isMobile ? <HeaderMobile /> : <Header /> }
        <Main />
      </div>
    );
}
