import styles from './styles.module.scss';

import { GoArrowUp } from "react-icons/go";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Daniel Queiroz 2024
            </p>

            <div className={styles.socialMedia}>
                <a href="https://github.com/danielqueirozc">
                    GitHub
                </a>

                <a href="https://www.linkedin.com/in/daniel-queiroz-669b42210/">
                    LinkedIn
                </a>

                <a href="https://instagram.com/danqcruz">
                    Instagram
                </a>

                <a className={styles.home} href="#" id='home'>
                    <GoArrowUp size={18} />
                </a>
            </div>
        </footer>
    );
}