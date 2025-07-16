import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaEnvelope, FaHeart } from 'react-icons/fa';

function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth' // For a smooth animated scroll
          // behavior: 'auto' // For an instant jump
        });
      };
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center align-items-center py-4">
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Coffee Census</h5>
            <p>Tracking Every Bean, Every Brew.</p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <div className="footer-links">
            <Button onClick={handleScrollToTop}>
                Scroll to Top
            </Button>
            </div>
          </Col>

          <Col md={4}>
            <div className="footer-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="mailto:info@blossomblocks.com"><FaEnvelope /></a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-3 small">
            <p>
              Made with <FaHeart style={{ color: 'var(--pink)' }} /> by Amy· © {new Date().getFullYear()} Coffee Census
            </p>
            <br></br>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;