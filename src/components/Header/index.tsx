import styles from './styles.module.scss';

import { kalam } from '../../app/fonts';

import { MdOutlineWbSunny } from "react-icons/md";
import { TbLetterX } from "react-icons/tb";

export function Header() {
   

    return (
        <header className={styles.header}>
            <div className={ kalam.className}>
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

                    <button>
                        <MdOutlineWbSunny size={20} />
                    </button>
                </ul>
            </nav>

            <div className={styles.menuMobile}>
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>

                <span></span>

                <div>
                    
                </div>
            </div>
        </header>
    );
}