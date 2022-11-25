import React from 'react';

interface Props {
  changeLocation: (location: string) => void;
}

const Navbar: React.FC<Props> = ({changeLocation}) => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Plovo</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={() => changeLocation('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={() => changeLocation('new-dish')}>New dish</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;