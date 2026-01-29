import Header from "../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CardCarousel from "../../components/CardCarousel";
import Button from "../../components/Button";
import AvatarHome from "../../components/AvatarHome";
import Footer from "../../components/Footer";
import imagemBSI from "/assets/images/imagemBSI.png";
import imagemTADS from "/assets/images/imagemTADS.png";
import checkIcon from "/assets/icons/checkIcon.svg";
import "./style.css";
import "./media.css";

const Home = () => {
  const imagensCarrossel = [
    '/assets/images/carrossel/IMG_0680.jpg',
    '/assets/images/carrossel/IMG_8333.JPG',
    '/assets/images/carrossel/IMG_8359.jpg',
    '/assets/images/carrossel/IMG-20230615-WA0152.jpg',
    '/assets/images/carrossel/IMG-20230615-WA0155.jpg',
    '/assets/images/carrossel/IMG-20230615-WA0161.jpg',
    '/assets/images/carrossel/IMG-20230629-WA0004.jpg',
    '/assets/images/carrossel/IMG-20230816-WA0053.jpg',
    '/assets/images/carrossel/IMG-20231005-WA00181.jpg',
    '/assets/images/carrossel/IMG-20231130-WA0071.jpg',
    '/assets/images/carrossel/IMG-20231130-WA0073.jpg',
    '/assets/images/carrossel/IMG-20231130-WA0074.jpg',
    '/assets/images/carrossel/IMG-20231130-WA00781.jpg',
    '/assets/images/carrossel/PHOTO-2024-08-15-19-43-12.jpg',
    '/assets/images/carrossel/PHOTO-2024-08-15-19-43-13 3.jpg',
    '/assets/images/carrossel/PHOTO-2024-08-15-19-43-19.jpg',
    '/assets/images/carrossel/PHOTO-2024-08-15-19-43-22 3.jpg',
    ];

const members = [
    {
      area: "Presidência",
      members: [
        {
          nome: "Leonardo Bonfá",
          avatarUrl: "/assets/images/membros/presidencia/leozão.jpg", isPresidente: true,
      
        },
        {
          nome: "Samuel Germiniani",
          avatarUrl: "/assets/images/membros/presidencia/samuel.jpeg",
          isVice: true,
        },
      ],
    },
    {
      area: "Assuntos Acadêmicos e Estudantis",
      members: [
        {
          nome: "Maria Eduarda Gomes",
          avatarUrl:
            "/assets/images/membros/assuntos_academicos/Duda.JPG",
            isPresidente: true,
        },
        {
          nome: "João Pedro Mamede",
          avatarUrl: "/assets/images/membros/assuntos_academicos/moskitao.jpeg",
        },

        {
          nome: "Phillipi Poloni",
          avatarUrl:
            "/assets/images/membros/assuntos_academicos/salsixa.jpg",
        }

      ],
    },
     {
      area: "Comunicação e Marketing",
      members: [
        {
          nome: "Daniel Matias",
          avatarUrl: "/assets/images/membros/marketing/daniel.jpeg",
          isPresidente: true,
        },
      ],
    },
    {
      area: "Eventos e Relações Externas",
      members: [
        {
          nome: "Raíssa Souza",
          avatarUrl:
            "/assets/images/membros/eventos/raissa souza.jpeg",
            isPresidente: true,
        },
        {
          nome: "Rafael Ozório",
          avatarUrl:
            "/assets/images/membros/eventos/rafael ozorio.jpeg",
        },
        
        {
          nome: "Thiago Yuiti",
          avatarUrl:
            "/assets/images/membros/eventos/Thiago.jpeg",
        },
        
      ],
    },
    {
      area: "Produtos",
      members: [
  
        {
          nome: "Adriano Kenzo Camargo",
          avatarUrl: "/assets/images/membros/produtos/adriano.jpeg",
          isPresidente: true,
        },
        {
          nome: "Isadora Celestino",
          avatarUrl: "/assets/images/membros/produtos/isadora celestino.jpeg",
        },
        {
          nome: "João Guilherme Fernandes",
          avatarUrl: "/assets/images/membros/produtos/joao guilherme.jpeg",
        },
      
      ],
    },
   
    {
      area: "Projetos",
      members: [
        {
          nome: "Gabriel Morais",
          avatarUrl: "/assets/images/membros/projetos/Gabriel-Morais.jpg",  
          isPresidente: true,
        },
        {
          nome: "Rafael Suetsugu",
          avatarUrl: "/assets/images/membros/projetos/Rafael-Suetsugu.JPG",  
          isVice: true,
        },
       {
          nome: "Erik Amorim",
          avatarUrl: "/assets/images/membros/projetos/Erik.jpeg",  
        },
        {
          nome: "Kaue Samuel Oliveira",
          avatarUrl: "/assets/images/membros/projetos/Kaue.jpeg",  
        },
        {
          nome: "Pedro Kenwa",
          avatarUrl: "/assets/images/membros/projetos/pedro kenwa.jpeg",  
        },
        
        
      ],
    },
    {
      area: "Recursos Humanos",
      members: [
        {
          nome: "Maria Luiza Tavares",
          avatarUrl: "/assets/images/membros/recursos_humanos/maria luiza.jpeg",  
          isPresidente: true,
        },
        {
          nome: "Maria Clara Muharem",
          avatarUrl:
            "/assets/images/membros/recursos_humanos/maria clara muharem.jpeg",
        },
      ],
    },
  ];

  return (
    <>
      <Header></Header>
      <div id="cdi">
        <h1 className="titles-h2">O que é o CDI?</h1>
        <p>
          Além de ser um canal oficial de comunicação entre os alunos e os
          docentes, organizamos uma série de eventos como: cursos, palestras e
          visitas técnicas em parceria com a comunidade e com empresas tech.
          <br></br>
          Nós trabalhamos para que sua jornada na Universidade seja aproveitada
          da melhor forma possível! Conte com o CDI durante seu ano letivo para
          tirar dúvidas e sugerir ideias.
        </p>
        <div id="conceitos">
          <div className="conceito">
            <h2>Missão</h2>
            <p>
              Apoiamos a comunidade de T.I. da FT e desenvolvemos os membros da
              comissão para que suas jornadas acadêmicas sejam as mais
              enriquecedoras.
            </p>
          </div>
          <div className="conceito">
            <h2>Visão</h2>
            <p>
              Até 2026, pretendemos aumentar em 50% nosso impacto na comunidade
              de T.I.
            </p>
          </div>
          <div className="conceito">
            <h2>Valores</h2>
            <p id="lista-valores">
              <span>
                <img src={checkIcon} alt="icone de check" /> Comprometimento
              </span>
              <span>
                <img src={checkIcon} alt="icone de check" /> Empatia
              </span>
              <span>
                <img src={checkIcon} alt="icone de check" /> Transparência
              </span>
            </p>
          </div>
        </div>
        <div id="carousel">
          <CardCarousel photos={imagensCarrossel}></CardCarousel>
        </div>
      </div>

      <div id="cursos">
        <h1 className="titles-h2">Cursos de tecnologia</h1>

        <div id="bsi">
          <img src={imagemBSI} alt="imagem BSI" className="imagem-curso" />
          <div className="conteudo-curso">
            <div className="curso_texto">
              <h2>Bacharelado em Sistemas de Informação</h2>
              <p>
                O curso de S.I possui um papel fundamental em um mundo que
                viabiliza a rapidez da informação pois a compreensão dos
                sistemas informacionais é de extrema importância. O profissional
                qualificado pela área desenvolve duas principais habilidades:
                projetar e implantar os sistemas que integram o mundo digital.
              </p>
              <div className="detalhes-curso">
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Período: Integral
                </p>
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Carga horária
                  estimada: 3.060 horas
                </p>
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Integralização:
                  08 semestres
                </p>
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Vagas: 45
                </p>
              </div>
            </div>
            <div className="botao">
              <Button
                buttonText={"Acesse o currículo pleno"}
                width={200}
                fontSize={14}
                link={
                  "https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2024/cursos/94g/curriculo.html"
                }
                option={1}
              />
            </div>
          </div>
        </div>

        <div id="tads">
          <div className="conteudo-curso">
            <div className="curso_texto">
              <h2>Tecnologia em Análise e Desenvolvimento de Sistemas</h2>
              <p>
                O curso de T.A.D.S, têm como intuito formar profissionais com
                uma base sólida, de modo ao qual seja prático aplicar os
                conhecimentos teóricos na intensa vivência prática que o mundo
                da tecnologia proporciona.
              </p>
              <div className="detalhes-curso">
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Período: Noturno
                </p>
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Carga horária
                  estimada: 2.430 horas
                </p>
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Integralização:
                  07 semestres
                </p>
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Vagas: 45
                </p>
              </div>
            </div>
            <div className="botao">
              <Button
                buttonText={"Acesse o currículo pleno"}
                width={200}
                fontSize={14}
                link={
                  "https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2024/cursos/36t/curriculo.html"
                }
                option={1}
              />
            </div>
          </div>
          <img src={imagemTADS} alt="imagem TADS" className="imagem-curso" />
        </div>
      </div>

      <div id="equipe">
        <h1 className="titles-h2">Conheça nossos membros!</h1>

        <div className="areas">
          {
            // Renderiza cada área e seus membros
            members.map((area) => (
              <div className="area" key={area.area}>
                <div className="area-title">
                  <h2>{area.area}</h2>
                </div>
                <div className="area-members">
                  {area.members.map((member) => (
                    <div className={`membro ${member.isPresidente ? 'membro-presidente' : ''} ${member.isVice ? 'membro-vice' : ''}`} key={member.nome}>
                      <AvatarHome
                        src={member.avatarUrl}
                        alt={"Membro da CDI " + member.nome}
                        nome={member.nome}
                      ></AvatarHome>
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
