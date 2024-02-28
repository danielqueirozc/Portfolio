import styles from './styles.module.scss';

export function ProjectCard() {
    return (
        <div className={styles.highlight}>
            <div className={styles.cover}>
                
            </div>

            <div className={styles.infoAndIconProject}>
                <span>
                    08 - Jan 2024
                </span>
            </div>

            <div className={styles.titleAndDescriptionProject}>
                <strong>
                    Nome do projeto
                </strong>

                <p>
                    descricao do projeto
                </p>
            </div>
        </div>
    );
}