import Image from 'next/image';
import styles from './styles.module.scss';

import computer from '@/app/assets/computer.svg';

import danielPresentation from '@/app/assets/danielName.svg';
import arrowDown from '@/app/assets/downArrow.svg';

import { GoArrowRight } from "react-icons/go";
import { BsJournalText } from "react-icons/bs";

export function HomeMobile() {
    return (
        <section className={styles.home}>
            <Image className={styles.computer} src={computer} alt='' />

            <div className={styles.content}>
                <Image 
                    src={danielPresentation} 
                    alt=''
                    width={312}
                    height={56}
                />

                <h2>
                    Full-stack developer and innovation enthusiast
                </h2>
                <p>
                    Over 4 years of experience in the tech industry. I specialize in building innovative web and mobile applications using technologies such as React, React Native, and Node.js.
                </p>               
            </div>

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

            <Image className={styles.arrowDown} src={arrowDown} alt='' />
        </section>
    );
}