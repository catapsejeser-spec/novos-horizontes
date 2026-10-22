
import { useState } from 'react'
import './App.css'



const areas = [
  {
    id: 'administracao',
    nome: 'Administração e Serviços',
    icone: '▤',
    cursos: [
      'Contabilidade e Gestão',
      'Gestão Empresarial',
      'Informática e Gestão',
      'Gestão de Recursos Humanos',
    ],
    emBreve: [],
  },
  {
    id: 'saude',
    nome: 'Saúde',
    icone: '♡',
    cursos: [
      'Fisioterapia',
      'Farmácia',
      'Enfermagem',
      'Análises Clínicas',
      'Estomatologia',
    ],
    emBreve: [],
  },
  {
    id: 'mecanica',
    nome: 'Mecânica',
    icone: '⚙',
    cursos: [
      'Máquinas e Motores',
      'Frio e Climatização',
    ],
    emBreve: [
      'Técnico de Mecatrónica',
      'Técnico de Electromecânica',
      'Técnico de Produção de Metalomecânica',
      'Técnico de Mecatrónica Automóvel',
      'Mecânica Auto',
    ],
  },
  {
    id: 'informatica',
    nome: 'Informática',
    icone: '▦',
    cursos: [
      'Técnico de Informática',
      'Gestão de Sistemas Informáticos',
    ],
    emBreve: [],
  },
  {
    id: 'construcao',
    nome: 'Construção Civil',
    icone: '◇',
    cursos: [
      'Desenhador Projetista',
    ],
    emBreve: [
      'Técnico de Obras de Construção Civil',
    ],
  },
  {
    id: 'electricidade',
    nome: 'Electricidade e Telecomunicações',
    icone: 'ϟ',
    cursos: [
      'Electrónica e Telecomunicações',
      'Energia e Instalações Eléctricas',
    ],
    emBreve: [
      'Técnico de Eletrónica Industrial e Automação',
      'Técnico de Energias Renováveis',
      'Electricidade de Baixa Tensão',
    ],
  },
  {
    id: 'quimica',
    nome: 'Química',
    icone: '⚛',
    cursos: [],
    emBreve: [
      'Técnico de Ambiente e Controlo da Qualidade',
      'Técnico de Bioquímica',
      'Técnico de Química Industrial',
      'Técnico de Petroquímica',
      'Técnico de Técnicas de Laboratório',
    ],
  },
]



const propinas = [
  { classe: '10.ª Classe', polo1: '13.500 Kz', polo2: '20.000 Kz' },
  { classe: '11.ª Classe', polo1: '14.500 Kz', polo2: '21.500 Kz' },
  { classe: '12.ª Classe', polo1: '15.500 Kz', polo2: '23.000 Kz' },
  { classe: '13.ª Classe', polo1: '16.500 Kz', polo2: '25.000 Kz' },
]

const documentos = [
  'Cartão de vacina',
  'Certificado da 9.ª classe',
  'Atestado médico',
  '2 fotografias tipo passe',
  'Cópia do Bilhete de Identidade',
]

function App() {
  const [areasAbertas, setAreasAbertas] = useState([])
  return (
    <>
      


<header className="site-header">
  <a className="brand" href="#inicio" aria-label="Página inicial">
    <img
      className="brand-logo"
      src="/images/logo-novos-horizontes.png"
      alt="Logótipo do Instituto Novos Horizontes"
    />
    <span className="brand-name">
      <small>INSTITUTO POLITÉCNICO PRIVADO</small>
      <strong>Novos Horizontes</strong>
    </span>
  </a>

  <nav className="main-nav" aria-label="Navegação principal">
    <a className="nav-active" href="#inicio">Início</a>
    <a href="#instituto">O Instituto</a>
    <a href="#cursos">Cursos</a>
    <a href="#matriculas">Admissões e Matrículas</a>
    <a href="#noticias">Notícias</a>
    <a href="#contactos">Contactos</a>
  </nav>

  <a className="header-cta" href="#matriculas">Pré-inscrição</a>
</header>

<section className="hero hero-home" id="inicio">
  <div className="hero-content">
    <span className="hero-label">
      ENSINO TÉCNICO-PROFISSIONAL · TALATONA
    </span>

    <h1>
      Novos <em></em>
      <br />
      <em>Horizontes.</em>
    </h1>

    <p>
      No Instituto Politécnico Privado Novos Horizontes formamos
      técnicos preparados para os desafios de Angola, com uma
      formação que une conhecimento e prática.
    </p>

    <div className="hero-actions">
      <a className="button button-primary" href="#cursos">
        Conheça os cursos <span>→</span>
      </a>
      <a className="button button-outline hero-outline" href="#matriculas">
        Informações de matrícula
      </a>
    </div>
  </div>

  <div className="hero-visual">
    <div className="hero-image-frame">
      <img
        src="/images/fachada-escola.jpg"
        alt="Instalações do Instituto Politécnico Privado Novos Horizontes"
      />
    </div>
  </div>
</section>




<main>    

 {/* PÁGINA O INSTITUTO */}
  <section id="instituto" className="institution-page">
    <div className="institution-hero">
      <span className="institution-eyebrow">O INSTITUTO</span>

      <h1>
        Uma escola técnica comprometida
        <br />
        com o futuro
      </h1>

      <p>
        Instituto Politécnico Privado Novos Horizontes – Talatona,
        Luanda, Angola. <em>“A educação é um tesouro.”</em>
      </p>
    </div>

    <div className="institution-content">
      <div className="mission-grid">
        <article className="mission-card">
          <h2>Missão</h2>
          <p>
            Formar quadros técnicos de excelência, ética e competência profissional, 
            capazes de responder às exigências do mercado nacional e internacional, contribuindo
            de forma sustentável para o desenvolvimento da nossa sociedade através de uma educação de qualidade.
          </p>
        </article>

        <article className="mission-card">
          <h2>Visão</h2>
          <p>
            Ser uma instituição de ensino médio politécnico de referência a nível nacional 
            e internacional, reconhecida pela qualidade do ensino, inovação pedagógica
          e impacto positivo na formação de profissionais altamente qualificados.
          </p>
        </article>

        <article className="mission-card">
          <h2>Valores</h2>
          <p>
           Excelência : Compromisso com elevados padrões de qualidade no ensino e na formação técnica.
           Ética e Responsabilidade : Atuação baseada em princípios morais, respeito e responsabilidade social.
           Inovação : Adoção contínua de metodologias modernas e soluções pedagógicas inovadoras.
           Compromisso com o Aluno : Foco no desenvolvimento académico, profissional e humano dos estudantes.
           Inclusão e Cidadania : Promoção da igualdade de oportunidades e do respeito pela diversidade.
           Parceria com o Mercado : Alinhamento da formação com as necessidades reais do mercado de trabalho.
          </p>
        </article>
      </div>

      <section className="values-section">
        <span className="institution-eyebrow">VALORES</span>
        <h2>O que nos orienta</h2>

        <div className="values-grid">
          <article className="value-card">
            <strong>01</strong>
            <h3>Excelência</h3>
            <p>Compromisso com um ensino rigoroso e de qualidade.</p>
          </article>

          <article className="value-card">
            <strong>02</strong>
            <h3>Prática</h3>
            <p>Formação orientada para competências aplicadas ao mercado de trabalho.</p>
          </article>

          <article className="value-card">
            <strong>03</strong>
            <h3>Integridade</h3>
            <p>Ética, respeito e responsabilidade em toda a comunidade escolar.</p>
          </article>

          <article className="value-card">
            <strong>04</strong>
            <h3>Futuro</h3>
            <p>Preparar jovens para novos horizontes profissionais e pessoais.</p>
          </article>
        </div>
      </section>

      <section className="campuses-section">
        <span className="institution-eyebrow">ONDE ESTAMOS</span>
        <h2>Polo I e Polo II</h2>

        <p className="campuses-intro">
          As moradas e os contactos de cada polo serão publicados após confirmação.
        </p>

        <div className="campuses-grid">
          <article className="campus-card">
            <h3>Polo I</h3>
            <p>Morada: Estamos localizados no talatona por detras do Projecto Nova Vida, Bairro Dangereux, Junto a Praça da Alegria.</p>
          </article>

          <article className="campus-card">
            <h3>Polo II</h3>
            <p>Morada: Estamos localizados no talatona por detras do Projecto Nova Vida, Bairro Dangereux, entrada do salão de festas Mamamia.</p>
          </article>
        </div>
      </section>
    </div>
  </section>

  {/* A SECÇÃO DE CURSOS EXISTENTE CONTINUA AQUI */}

<section className="courses-section section" id="cursos">
  <div className="section-heading">
    <span className="eyebrow">A NOSSA OFERTA FORMATIVA</span>
    <h2>Áreas de Formação</h2>
    <p>
      Descobre as áreas de formação e os cursos disponíveis
      no Instituto Politécnico Privado Novos Horizontes.
    </p>
  </div>

  <div className="courses-notice">
    <span aria-hidden="true">ⓘ</span>
    A oferta formativa e a disponibilidade de cada curso devem
    ser confirmadas junto da secretaria.
  </div>

  <div className="area-grid">
    
{areas.map((area) => {
  const aberta = areasAbertas.includes(area.id)
  const todosOsCursos = [
    ...area.cursos.map((nome) => ({
      nome,
      futuro: false,
    })),
    ...area.emBreve.map((nome) => ({
      nome,
      futuro: true,
    })),
  ]

  const cursosVisiveis = aberta
    ? todosOsCursos
    : todosOsCursos.slice(0, 3)

  const restantes = todosOsCursos.length - cursosVisiveis.length

  return (
    <article className="area-card" key={area.id}>
      <div className="area-icon" aria-hidden="true">
        {area.icone}
      </div>

      <h3>{area.nome}</h3>

      {area.cursos.length === 0 && (
        <span className="availability-badge">
          Brevemente disponíveis
        </span>
      )}

      <ul className="area-courses">
        {cursosVisiveis.map((curso) => (
          <li
            key={curso.nome}
            className={curso.futuro ? 'course-coming-soon' : ''}
          >
            <span>{curso.nome}</span>
            {curso.futuro && (
              <small>Brevemente disponíveis</small>
            )}
          </li>
        ))}
      </ul>

      {restantes > 0 && (
        <p className="more-courses">+{restantes} curso(s)</p>
      )}

      {todosOsCursos.length > 3 && (
        <button
          className="area-link"
          type="button"
          aria-expanded={aberta}
          onClick={() =>
            setAreasAbertas((anteriores) =>
              aberta
                ? anteriores.filter((id) => id !== area.id)
                : [...anteriores, area.id]
            )
          }
        >
          {aberta ? 'Ver menos ↑' : 'Ver área →'}
        </button>
      )}
    </article>
  )
})}

  </div>

  <p className="future-courses">
    <strong>Novas formações:</strong> outros cursos poderão ser
    anunciados brevemente, após confirmação oficial do instituto.
  </p>
</section>


        <section className="fees-section section" id="propinas">
          <div className="section-heading">
            <span className="eyebrow">INFORMAÇÕES FINANCEIRAS</span>
            <h2>Propinas 2026/2027</h2>
            <p>Consulta os valores mensais por classe e por polo.</p>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Classe</th>
                  <th>Polo I</th>
                  <th>Polo II</th>
                </tr>
              </thead>
              <tbody>
                {propinas.map((item) => (
                  <tr key={item.classe}>
                    <td>{item.classe}</td>
                    <td>{item.polo1}</td>
                    <td>{item.polo2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="fees-details">
            <article>
              <h3>Taxas de matrícula e confirmação</h3>
              <p><span>Matrícula — Polo I</span><strong>12.000 Kz</strong></p>
              <p><span>Matrícula — Polo II</span><strong>15.000 Kz</strong></p>
              <p><span>Confirmação — Polo I</span><strong>11.500 Kz</strong></p>
              <p><span>Confirmação — Polo II</span><strong>14.000 Kz</strong></p>
            </article>
            <article>
              <h3>Cartões</h3>
              <p><span>Cartão de estudante</span><strong>3.000 Kz</strong></p>
              <p><span>Cartão de propina — Polo I</span><strong>3.000 Kz</strong></p>
              <p><span>Cartão de propina — Polo II</span><strong>3.500 Kz</strong></p>
            </article>
          </div>
          <p className="fees-warning">
            Atenção: confirma os valores e os procedimentos de pagamento
            directamente com a secretaria antes de efectuar qualquer pagamento.
          </p>
        </section>

        <section className="enrollment-section section" id="matriculas">
          <div className="enrollment-intro">
            <span className="eyebrow">PREPARA A TUA INSCRIÇÃO</span>
            <h2>Documentos necessários</h2>
            <p>Organiza os documentos antes de te dirigires à secretaria.</p>
          </div>
          <ul className="document-list">
            {documentos.map((documento) => (
              <li key={documento}>
                <span className="check-mark">✓</span>
                {documento}
              </li>
            ))}
          </ul>
          <a
            className="button button-primary"
            href="#contactos"
          >
            Contactar a secretaria
          </a>
        </section>

        <section className="contact-section section" id="contactos">
          <div className="section-heading">
            <span className="eyebrow">ESTAMOS DISPONÍVEIS</span>
            <h2>Fala connosco.</h2>
            <p>Contacta o instituto para esclarecer as tuas dúvidas.</p>
          </div>

          <div className="contact-grid">
            <article className="contact-card">
              <span className="contact-icon">☎</span>
              <h3>Telefone</h3>
              <a href="tel:+244921296545">+244 921 296 545</a>
              <a href="tel:+244957919179">+244 957 919 179</a>
            </article>
            <article className="contact-card">
              <span className="contact-icon">⌖</span>
              <h3>Localização</h3>
              <p>Bairro Dangereux, Talatona, Luanda, Angola.</p>
              <p className="small-note">
                Confirma com a secretaria a morada exacta antes da visita.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#inicio">
          Instituto Politécnico Privado Novos Horizontes
        </a>
        <p>A educação é um tesouro.</p>
        <p>© {new Date().getFullYear()} Instituto Novos Horizontes.</p>

        
<div className="social-links">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook do Instituto"
  >
    Facebook
  </a>

  <a
    href="https://wa.me/244921296545"
    target="_blank"
    rel="noreferrer"
    aria-label="Contactar o Instituto pelo WhatsApp"
  >
    WhatsApp — Secretaria
  </a>
</div>
    

      </footer>
    </>
  )
}

export default App

