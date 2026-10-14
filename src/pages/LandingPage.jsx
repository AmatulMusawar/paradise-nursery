import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage({ dimmed = false }) {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (dimmed) section.setAttribute('inert', '');
    else section.removeAttribute('inert');
  }, [dimmed]);

  return (
    <section
      ref={sectionRef}
      className={`landing${dimmed ? ' landing-dimmed' : ''}`}
      aria-hidden={dimmed || undefined}
    >
      <div className="landing-overlay" />
      <div className="landing-content">
        <div className="landing-intro">
          <h1>
            <span>Welcome To</span>
            Paradise Nursery
          </h1>
          <hr className="landing-rule" />
          <p className="landing-tagline">Where Green Meets Serenity</p>
          <button
            type="button"
            className="btn get-started"
            tabIndex={dimmed ? -1 : 0}
            onClick={() => navigate('/plants')}
          >
            Get Started
          </button>
        </div>

        <div className="landing-copy">
          <p className="landing-lead">
            Welcome to Paradise Nursery, where green meets serenity!
          </p>
          <p>
            At Paradise Nursery, we are passionate about bringing nature closer
            to you. Our mission is to provide a wide range of high-quality
            plants that not only enhance the beauty of your surroundings but
            also contribute to a healthier and more sustainable lifestyle. From
            air-purifying plants to aromatic fragrant ones, we have something
            for every plant enthusiast.
          </p>
          <p>
            Our team of experts is dedicated to ensuring that each plant meets
            our strict standards of quality and care. Whether you're a seasoned
            gardener or just starting your green journey, we're here to support
            you every step of the way. Feel free to explore our collection, ask
            questions, and let us help you find the perfect plant for your home
            or office.
          </p>
          <p>
            Join us in our mission to create a greener, healthier world. Visit
            Paradise Nursery today and experience the beauty of nature right at
            your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
}
