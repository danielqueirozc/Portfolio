import { useState } from 'react';
import styles from './styles.module.scss';

interface stateProps {
    changeState: () => void
}

export function ButtonHamburger({ changeState }: stateProps) {
    const [isActive, setIsActive] = useState(false);

    function toggleButton() {
        setIsActive(!isActive);
    }

    function activeFunctions() {
        toggleButton();
        changeState();
    }

    return (
        <button 
            className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
             onClick={activeFunctions}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}