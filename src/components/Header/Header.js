import styleHeader from './Header.module.css'

const Header = ({ title, descr }) => {
   return (
      <header className={styleHeader.root}>
         <div className={styleHeader.forest}></div>
         <div className={styleHeader.container}>
            <h1>{title}</h1>
            <p>{descr}</p>
         </div>
      </header>
   );
}

export default Header;
