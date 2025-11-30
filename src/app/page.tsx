import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import CourseCard from '@/components/CourseCard/CourseCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="section container">
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <p className={styles.sectionSubtitle}>
          Comprehensive digital solutions to elevate your brand and drive measurable growth.
        </p>

        <div className={styles.grid}>
          <ServiceCard
            title="Social Media Marketing"
            description="Build a strong community and engage your audience on platforms like Instagram, Facebook, and LinkedIn."
            icon="📱"
            link="/services#smm"
          />
          <ServiceCard
            title="SEO Optimization"
            description="Rank higher on Google and drive organic traffic to your website with our proven SEO strategies."
            icon="🔍"
            link="/services#seo"
          />
          <ServiceCard
            title="Performance Marketing"
            description="Maximize ROI with targeted PPC campaigns on Google Ads and Meta Ads."
            icon="📈"
            link="/services#ads"
          />
          <ServiceCard
            title="Web Development"
            description="Fast, secure, and responsive websites built with modern technologies like Next.js and React."
            icon="💻"
            link="/services#web-dev"
          />
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <Link href="/services" className="btn btn-primary">View All Services</Link>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Courses</h2>
          <p className={styles.sectionSubtitle}>
            Master in-demand skills with our industry-expert led training programs.
          </p>

          <div className={styles.grid}>
            <CourseCard
              title="Digital Marketing Masterclass"
              description="Learn SEO, SMM, PPC, and Content Marketing from scratch. Live projects included."
              duration="3 Months"
              level="Beginner to Advanced"
              link="/courses/digital-marketing"
              imageColor="#0056b3"
            />
            <CourseCard
              title="Java Full Stack Development"
              description="Become a proficient Java developer. Covers Core Java, Spring Boot, and Microservices."
              duration="4 Months"
              level="Intermediate"
              link="/courses/java"
              imageColor="#e05d44"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section container">
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <p className={styles.sectionSubtitle}>
          Trusted by businesses and students alike.
        </p>

        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>"The team transformed our online presence. Our leads increased by 200% in just 3 months!"</p>
            <div className={styles.testimonialAuthor}>Sarah Johnson</div>
            <div className={styles.testimonialRole}>CEO, TechStart</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>"The Digital Marketing course was a game-changer for my career. I got placed immediately after completion."</p>
            <div className={styles.testimonialAuthor}>Rahul Verma</div>
            <div className={styles.testimonialRole}>Digital Marketing Executive</div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>"Professional, timely, and results-driven. Highly recommend their SEO services."</p>
            <div className={styles.testimonialAuthor}>Mike Chen</div>
            <div className={styles.testimonialRole}>Founder, GreenEats</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Grow?</h2>
          <p className={styles.ctaText}>
            Whether you need a marketing partner or want to upskill your career, we are here to help.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)' }}>
              Get Started
            </Link>
            <Link href="/courses/digital-marketing" className="btn" style={{ border: '2px solid white', color: 'white' }}>
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
