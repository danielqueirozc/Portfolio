"use client"

import { Main } from '@/components/Main';
import styles from './app.module.scss';

import { Header } from "@/components/Header";
import { useEffect, useState } from 'react';
import { HeaderMobile } from '@/components/headerMobile';

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);  

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");


    function handleChange() {
      return setIsMobile(mediaQuery.matches);
    }

    mediaQuery.addListener(handleChange);
    
    return (
        function removeListenner() {
            mediaQuery.removeListener(handleChange);
        }
    )
  }, [])

  return (
      <div className={styles.app}>
        {isMobile ? <HeaderMobile /> : <Header /> }
        <Main />
      </div>
    );
}
