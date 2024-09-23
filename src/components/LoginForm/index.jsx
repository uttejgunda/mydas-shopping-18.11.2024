import { Component } from "react";
import "./index.css";

class LoginForm extends Component {
  state = {};

  render() {
    return (
      <main>
        <section className="form-section">
          <div className="form-section-content">
            <img
              src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1726574131/mydas-shopping-logo.png"
              alt="mydas-logo"
            />
            <h1>
              Hey,
              <br />
              you can login here!
            </h1>

            <div className="google-con">
              <img
                src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1726657793/google-logo.png"
                alt="google-logo"
              />
              <button>Sign-in with Google</button>
            </div>

            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username">Username *</label>
              <input
                type="text"
                id="username"
                placeholder="jdSDUFiug@gmail.com"
              />

              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                placeholder="Min. 8 characters"
              />

              <button className="forgot-password-btn">Forgot Password?</button>

              <button className="login-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </section>

        <section className="banner-section">
          <img
            src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1726658779/antique-boutique-bg.jpg"
            alt="antique-boutique-bg"
          />
        </section>
      </main>
    );
  }
}

export default LoginForm;
