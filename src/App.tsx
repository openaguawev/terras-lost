import './index.css'

function App() {
  return (
    <div style={{ 
      background: '#070504', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <h1 style={{ 
        fontFamily: 'Cinzel, serif', 
        fontSize: '72px', 
        color: '#C9A84C',
        letterSpacing: '8px'
      }}>
        TERRA'S LOST
      </h1>
      <p style={{ 
        fontFamily: 'Bebas Neue, sans-serif', 
        fontSize: '14px', 
        color: 'rgba(201,168,76,0.4)',
        letterSpacing: '8px'
      }}>
        PREHISTORIC WORLD — EN CONSTRUCCIÓN
      </p>
    </div>
  )
}

export default App
