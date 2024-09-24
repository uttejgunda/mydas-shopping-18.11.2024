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
              className="mydas-logo"
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
                placeholder="testing@gmail.com"
              />

              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                placeholder="Min. 8 characters"
              />

              <button className="forgot-password-btn">Forgot Password?</button>

              <button className="login-btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </section>

        <section className="banner-section">
          <img
            src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1727198188/woman-blocking-light.jpg"
            alt="woman-blocking-light"
          />
        </section>
      </main>
    );
  }
}

export default LoginForm;

// Hanging Hats: https://res.cloudinary.com/dkoqbt4pc/image/upload/v1727198151/hanging-hats.jpg
// Woman Blocking Light: https://res.cloudinary.com/dkoqbt4pc/image/upload/v1727198188/woman-blocking-light.jpg
// Bottles and Photos: https://res.cloudinary.com/dkoqbt4pc/image/upload/v1727198218/bottles-and-photos.jpg
