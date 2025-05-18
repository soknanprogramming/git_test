import './css/HeaderBar.css';

const HeaderBar = () => {
  return (
    <nav className="header-bar">
      <div className="left">
        <h3>The Dojo Blog</h3>
      </div>
      <div className="right">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}

export default HeaderBar;
