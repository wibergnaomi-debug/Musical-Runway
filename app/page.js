import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:100,borderBottom:'1px solid #1e1e3a',background:'rgba(8,8,16,0.9)',backdropFilter:'blur(20px)',padding:'0 20px',height:'64px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'22px',color:'#ff3c5f',letterSpacing:'2px'}}>♬ MUSICAL RUNWAY</span>
        <div style={{display:'flex',gap:'8px'}}>
          <Link href="/vote" style={{padding:'8px 16px',borderRadius:'8px',fontSize:'14px',color:'#9090b0'}}>Votar</Link>
          <Link href="/upload" style={{padding:'9px 20px',borderRadius:'40px',background:'#ff3c5f',color:'#fff',fontSize:'13px',fontWeight:'500'}}>+ Subir canción</Link>
        </div>
      </nav>

      <section style={{minHeight:'90vh',display:'flex',alignItems:'center',paddingTop:'64px',background:'radial-gradient(ellipse 80% 60% at 50% 0%,rgba(255,60,95,0.12) 0%,transparent 70%)'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'80px 20px'}}>
          <div style={{display:'inline-block',padding:'4px 12px',borderRadius:'20px',background:'rgba(6,214,160,0.15)',color:'#06d6a0',border:'1px solid rgba(6,214,160,0.3)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:'24px'}}>
            🎙 La competencia musical real
          </div>
          <h1 style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(64px,10vw,120px)',lineHeight:0.92,color:'#fff',marginBottom:'28px'}}>
            MUSICAL<br/><span style={{color:'#ff3c5f'}}>RUNWAY</span>
          </h1>
          <p style={{fontSize:'18px',color:'#9090b0',maxWidth:'480px',lineHeight:1.7,marginBottom:'40px'}}>
            Sube tu canción, compite con el reto del episodio, y deja que el mundo decida si eres el mejor.{' '}
            <strong style={{color:'#e8e8f0'}}>Sin algoritmos. Sin IA. Solo música real.</strong>
          </p>
          <div style={{display:'flex',gap:'16px',flexWrap:'wrap'}}>
            <Link href="/upload" style={{padding:'14px 36px',borderRadius:'40px',background:'#ff3c5f',color:'#fff',fontSize:'15px',fontWeight:'500',boxShadow:'0 0 24px rgba(255,60,95,0.3)'}}>
              🎵 Subir mi canción
            </Link>
            <Link href="/vote" style={{padding:'14px 36px',borderRadius:'40px',background:'transparent',border:'1.5px solid #1e1e3a',color:'#e8e8f0',fontSize:'15px'}}>
              Escuchar y votar →
            </Link>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0',borderTop:'1px solid #1e1e3a'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 20px'}}>
          <h2 style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'48px',marginBottom:'48px',color:'#ffd166'}}>¿CÓMO FUNCIONA?</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'24px'}}>
            {[
              {n:'01',icon:'🎯',t:'El Reto',d:'Cada episodio tiene un tema, género y mood. Tienes que interpretar el reto con tu música.'},
              {n:'02',icon:'🎤',t:'Sube tu canción',d:'Sube tu track original. Confirmas que eres el dueño. Es tuya, siempre.'},
              {n:'03',icon:'👂',t:'El público escucha',d:'Cuando el episodio entra en votación, todos pueden escuchar y comparar.'},
              {n:'04',icon:'🏆',t:'Vota el ganador',d:'Un voto por persona por episodio. Gana la canción con más apoyo.'},
            ].map(s=>(
              <div key={s.n} style={{background:'#13132a',border:'1px solid #1e1e3a',borderRadius:'14px',padding:'28px'}}>
                <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'40px',color:'#1e1e3a',marginBottom:'12px'}}>{s.n}</div>
                <div style={{fontSize:'28px',marginBottom:'12px'}}>{s.icon}</div>
                <div style={{fontWeight:'600',fontSize:'16px',marginBottom:'8px'}}>{s.t}</div>
                <div style={{color:'#9090b0',fontSize:'14px',lineHeight:1.7}}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0',borderTop:'1px solid #1e1e3a',background:'#0e0e1c'}}>
        <div style={{maxWidth:'700px',margin:'0 auto',padding:'0 20px',textAlign:'center'}}>
          <div style={{fontSize:'40px',marginBottom:'20px'}}>🔒</div>
          <h2 style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'40px',marginBottom:'20px'}}>TU MÚSICA ES TUYA</h2>
          <p style={{color:'#9090b0',lineHeight:1.8,marginBottom:'24px'}}>
            Musical Runway nunca te quita los derechos de tu música. Solo pedimos permiso para{' '}
            <strong style={{color:'#e8e8f0'}}>mostrarla durante el episodio</strong>. Tú decides qué pasa después.
          </p>
          <Link href="/terms" style={{color:'#06d6a0',fontSize:'14px',borderBottom:'1px solid rgba(6,214,160,0.3)',paddingBottom:'2px'}}>
            Leer los Términos de Uso completos →
          </Link>
        </div>
      </section>

      <footer style={{borderTop:'1px solid #1e1e3a',padding:'32px 0',textAlign:'center'}}>
        <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'28px',marginBottom:'12px',color:'#ff3c5f'}}>MUSICAL RUNWAY</div>
        <div style={{color:'#3a3a5c',fontSize:'13px'}}>
          © 2025 Musical Runway · <Link href="/terms" style={{color:'#9090b0'}}>Términos de Uso</Link>
        </div>
      </footer>
    </main>
  )
              }
