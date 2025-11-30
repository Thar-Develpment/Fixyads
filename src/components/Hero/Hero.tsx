import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.badge}>Digital Marketing & Training</span>
                    <h1 className={styles.title}>
                        Grow Your Business with <span className={styles.highlight}>Expert Strategies</span>
                    </h1>
                    <p className={styles.description}>
                        We provide top-notch digital marketing services and industry-ready training courses to help you succeed in the digital world.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/contact" className="btn btn-primary">Get Free Audit</Link>
                        <Link href="/courses/digital-marketing" className="btn btn-outline">Join Free Demo Class</Link>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    {/* In a real app, use next/image here */}
                    <img 
                        src="/image-1.svg" 
                        alt="A descriptive name for your visual" 
                        style={{ width: '100%', height: 'auto', maxHeight: '400px', display: 'block'}}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
