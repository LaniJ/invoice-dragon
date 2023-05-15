import styles from './homePage.module.scss';
import Image from 'next/image'
import logo from '../../assets/icons/logo.svg';

const Header = () => {
  return (  
    <div className={styles.header}>
      <div>
        <Image
          src={logo}
          alt="Page Logo"
          priority
        />
      </div>
      <div>Templates</div>
    </div>
  );
}
 
export default Header;