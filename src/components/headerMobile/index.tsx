import { useState } from 'react';
import styles from './styles.module.scss';

import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineWbSunny } from 'react-icons/md';
import { kalam } from '@/app/fonts';
import { ButtonHamburger } from '../ButtonHamburger';
import { ButtonDarkMode } from '../ButtonDarkMode';
import { useTheme } from '@/app/ThemeProvider';

export function HeaderMobile() {
    const {theme} = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    function changeState() {
        setIsOpen(!isOpen);
    }

    return (
        <header className={`${styles.container} ${theme === 'default' ? styles.backgroundDefault : styles.backgroundDark}`}>
            <div className={`${kalam.className} ${styles.title}`}>
                <span>Daniel</span>
                <strong>Queiroz</strong>
            </div>

            <ButtonHamburger changeState={changeState} />

            {isOpen && (
                <nav className={styles.nav}>
                    <div className={`${styles.content} ${theme === 'default' ? styles.backgroundDefault : styles.backgroundDark}`}>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>

                            <li>
                                <a href="#">About</a>
                            </li>

                            <li>
                                <a href="#">Projets</a>
                            </li>

                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>

                        <div className={styles.borderTop}>
                                
                        </div>

                        <div className={styles.buttons}>
                            <button>
                                EN
                            </button>

                            <ButtonDarkMode /> 
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}