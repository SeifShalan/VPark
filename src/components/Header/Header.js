import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Logo</h1>
      <div className="header-actions-container">
        <input placeholder="Search" className="header-search" />
        <button className="header-button">G</button>
        <button className="header-button">N</button>
      </div>
    </header>
  );
}

export default Header;
