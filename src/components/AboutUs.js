import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1>About Us</h1>

      <p>
        Launched in 2024, Amazona started it&#39;s journey with a vision of
        being a leading platform for physical and digital sellers to perform
        global retail and wholesale trade. Amazona aims to serve millions of
        buyers and suppliers in Bangladesh and in future around the world. Time
        is valuable to our customers and they must now no longer need to waste
        hours in traffic, and wait in line simply to shop! With Amazona -
        shopping is now more easy, more relaxing. Simply order and receive the
        product right at your doorstep. Our mission is to make the shopping
        experience more easy for everyone and secured. We continuously focus on
        updating our ways of providing services and wont stop until we can
        satisfy every single of our valuable customers.
        <br />
      </p>
    </div>
  );
};

export default AboutUs;
