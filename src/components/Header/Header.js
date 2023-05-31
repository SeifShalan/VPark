import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Logo</h1>
      <div className="header-actions-container">
        <input placeholder="Search" className="header-search" />
      </div>
    </header>
  );
}

export default Header;
