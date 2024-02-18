import { useState } from 'react';
import styles from './styles.module.scss';

import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineWbSunny } from 'react-icons/md';
import { kalam } from '@/app/fonts';
import { ButtonHamburger } from '../ButtonHamburger';

export function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);

    function changeState() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.container}>
            <div className={ kalam.className}>
                <span>Daniel</span>
                <strong>Queiroz</strong>
            </div>

            <ButtonHamburger changeState={changeState} />

            {isOpen && (
                <nav className={styles.nav}>
                    <div className={styles.content}>
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

                            <button>
                                <MdOutlineWbSunny size={20} />
                            </button>
                        </div>
                    </div>
                </nav>
            )}
        </div>
    );
}