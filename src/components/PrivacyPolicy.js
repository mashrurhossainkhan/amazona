import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ marginLeft: '12px', marginRight: '12px' }}>
      <h1>Privacy &amp; Policy</h1>
      <p>
        Amazona respects and protects the privacy of our customers and users who
        visit our websites. You are advised to read the privacy policy
        carefully. By accessing the services provided by Amazona you agree to
        the collection and use of your data by Amazona in the manner provided in
        this Privacy Policy.
      </p>

      <ol type="1">
        <li>
          We will only keep your information for as long as we are either
          required to by law or as is relevant for the purposes for which it was
          collected.
        </li>

        <li>
          We may collect the following personally identifiable information about
          you -
          <ol type="a">
            <li>First and last name. </li>
            <li>Alternate email address.</li>
            <li>Mobile number and contact details.</li>
            <li>ZIP/Postal code.</li>
            <li>
              Financial information (like account or credit card numbers) -
              Opinions of features on our websites.
            </li>
            <li>Other information as per our registration process.</li>
          </ol>
        </li>

        <li>
          We use the information we collect in various ways, including to:
          <ol type="a">
            <li>Provide, operate, and maintain our website.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>
              Develop new products, services, features, and functionality.
            </li>
            <li>Improve, expand, and personalize our website.</li>
            <li>Send you emails and updates (If necessary).</li>
            <li>Find and prevent fraud.</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including customer service to provide you with updates
              and other information relating to the website, and for marketing
              and promotional purposes.
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
};

export default PrivacyPolicy;
