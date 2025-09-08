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
          nome: "Duda Gomes",
          avatarUrl: "/assets/images/membros/presidencia/duda.jpeg", isPresidente: true,
      
        },
        {
          nome: "Filé",
          avatarUrl: "/assets/images/membros/presidencia/file.jpg",
        },
      ],
    },
    {
      area: "Assuntos Acadêmicos",
      members: [
        {
          nome: "Phillipi Poloni",
          avatarUrl:
            "/assets/images/membros/assuntos_academicos/salsixa.jpg",
            isPresidente: true,
        },
        {
          nome: "Moskitao",
          avatarUrl: "/assets/images/membros/assuntos_academicos/moskitao.jpeg",
        },
        {
          nome: "Sean Torres",
          avatarUrl:
            "/assets/images/membros/assuntos_academicos/sean.jpeg",
        },
        {
          nome: "Gabriela",
          avatarUrl:
            "/assets/images/membros/assuntos_academicos/gabriela.jpeg",
        },
        {
          nome: "Samuel",
          avatarUrl:
            "/assets/images/membros/assuntos_academicos/samuel.jpeg",
        },
        {
          nome: "Thiago",
          avatarUrl:
            "/assets/images/membros/assuntos_academicos/thiago.jpeg",
        },
      ],
    },
    {
      area: "Eventos",
      members: [
        {
          nome: "Leonardo Bonfá",
          avatarUrl: "/assets/images/membros/eventos/leo.jpg",
          isPresidente: true,
        },
        {
          nome: "Lucas de Oliveira",
          avatarUrl:
            "/assets/images/membros/eventos/lucas.png",
        },
        {
          nome: "Gabriel Sorensen",
          avatarUrl:
            "/assets/images/membros/eventos/gabriel.jpeg",
        },
        {
          nome: "João Pedro Calsavara",
          avatarUrl:
            "/assets/images/membros/eventos/joao.jpeg",
        },
        {
          nome: "Felipe Amadio",
          avatarUrl:
            "/assets/images/membros/eventos/felipe amadio.jpeg",
        },
        {
          nome: "Gabs",
          avatarUrl:
            "/assets/images/membros/eventos/gabs.jpeg",
        },
        {
          nome: "Rafael Ozorio",
          avatarUrl:
            "/assets/images/membros/eventos/rafael ozorio.jpeg",
        },
        {
          nome: "Raissa Souza",
          avatarUrl:
            "/assets/images/membros/eventos/raissa souza.jpeg",
        },
      ],
    },
    {
      area: "Finanças",
      members: [
        {
          nome: "Marcos",
          avatarUrl: "/assets/images/membros/financas/Marcos.jpg",
          isPresidente: true,
        },
        {
          nome: "Beatriz Galvao",
          avatarUrl: "/assets/images/membros/financas/beatriz.jpeg",
        },
        {
          nome: "Nathália",
          avatarUrl: "/assets/images/membros/financas/nathalia.png",
        },
        {
          nome: "Adriano",
          avatarUrl: "/assets/images/membros/financas/adriano.jpeg",
        },
        {
          nome: "Isadora Celestino",
          avatarUrl: "/assets/images/membros/financas/isadora celestino.jpeg",
        },
        {
          nome: "João Guilherme",
          avatarUrl: "/assets/images/membros/financas/joao guilherme.jpeg",
        },
        {
          nome: "João Paulo",
          avatarUrl: "/assets/images/membros/financas/joao paulo.jpg",
        },
        {
          nome: "Maria Clara Paulini",
          avatarUrl: "/assets/images/membros/financas/maria clara paulini.jpeg",
        },
      ],
    },
    {
      area: "Recursos Humanos",
      members: [
        {
          nome: "Laura",
          avatarUrl:
            "/assets/images/membros/recursos_humanos/laura.jpg",
            isPresidente: true,
        },
        {
          nome: "Daniel Rosell",
          avatarUrl: "/assets/images/membros/recursos_humanos/daniel.jpg",
        },
        {
          nome: "Samuel Rodrigues",
          avatarUrl:
            "/assets/images/membros/recursos_humanos/samuel.png",
        },
        {
          nome: "Matheus Vitorio",
          avatarUrl:
            "/assets/images/membros/recursos_humanos/matheus vitorio.jpeg",
        },
        {
          nome: "Augusto Carneiro",
          avatarUrl:
            "/assets/images/membros/recursos_humanos/augusto carneiro.jpeg",
        },
        {
          nome: "Henrique",
          avatarUrl:
            "/assets/images/membros/recursos_humanos/henrique.jpeg",
        },
        {
          nome: "Maria Clara Muharem",
          avatarUrl:
            "/assets/images/membros/recursos_humanos/maria clara muharem.jpeg",
        },
      ],
    },
    {
      area: "Marketing",
      members: [
        {
          nome: "Lucas Mota",
          avatarUrl: "/assets/images/membros/marketing/baianinho.jpg",
          isPresidente: true,
        },
        {
          nome: "Bruno Corrêa",
          avatarUrl:
            "/assets/images/membros/marketing/bruno.jpg",
        },
        {
          nome: "Gabriel Romualdo",
          avatarUrl:
            "/assets/images/membros/marketing/gabriel.jpg",
        },
        {
          nome: "Marcelo dos Santos",
          avatarUrl:
            "/assets/images/membros/marketing/marcelo.png",
        },
        {
          nome: "Daniel",
          avatarUrl:
            "/assets/images/membros/marketing/daniel.jpeg",
        },
        {
          nome: "Maria Luiza",
          avatarUrl:
            "/assets/images/membros/marketing/maria luiza.jpeg",
        },
        {
          nome: "Nicolas",
          avatarUrl:
            "/assets/images/membros/marketing/nicolas.jpeg",
        },
        {
          nome: "Renan",
          avatarUrl:
            "/assets/images/membros/marketing/renan.jpeg",
        },
        {
          nome: "Wesley",
          avatarUrl:
            "/assets/images/membros/marketing/wesley.jpeg",
        },
      ],
    },
    {
      area: "Projetos",
      members: [
        {
          nome: "Raissa",
          avatarUrl: "/assets/images/membros/projetos/raissa.png",
          isPresidente: true,
        },
        {
          nome: "Guilherme Ramalho",
          avatarUrl: "/assets/images/membros/projetos/guilherme.jpeg"
        },
        {
          nome: "Davie Schimidt",
          avatarUrl: "/assets/images/membros/projetos/davie.png",
        },
        {
          nome: "Rafael Suetsugu",
          avatarUrl: "/assets/images/membros/projetos/Rafael-Suetsugu.JPG",  
        },
        {
          nome: "Gabriel Morais",
          avatarUrl: "/assets/images/membros/projetos/Gabriel-Morais.jpg",  
        },
        {
          nome: "Pedro Kenwa",
          avatarUrl: "/assets/images/membros/projetos/pedro kenwa.jpeg",  
        },
        {
          nome: "Isadora Viveiros",
          avatarUrl: "/assets/images/membros/projetos/isadora viveiros.jpeg",  
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
                    <div
      className={`membro ${member.isPresidente ? 'membro-presidente' : ''}`}
      key={member.nome}
    >
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
