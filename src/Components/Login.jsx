import { useState } from "react";

export default function Login() {
    const [loginData , setLoginData] = useState({
        email : "",
        password : ""
    })
    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(loginData);
    }

    const handleOnChange = (event)=> {
        console.log(event.target);
        setLoginData({
            ...loginData , [event.target.name] : event.target.value 
        })
    }

  return (
    <div className="text-center">
      <main className="form-signin d-flex justify-content-center">
        <form className="w-50 shadow-lg p-4 rounded bg-light" onSubmit={handleOnSubmit}>
          <img
            className="mb-4"
            src="https://www.pngall.com/wp-content/uploads/2016/03/Money-PNG-Pic.png"
            alt="App Logo"
            width="130"
            height="100"
          />

          <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

          <div className="form-floating my-2">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              onChange={handleOnChange}
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating my-2">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              onChange={handleOnChange}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          {/* Submit Button */}
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign In
          </button>

          {/* Footer */}
          <p className="mt-5 mb-3 text-muted">© 2025 Expense Tracker</p>
        </form>
      </main>
    </div>
  );
}
