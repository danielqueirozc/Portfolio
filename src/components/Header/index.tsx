import { useState } from 'react';


import styles from './styles.module.scss';

import { kalam } from '../../app/fonts';

import { TbLetterX } from "react-icons/tb";
import { ButtonDarkMode } from '../ButtonDarkMode';


export function Header() {
   

    return (
        <header className={styles.header}>
            <div className={`${kalam.className} ${styles.title}`}>
                <span>Daniel</span>
                <strong>Queiroz</strong>
            </div>

            <nav className={styles.nav}>
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

                    <button>
                        EN
                    </button>

                   <ButtonDarkMode />
                </ul>
            </nav>
        </header>
    );
}