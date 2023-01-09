import './NavBar.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

function NavBar() {
    return (
      <nav className="header">
      <div className="header-left">
              <div className="logo">BKW</div>
      <div className="wrapper">
          <div className="search-input">
              <input type="text"  placeholder="Livres, auteurs, ou éditeurs"/>
              <div className="autocom-box">
              </div>
              <div className="icon"><i className="fas fa-search"></i></div>
          </div>
      </div>
      </div>
          <div>
              <div id="user_profile">
              <a><img className="user_img" src="https://secure.gravatar.com/avatar/5a27510a0af426b5e89876d67ab48c69?s=800&d=identicon"/> </a>
              </div>
          </div>
      
      </nav>
  );
  }
  export default NavBar;

