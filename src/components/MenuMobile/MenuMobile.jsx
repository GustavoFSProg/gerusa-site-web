import { Link } from 'react-router-dom'

function MenuMobile() {
  return (
    <>
      <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
        <Link to="/" style={{ color: '#213547' }}>
          <span style={{ color: '#213547' }}>HOME</span>
        </Link>
      </span>

      <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
        <Link to="/somos" style={{ color: '#213547' }}>
          <span style={{ color: '#213547' }}>QUEM SOU</span>
        </Link>
      </span>

      <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
        <Link to="/traduction" style={{ color: '#213547' }}>
          <span style={{ color: '#213547' }}>SERVIÇO DE TRADUÇÃO</span>
        </Link>
      </span>

      <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
        <Link to="/postsList" style={{ color: '#213547' }}>
          <span style={{ color: '#213547' }}>BLOG</span>
        </Link>
      </span>
      <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
        <Link to="/login" style={{ color: '#213547' }}>
          <span style={{ color: '#213547' }}>ADMIN</span>
        </Link>
      </span>
    </>
  )
}

export default MenuMobile
