const CTASection = () => {
    return (
      <section style={{ padding: '3rem', backgroundColor: '#4caf50', color: 'white', textAlign: 'center' }}>
        <h2>Ready to Join Us?</h2>
        <p>Shape your future by becoming part of our vibrant school community.</p>
        <div style={{ marginTop: '1rem' }}>
          <a
            href="/admissions"
            style={{
              backgroundColor: 'white',
              color: '#4caf50',
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              margin: '0 10px',
            }}
          >
            Enroll Now
          </a>
          <a
            href="/contact"
            style={{
              border: '2px solid white',
              padding: '10px 20px',
              textDecoration: 'none',
              color: 'white',
              borderRadius: '5px',
              fontWeight: 'bold',
            }}
          >
            Contact Us
          </a>
        </div>
      </section>
    );
  };
  
  export default CTASection;
  