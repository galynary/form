import './Header.css';
const Header = ({ showModal }) => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <span className="nav-brend">ToDo</span>
        <button onClick={showModal} className="btn-open">
          Open Modal
        </button>
      </div>
    </nav>
  );
};
export default Header;

//button onClick={showModal}  --- відкриваємо Modal
