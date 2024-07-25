import React from 'react';
import './css/style1.css'; // Import your CSS files
import './css/phone.css';

function App() {
  return (
    <div>
      <nav id="navbar">
        <div id="logo">
          <img src="img/WhatsApp Image 2023-03-23 at 5.19.59 PM.jpeg" alt="MyOnlineMeal.com" />
        </div>
        <ul>
          <li className="item"><a href="#home">Home</a></li>
          <li className="item"><a href="#services-container">Services</a></li>
          <li className="item"><a href="#client-section">Our Clients</a></li>
          <li className="item"><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <section id="home">
        <h1>Welcome to My Online Meal</h1>
        <p>We are ready to serve delicious food with lots of love</p>
        <p>"Food is not just nourishment for the body, but also a delightful experience for the senses."
           "The aroma of freshly cooked food can instantly transport you to a place of comfort and happiness."
           "Food has a remarkable ability to bring people together and create lasting memories."</p>
        <button className="btn">Order Now</button>
      </section>

      <section id="services-container">
        <h1 className="h1-primary center">Our Services</h1>
        <div id="services">
          <div className="box">
            <img src="img/1.png" alt="MyOnlineMeal.com" />
            <h2 className="h-secondary center">Food Ordering</h2>
            <p className="center">Food ordering is the process of requesting and receiving food from a restaurant or
              food establishment. Customers can place orders through various channels, such as phone calls or
              online platforms, specifying their desired dishes and any modifications.</p>
          </div>
          <div className="box">
            <img src="img/2.png" alt="MyOnlineMeal.com" />
            <h2 className="h-secondary center">Food Catering</h2>
            <p className="center">Food catering involves providing food services for events, parties, or gatherings.
              Caterers offer a variety of menu options to suit different preferences and dietary needs. They
              handle the preparation, cooking, and presentation of the food, as well as providing serving staff if
              required.</p>
          </div>
          <div className="box">
            <img src="img/3.png" alt="MyOnlineMeal.com" />
            <h2 className="h-secondary center">Bulk Ordering</h2>
            <p className="center">Bulk ordering refers to the process of purchasing a large quantity of products or
              goods at once. It is commonly used by businesses, organizations, and individuals who require a
              significant volume of items. Bulk ordering offers several advantages.</p>
          </div>
        </div>
      </section>

      <section id="client-section">
        <h1 className="h1-primary center">Our Clients</h1>
        <div id="clients">
          <div className="client-item">
            <img src="img/logo1.png" alt="Our Client" />
          </div>
          <div className="client-item">
            <img src="img/logo2.png" alt="Our Client" />
          </div>
          <div className="client-item">
            <img src="img/logo3.png" alt="Our Client" />
          </div>
          <div className="client-item">
            <img src="img/logo4.png" alt="Our Client" />
          </div>
        </div>
      </section>

      <section id="contact">
        <h1 className="h1-primary center">Contact Us</h1>
        <div id="contact-box">
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" placeholder="Enter your name" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" placeholder="Enter your email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number: </label>
              <input type="number" name="pnum" placeholder="Enter your phone number" id="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message: </label>
              <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="center">
          Copyright &copy; www.myOnlineMeal.com. All rights reserved!
        </div>
      </footer>
    </div>
  );
}

export default App;
