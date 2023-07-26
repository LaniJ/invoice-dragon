import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/icons/logo.svg';
import githubIcon from '../../assets/icons/githubIcon.svg';
import useTranslation from 'next-translate/useTranslation'

const Header = () => {
  const { t } = useTranslation('common')
  return (
    <div className={styles.header}>
      <div>
        <Link className={styles.pageLogo} href="/" passHref={true}>
          <Image
            src={logo}
            alt={t('page_logo')}
            priority
          />
        </Link>
      </div>
      <div>
        <a href="https://github.com/LaniJ/Invoice-Receipt-Generator" target="_blank">
          <Image
            src={githubIcon}
            alt={t('github_icon')}
            priority
          />
        </a>
      </div>

    </div>
  );
}

export default Header;
