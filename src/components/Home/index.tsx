import Image from 'next/image';

import styles from './styles.module.scss';

import { GoArrowRight } from "react-icons/go";
import { BsJournalText } from "react-icons/bs";

import Computer from '@/app/assets/computer.svg';
import arrowDown from '@/app/assets/downArrow.svg';
import danielPresentation from '@/app/assets/danielName.svg';

export function Home() {
    return (
        <section className={styles.home} id='home'>
            <div className={styles.content}>
                
                <Image 
                    className={styles.illustrationComputer} 
                    src={danielPresentation} alt=''
                 />

                <h2>Desenvolvedor full-stack</h2>
                <p>
                    Over 4 years of experience in the tech industry. I specialize in building innovative <br /> web and mobile applications using technologies such as React, React Native, and <br /> Node.`js.
                </p>

                <div className={styles.buttons}>
                    <button className={styles.buttonAboutMe}>
                        <BsJournalText />
                        Sobre mim
                    </button>
                    <button className={styles.buttonContact}>
                        Contato
                        <GoArrowRight />
                    </button>  
                </div>
            </div>

            <div className={styles.illustration}>
                <Image src={Computer} alt='' width={488} height={417} />
                <Image src={arrowDown} alt='' />
            </div>
        </section>
    );
}