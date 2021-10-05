import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';
import Footer from './footer';

const  App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://w7.pngwing.com/pngs/803/598/png-transparent-phoenix-logo-phoenix-red-bird-illustration-leaf-photography-mirror.png'  />
      </header>

      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>

        <div>
          <a>Masseges</a>
        </div>

        <div>
          <a>News</a>
        </div>

        <div>
          <a>Music</a>
        </div>

        <div>
          <a>Sattings</a>
        </div>


      </nav>
      <div className='content'>
        <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
        <div>
          ava + disciption 
        </div>
        <div>
          my posts
          <div>
            New posts
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}






export default App;
