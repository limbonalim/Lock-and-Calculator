import React, {PropsWithChildren} from 'react';
import {Link} from 'react-router-dom';

interface Props extends PropsWithChildren {

}

const Layout: React.FC = ({children}) => {
  return (
    <>
      <header className="container py-2">
        <Link className="nav-link" to="/">Lock</Link>
      </header>
      <main className="my-5 container">
        {children}
      </main>
    </>
  );
};

export default Layout;