import React from 'react';

// import logo from '../../assets/image/logo.png';
import './Home.Page.css';
// import Header from '../../components/organisms/Header/Header';
import Footer from '../../components/organisms/Footer/Footer';

function HomePage() {
  return (
    <div className='Webchannel'>
      {/* <Header /> */}
      <header className='Webchannel-header'>
        <iframe
          src='https://nnisp.csb.app/'
          title='WebChannel.DEV'
          name='WebChannel.DEV'
          width='100%'
          marginWidth='0'
          height='600'
          marginHeight='0'
          align='top'
          scrolling='No'
          frameBorder='0'
          hspace='0'
          vspace='0'
        >
          Browser not compatible.{' '}
        </iframe>
        {/* <img src={logo} className="Webchannel-logo" alt="logo" /> */}
      </header>
      <Footer />
    </div>
  );
}

export default HomePage;
