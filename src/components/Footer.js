import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="flex-container-footer-link">
              <div
                className="flex-item-footer-link1"
                style={{ fontWeight: 'bold', marginTop: '22px' }}
              ></div>
              <div
                className="flex-item-footer-link1"
                style={{ fontWeight: 'bold', marginTop: '22px' }}
              >
                MENU
              </div>

              <Link to="/termsandconditions" style={{ color: '#ffffff' }}>
                <div className="flex-item-footer-link">
                  Terms &amp; Conditions
                </div>
              </Link>

              <div className="flex-item-footer-link">
                PURCHASING &amp; DELIVERY POLICY
              </div>

              <Link to="/privacypolicy" style={{ color: '#ffffff' }}>
                <div className="flex-item-footer-link">
                  Privacy &amp; Policy
                </div>
              </Link>

              <Link to="/aboutus" style={{ color: '#ffffff' }}>
                <div className="flex-item-footer-link">About Us</div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="flex-container-footer-link">
              <div
                className="flex-item-footer-link1"
                style={{ fontWeight: 'bold', marginTop: '22px' }}
              >
                CUSTOMER CARE
              </div>

              <div className="flex-item-footer-link">HELP CENTER</div>

              <div className="flex-item-footer-link">HOW TO BUY</div>
              <Link to="/refundandreturn" style={{ color: '#ffffff' }}>
                <div className="flex-item-footer-link">RETURN &amp; REFUND</div>
              </Link>

              <Link to="/contact_us" style={{ color: '#ffffff' }}>
                <div className="flex-item-footer-link">Contact Us</div>
              </Link>

              <div className="flex-item-footer-link">FAQ</div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-12 col-sm-12"
            style={{ marginBottom: '8px' }}
          >
            <div className="flex-container-footer-link">
              <div
                className="flex-item-footer-link1"
                style={{ fontWeight: 'bold', marginTop: '22px' }}
              >
                Contact Us
              </div>

              <p>Email:khanmashrur03@gmail.com</p>
              <p>Phone : +01952500489, +01521330995</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
