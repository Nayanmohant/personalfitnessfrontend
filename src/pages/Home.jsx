import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <header
        className="bg-primary text-white relative"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/3d-rendering-black-dumbbells-floor-dark-concept-fitness-room-with-training-equipments-back_67155-14961.jpg?semt=ais_hybrid')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height:500
          
        }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <nav className="container mx-auto flex items-center justify-between py-5 px-6 relative z-10">
          {/* Logo */}
          <a href="/" className="text-3xl font-bold text-decoration-none text-white">
            Fitness<span className="text-secondary">Pro</span>
          </a>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex space-x-6">
            <a
              href="#home"
              className="text-white hover:text-secondary text-decoration-none text-lg"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-white hover:text-secondary text-decoration-none text-lg"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-white hover:text-secondary text-decoration-none text-lg"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-white hover:text-secondary text-decoration-none text-lg"
            >
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex space-x-4">
          <Link to="/login">
        <button className="btn btn-outline-light px-4 py-2">Login</button>
      </Link>
      <Link to="/signup">
        <button className="btn btn-light text-primary px-4 py-2">Sign Up</button>
      </Link> 
          </div>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden block text-white text-2xl"
            onClick={() =>
              document
                .getElementById("mobile-menu")
                .classList.toggle("hidden")
            }
          >
            <i className="bi bi-list"></i>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className="absolute top-20 left-0 w-full bg-primary text-white hidden flex-col space-y-4 p-4 lg:hidden"
        >
          <a href="#home" className="block text-white text-decoration-none">
            Home
          </a>
          <a href="#features" className="block  text-white  text-decoration-none">
            Features
          </a>
          <a href="#about" className="block  text-white  text-decoration-none">
            About Us
          </a>
          <a href="#contact" className="block  text-white hover:text-secondary text-decoration-none">
            Contact
          </a>
          <div className="flex space-x-4">
            <button className="btn btn-outline-light px-4 py-2">Login</button>
            <button className="btn btn-light text-primary px-4 py-2">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center bg-light py-5">
        <div className="container">
          <h1 className="display-4 mb-3">Your Fitness Journey Starts Here!</h1>
          <p className="lead">
            Track your workouts, monitor your progress, and achieve your fitness goals—all in one place.
          </p>
          <div>
            <a href="#" className="btn btn-primary btn-lg mr-2">
              Get Started
            </a>
            <a href="#features" className="btn btn-outline-primary btn-lg">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="container mt-5"id="features">
        <h2 className="text-center mb-4 text-secondary">Our Features</h2>
        <div className="row">
          {/* Feature 1 */}
          <div className="col-md-4 mb-4">
            <div className="card text-center border-primary shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary font-weight-bold">
                  Workout Tracking
                </h5>
                <p className="card-text">
                  Log your workouts, track exercises, duration, and calories
                  burned.
                </p>
                <Link to="/workoutlog" className="btn btn-outline-primary">
                  Log Workout
                </Link>
              </div>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="col-md-4 mb-4">
            <div className="card text-center border-primary shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary font-weight-bold">
                  Progress Monitoring
                </h5>
                <p className="card-text">
                  Visualize your workout history and monitor progress over time.
                </p>
                <Link to="/history" className="btn btn-outline-primary">
                  View History
                </Link>
              </div>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="col-md-4 mb-4">
            <div className="card text-center border-primary shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary font-weight-bold">
                  Nutrition Tracking
                </h5>
                <p className="card-text">
                  Log your meals, track nutrition, and get diet recommendations.
                </p>
                <Link to="/profile" className="btn btn-outline-primary">
                  Track Nutrition
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      {/* About Section */}
      <section id="about" className="bg-light py-5">
        <div className="container text-center">
          <h2>About Us</h2>
          <p className="lead mt-3">
            We are passionate about helping you achieve your fitness goals. Whether it's weight loss, strength training, or overall health, FitnessPro has you covered.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-light py-5">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p className="lead mt-3">We'd love to hear from you! Whether you have questions or need support, feel free to get in touch with us.</p>

          <form className="mt-4 shadow">
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control border border-primary"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control border border-primary"
                id="message"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className='mt-3'>
            <button type="submit" className="btn btn-primary ">Submit</button></div>
          </form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5 bg-primary text-white">
        <h2>Ready to Start Your Journey?</h2>
        <a href="#" className="btn btn-light btn-lg mt-3">
          Sign Up Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 FitnessPro. All Rights Reserved.</p>
          <div>
            <a href="#" className="text-white mx-2">
              Privacy Policy
            </a>
            |
            <a href="#" className="text-white mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
