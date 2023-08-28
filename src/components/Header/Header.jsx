import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/icons/logo.svg';
import githubIcon from '../../assets/icons/githubIcon.svg';
import LanguageChange from '../Language/languageChange';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Link className={styles.pageLogo} href="/" passHref={true}>
          <Image
            src={logo}
            alt="Page Logo"
            priority
          />
        </Link>
      </div>
      <div className={styles.aside}>
        <div className={styles.lang}>
          <LanguageChange />
        </div>
        <div>
          <a href="https://github.com/LaniJ/Invoice-Receipt-Generator" target="_blank">
            <Image
              src={githubIcon}
              alt="Github icon"
              priority
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;