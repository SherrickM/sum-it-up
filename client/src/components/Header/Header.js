
import {
  AppBar, Toolbar, List, Typography
} from '@material-ui/core';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Auth from '../../utils/auth';


const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <div class="nav">

        <a class="app-name" component={Button} href="/">Sum it Up</a>
        <div class=" justify-content-center">
          <div>
            {Auth.loggedIn() ? (
              <>
                <Button class="btn-logout" href="/" onClick={logout}> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-log-out" viewBox="0 0 24 24">
                    <defs />
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
                  </svg>
                </Button>
               

              </>
            ) : (
              <>
                <Button class="btn-login m-3" href="/login">Sign In</Button>
                <Button class="btn-logout " href="/signup">Sign Up</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header