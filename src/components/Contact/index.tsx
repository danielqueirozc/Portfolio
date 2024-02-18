"use client"

import Image from 'next/image';

import { FormEvent, useRef } from 'react'; 

import emailjs from '@emailjs/browser';

import styles from './styles.module.scss';

import { kalam } from '@/app/fonts'; 

import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import { GoArrowRight } from "react-icons/go";

import Profile from '@/app/assets/profile.svg';

export function Contact() {
    const form = useRef<HTMLFormElement>();

    

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_rnqha3n', 'template_tnq37vb', form.current, 'thZmFkVWuNNaeCXHe')
            .then((result) => {
                console.log(result.text);
                // Lidar com sucesso
            }, (error) => {
                console.log(error.text);
                // Lidar com erro
            });
        }        
    }

    return (
        <section className={styles.containerContact}>
            <div className={styles.contact}>
                <div className={styles.content}>
                    <div className={styles.description}>
                        <div className={styles.profileAndTitle}>
                            <Image className={styles.profile} src={Profile} alt='' />
                            <span className={kalam.className}>
                                Contato
                            </span>
                        </div>
                        <h2>
                            Gostou do meu trabalho? Vamos trabalhar juntos
                        </h2>
                        <p>
                            I’m always up for a chat. Pop me an email at
                                {' '}
                                <a href="#">
                                    danielqueiroz.job@gmail.com
                                </a>
                                {' '}
                            or give me a shout on social media. 
                        </p>
                    </div>

                    <div className={styles.socialMedia}>
                        <a href="#">
                            <BsGithub />
                        </a>

                        <a href="#">
                            <GrLinkedin />
                        </a>

                        <a href="#">
                            <SiInstagram />
                        </a>
                    </div>
                </div>  

                <div className={styles.form}>
                    <form onSubmit={sendEmail}>
                        <input type="text" placeholder='Nome' />
                        <input type="text" placeholder='E-mail' />
                        <textarea placeholder='Sua mensagem' />

                        <button type='submit' onSubmit={sendEmail}>
                            Enviar mensagem
                            <GoArrowRight />
                        </button>
                    </form>                    
                </div>  
            </div>
        </section>
    );
}