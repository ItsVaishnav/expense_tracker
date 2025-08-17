import {HashRouter as Router , Routes , Route , Link} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import DashBoard from './DashBoard';
export default function Header() {
  return (
    <Router>
    
    <header>
      {" "}
      <div className="px-3 py-2 text-bg-dark border-bottom">
        {" "}
        <div className="container">
          {" "}
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {" "}
            <a
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              {" "}
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlink:href="#bootstrap"></use>
              </svg>{" "}
            </a>{" "}
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              {" "}
              <li>
                {" "}
                <a href="#" className="nav-link text-secondary">
                  {" "}
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <use xlink:href="#home"></use>
                  </svg>
                  Home
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#" className="nav-link text-white">
                  {" "}
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <use xlink:href="#speedometer2"></use>
                  </svg>
                  <Link to="/" className="text-white text-decoration-none">Dashboard</Link>
                  
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#" className="nav-link text-white">
                  {" "}
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <use xlink:href="#table"></use>
                  </svg>
                  Orders
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#" className="nav-link text-white">
                  {" "}
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <use xlink:href="#grid"></use>
                  </svg>
                  Products
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#" className="nav-link text-white">
                  {" "}
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <use xlink:href="#people-circle"></use>
                  </svg>
                  Customers
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="px-3 py-2 border-bottom mb-3">
        {" "}
        <div className="container d-flex flex-wrap justify-content-center">
          {" "}
          <form
            className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"
            role="search"
          >
            {" "}
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />{" "}
          </form>{" "}
          <div className="text-end">
            {" "}
            <button type="button" className="btn btn-light text-dark me-2">
                <Link to="/login" className='text-dark text-decoration-none'>Login</Link>
      
                </button>{" "}
            <button type="button" className="btn btn-primary">
              <Link to="/register" className='text-white text-decoration-none'>Sign-up</Link>
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>

    <Routes>
        <Route path='/' element={<DashBoard/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>

    </Router>
  );
}
