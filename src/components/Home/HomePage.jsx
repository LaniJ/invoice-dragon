import styles from './homePage.module.scss';
import Link from 'next/link';


const HomePage = () => {
  return ( 
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.text__lead}>Invoice Dragon</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="168" height="155" fill="#ffffff" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V208a8,8,0,0,0,11.58,7.15L64,200.94l28.42,14.21a8,8,0,0,0,7.16,0L128,200.94l28.42,14.21a8,8,0,0,0,7.16,0L192,200.94l28.42,14.21A8,8,0,0,0,232,208V56A16,16,0,0,0,216,40ZM176,144H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z"></path></svg>
        <h2 className={styles.text__sub}>A fast and convenient solution for effortlessly creating Invoices and Receipts.<br />Absolutely Free !</h2>
        <div className={styles.page__btns}>
          <Link href={`/templates`}>
            <button className={`${styles.btn} ${styles.btn__secondary}`}>GET STARTED</button>
          </Link>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Made by <a className={styles.link} href="https://new-portfolio-lani.vercel.app/" target="_blank">Lani</a></p>
      </div>
    </div>
   );
}
 
export default HomePage;