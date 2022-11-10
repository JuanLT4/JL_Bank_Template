import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/style'
import { Billing, Button, CardDeal, Clients, CTA, FeedbackCard, Footer, GetStarted, Hero, Navbar, Stats, Testimonials } from '../components'


export default function Home() {
  return (

    <div className='bg-primary w-full overflow-hidden text-white'>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Billing />
          <Footer />
        </div>
      </div>

    </div>
  )
}
