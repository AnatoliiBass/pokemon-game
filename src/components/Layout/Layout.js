import styleLayout from './Layout.module.css'

const Layout = ({ title, descr, urlBg, colorBg, children }) => {
   const firstStyleBg = { background: `url('${urlBg}')` }
   const secondStyleBg = { background: `${colorBg}` }
   return (
      <section className={styleLayout.root}>
         <div className={styleLayout.wrapper} style={(urlBg) ? firstStyleBg : secondStyleBg}>
            <article>
               <div className={styleLayout.title}>
                  <h3>{title}</h3>
                  <span className={styleLayout.separator}></span>
               </div>
               <div className={`${styleLayout.desc} ${styleLayout.full}`}>
                  <p>{descr}</p>
                  {children}
               </div>
            </article>
         </div>
      </section>
   );
}

export default Layout;