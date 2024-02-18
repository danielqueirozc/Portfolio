import Image from 'next/image';
import styles from './styles.module.scss';

import { kalam } from '@/app/fonts';

import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si"
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { BsJournalText } from "react-icons/bs";

import programming from '@/app/assets/programming.svg';

export function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <Image
                   className={styles.programming}
                    src={programming} 
                    alt=''
                />
                
                <div className={styles.content}>
                    <div className={styles.icons}>
                        <IoLogoJavascript />
                        <SiTypescript />
                        <FaReact />
                        <TbBrandNextjs />
                        <FaJava />
                        <SiSpringboot />
                    </div>

                    <span className={kalam.className}>
                        Sobre mim
                    </span>
                    <h1>
                        I’m a passionate software developer looking for <br /> my first international oppotunity
                    </h1>
                    <p>
                        Beyond coding, I'm a coffee enthusiast, a cat lover, and a self-taught artist who <br /> enjoys spending my free time doodling. I am currently seeking opportunities to <br /> bring my skills and enthusiasm to a tech company in the United States or Europe <br /> and am excited about the prospect of relocating to pursue new challenges.
                    </p>
                    <button>
                        <BsJournalText />
                        My resume
                    </button>
                </div>
            </div>
        </section>
    );
}