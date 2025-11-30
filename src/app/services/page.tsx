import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Our Services | Digital Marketing & Web Development',
    description: 'Explore our comprehensive digital marketing services including SEO, SMM, PPC, and Web Development.',
};

export default function ServicesPage() {
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.headerTitle}>Our Services</h1>
                    <p className={styles.headerSubtitle}>
                        We offer a full suite of digital solutions designed to help your business grow, engage, and convert.
                    </p>
                </div>
            </header>

            <div className="container">
                {/* SEO Section */}
                <section id="seo" className={styles.serviceSection}>
                    <div className={styles.serviceGrid}>
                        <div className={styles.serviceContent}>
                            <h2>Search Engine Optimization (SEO)</h2>
                            <p>
                                Improve your visibility on Google and drive high-quality organic traffic to your website. We use white-hat techniques to ensure long-term success.
                            </p>
                            <ul className={styles.featureList}>
                                <li>Keyword Research & Strategy</li>
                                <li>On-Page & Technical SEO</li>
                                <li>Link Building & Off-Page SEO</li>
                                <li>Local SEO Optimization</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">Get Free SEO Audit</Link>
                        </div>
                        <div className={styles.serviceImage}>SEO Visual</div>
                    </div>
                </section>

                {/* SMM Section */}
                <section id="smm" className={styles.serviceSection}>
                    <div className={`${styles.serviceGrid} ${styles.reverse}`}>
                        <div className={styles.serviceImage}>SMM Visual</div>
                        <div className={styles.serviceContent}>
                            <h2>Social Media Marketing</h2>
                            <p>
                                Build a loyal community and increase brand awareness across all major social platforms. We create engaging content that resonates with your audience.
                            </p>
                            <ul className={styles.featureList}>
                                <li>Strategy & Content Creation</li>
                                <li>Community Management</li>
                                <li>Influencer Marketing</li>
                                <li>Paid Social Campaigns</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">Start Growing</Link>
                        </div>
                    </div>
                </section>

                {/* Ads Section */}
                <section id="ads" className={styles.serviceSection}>
                    <div className={styles.serviceGrid}>
                        <div className={styles.serviceContent}>
                            <h2>Performance Marketing (PPC)</h2>
                            <p>
                                Get immediate results with targeted ad campaigns. We optimize your ad spend to maximize ROI and generate qualified leads.
                            </p>
                            <ul className={styles.featureList}>
                                <li>Google Ads (Search, Display, Shopping)</li>
                                <li>Facebook & Instagram Ads</li>
                                <li>LinkedIn Ads for B2B</li>
                                <li>Retargeting Campaigns</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">Boost Your Sales</Link>
                        </div>
                        <div className={styles.serviceImage}>PPC Visual</div>
                    </div>
                </section>

                {/* Web Dev Section */}
                <section id="web-dev" className={styles.serviceSection}>
                    <div className={`${styles.serviceGrid} ${styles.reverse}`}>
                        <div className={styles.serviceImage}>Web Dev Visual</div>
                        <div className={styles.serviceContent}>
                            <h2>Website Development</h2>
                            <p>
                                Your website is your digital storefront. We build fast, secure, and mobile-responsive websites that convert visitors into customers.
                            </p>
                            <ul className={styles.featureList}>
                                <li>Custom Website Design</li>
                                <li>E-commerce Solutions</li>
                                <li>Landing Page Optimization</li>
                                <li>Maintenance & Support</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">Build Your Site</Link>
                        </div>
                    </div>
                </section>
            </div>

            <section className="section text-center" style={{ background: 'var(--muted-light)' }}>
                <div className="container">
                    <h2>Ready to take your business to the next level?</h2>
                    <p className="mb-4">Book a free consultation with our experts today.</p>
                    <Link href="/contact" className="btn btn-primary">Contact Us Now</Link>
                </div>
            </section>
        </>
    );
}
