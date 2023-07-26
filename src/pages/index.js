import Script from 'next/script';
import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import HomePage from '../components/Home/HomePage';
import Header from '../components/Header/Header';
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t, lang } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('invoice_dragon')}</title>
        <title>{t('invoice_dragon_title')}</title>
        <meta property="og:title" content={t('invoice_dragon_title')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://invoicedragon.com/" />
        <meta property="og:image" content="/assets/icon.png" />
        <meta property="og:description" content={t('invoice_dragon_description')} />
        <meta property="og:locale" content={lang} />
        <meta property="og:site_name" content={t('invoice_dragon')} />
        <meta name="author" content="Lani" />
        <meta name="description" content={t('invoice_dragon_description')} />
        <meta name="application-name" content={t('invoice_dragon_title')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LHPWMTY60Z"></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-LHPWMTY60Z');`}
      </Script>
      <main className={styles.main}>
        <Header />
        <HomePage />
      </main>
    </>
  )
}
