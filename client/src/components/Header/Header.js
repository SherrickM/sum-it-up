


import Button from '@material-ui/core/Button';

import Auth from '../../utils/auth';
import Logo from '../../assets/images/sum-it-up-logo.png'


const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <header>
        <div className="nav">

          <a className="app-name" component={Button} href="/"><img className="primary-logo" src={Logo} alt="Sum it up!" /></a>
          <div className="justify-content-center">
            <div>
              {Auth.loggedIn() ? (
                <>
                  <Button title="Log Out" className="btn-logout" href="/" onClick={logout}> 
                  <i class="fa-solid fa-right-from-bracket logout-icon"></i>
                  </Button>
                

                </>
              ) : (
                <>
                  <Button className="btn-login m-3" href="/login">Sign In</Button>
                  <Button className="btn-logout " href="/signup">Sign Up</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header