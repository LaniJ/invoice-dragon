import Header from "../Header/Header";
// className={style.content}

const Layout = ({ children }) => {
  return ( 
    <div>
      <Header />
      { children }
    </div>
   );
}
 
export default Layout;