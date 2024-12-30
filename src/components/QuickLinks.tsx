"use client";

const QuickLinks = () => {
  const links = [
    { href: '/admissions', label: 'Admissions', icon: '📘' },
    { href: '/academics', label: 'Academics', icon: '📚' },
    { href: '/notices', label: 'Notices', icon: '📜' },
    { href: '/events', label: 'Events', icon: '🎉' },
  ];

  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Quick Links</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '150px',
              padding: '1rem',
              textDecoration: 'none',
              backgroundColor: '#f4f4f4',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{link.icon}</span>
            <span style={{ color: '#333', fontWeight: 'bold' }}>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
