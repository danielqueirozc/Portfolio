import { useTheme } from "@/app/ThemeProvider";

import { MdOutlineWbSunny } from "react-icons/md";

import styles from './styles.module.scss';

export function ButtonDarkMode() {
    const {toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme}>
            <MdOutlineWbSunny size={20} />
        </button>
    );
}