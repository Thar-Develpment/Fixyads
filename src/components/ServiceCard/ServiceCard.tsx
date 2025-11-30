import Link from 'next/link';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <Link href={link} className={styles.link}>
                Learn More &rarr;
            </Link>
        </div>
    );
};

export default ServiceCard;
