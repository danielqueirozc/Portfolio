import styles from './styles.module.scss';

import { GoArrowRight } from "react-icons/go";

import { kalam } from '@/app/fonts';

import illustration1 from '@/app/assets/illustration-projects.svg'
import illustration2 from '@/app/assets/illustration-projects-2.svg'

import Image from 'next/image';
import { ProjectCard } from '../projectCard';

export function Projects() {
    return (
        <section className={styles.projects}>
            <div className={styles.titles}>
                <span className={kalam.className}>
                    Projetos
                </span>

                <h2>
                    Dê uma olhada nos meus projetos em destaque
                </h2>
            </div>

            <Image
                className={styles.illustration1} 
                src={illustration1} 
                alt=''
             />

            <div className={styles.highlightsContainer}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>

            <Image
                className={styles.illustration2} 
                src={illustration2} 
                alt=''
            />

            <button>
                Ver todos
                <GoArrowRight />
            </button>
        </section>
    ); 
}