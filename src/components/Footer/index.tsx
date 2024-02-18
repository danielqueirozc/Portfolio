import styles from './styles.module.scss';

import { GoArrowUp } from "react-icons/go";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Daniel Queiroz 2024
            </p>

            <div className={styles.socialMedia}>
                <a href="#">
                    GitHub
                </a>

                <a href="#">
                    LinkedIn
                </a>

                <a href="#">
                    Instagram
                </a>

                <a className={styles.home} href="#" id='home'>
                    <GoArrowUp size={18} />
                </a>
            </div>
        </footer>
    );
}