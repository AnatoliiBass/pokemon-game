import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import Image from './assest/bg3.jpg';

const App = () => {

  return (
    <>
      <Header title='This is title'
        descr='This is Description!' />
      <Layout title='My first App with ReactJS'
        descr='I am very happy when everything is OK.'
        urlBg={Image} />
      <Layout title='My first App with ReactJS'
        descr='I am very happy when everything is OK.'
        colorBg='red' />
      <Layout title='My first App with ReactJS'
        descr='I am very happy when everything is OK.'
        urlBg={Image} />
      <Footer />
    </>
  );
}

export default App;
