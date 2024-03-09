import Image from 'next/image';

import { useEffect, useState } from 'react';

import { About } from '../About';
import { Projects } from '../Projects';
import { Contact } from '../Contact';
import { Footer } from '../Footer';
import { Home } from '../Home';
import { HomeMobile} from '../HomeMobile'; 

import styles from './styles.module.scss';

export function Main() {
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 1200px)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1200px)");

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
        <main className={styles.main}>
           {isMobile ? <HomeMobile /> : <Home />}
                
            <About />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}