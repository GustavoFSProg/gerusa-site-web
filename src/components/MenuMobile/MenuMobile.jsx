import { Link } from "react-router-dom"




function MenuMobile() {

  return (
    <>

      <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
        <Link to="/" style={{ color: '#213547' }}>
          <span style={{ color: '#213547' }} >
            HOME
          </span>
        </Link>
      </span>

      <span style={{ marginBottom: '10px', cursor: 'pointer' }}>

        <Link to="/somos" style={{ color: '#213547' }}>

          <span style={{ color: '#213547' }}>
            QUEM SOU
          </span>
        </Link>
      </span>

      <span style={{ marginBottom: '10px', cursor: 'pointer' }}>
        <Link to="/traduction" style={{ color: '#213547' }}>

          <span style={{ color: '#213547' }}>
            SERVIÇO DE TRADUÇÃO
          </span>
        </Link>

      </span>


      <span style={{ marginBottom: '10px', cursor: 'pointer' }}>BLOG</span>

      <span style={{ marginBottom: '10px', cursor: 'pointer' }}>CLIENTES</span>

      <span style={{ marginBottom: '10px', cursor: 'pointer' }}>CONTATO</span>

    </>
  )
}

export default MenuMobile

