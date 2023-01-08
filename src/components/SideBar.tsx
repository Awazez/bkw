import '../styles/SideBar.css'
import {} from "@fortawesome/fontawesome-svg-core"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ComputerIcon from '@mui/icons-material/Computer';
import SettingsIcon from '@mui/icons-material/Settings';

function SideBar() {
    return (
        
        <aside className="navbar_sidebar">
    
             
                    <a  className="navbar_box">
                    <HomeIcon/>
                    </a>
                <a  className="navbar_box">
                <SearchIcon/>
                </a>
                 
                <a  className="navbar_box">
                <ShoppingCartIcon/>
                </a>
               
                <a  className="navbar_box">
                <AccountBalanceIcon/>
                </a>
                
                <a  className="navbar_box">
                <ComputerIcon/>
                </a>
    
                <a  className="navbar_box">
                <SettingsIcon/>
                </a>
            
        </aside>
  );
  }
  export default SideBar;

