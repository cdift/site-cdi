import Header from "../../components/Header";
import "./style.css";
import CardEvento from "../../components/CardEvento";
import pinguim from "/assets/images/Pinguim.jpeg";
import CardCarousel from "../../components/CardCarousel";
import Footer from "../../components/Footer";

const Eventos = () => {
  const photos = [
    '/assets/images/eventos/067444c5-4d45-46b0-a4af-8e1e6ca94c45.jpg',
    '/assets/images/eventos/20250522_220936.jpg',
    '/assets/images/eventos/DSC03522.JPG',
    '/assets/images/eventos/DSC03533.JPG',
    '/assets/images/eventos/IMG_5436.JPG',
    '/assets/images/eventos/IMG_8333.JPG',
    '/assets/images/eventos/IMG_8674.JPG',
    '/assets/images/eventos/IMG_8681.JPG',
    '/assets/images/eventos/IMG_8685.JPG',
    '/assets/images/eventos/IMG_9176.JPG',
    '/assets/images/eventos/IMG_9185.JPG',
    '/assets/images/eventos/IMG_9204.JPG',
    '/assets/images/eventos/IMG_9502.JPG',
    '/assets/images/eventos/IMG-20230615-WA0152.jpg',
    '/assets/images/eventos/IMG-20230615-WA0155.jpg',
    '/assets/images/eventos/IMG-20230615-WA0156.jpg',
    '/assets/images/eventos/IMG-20230615-WA0161.jpg',
    '/assets/images/eventos/IMG-20230816-WA0050.jpg',
    '/assets/images/eventos/IMG-20230816-WA0053.jpg',
    '/assets/images/eventos/IMG-20230816-WA0057.jpg',
    '/assets/images/eventos/IMG-20231130-WA0071.jpg',
  ];

  const eventos = [
    // {
    //   id: 0,
    //   nomeEvento: "",
    //   data: "",
    //   hora: "",
    //   descricao: "",
    //   imageUrl: "",
    //   local: ""
    // },
    // {
    //   id: 1,
    //   nomeEvento: "",
    //   data: "",
    //   hora: "",
    //   descricao: "",
    //   imageUrl: "",
    //   local: ""
    // }
  ]

  return (
    <>
      <Header
        title="Eventos"
        content="Fique por dentro dos principais eventos da FT!"
      />

      <div className="container-eventos">
        <h2 className="tittle text-center mb-3 titles-h2">
          Eventos já realizados
        </h2>
        <p>
          O CDI é campeão em proporcionar experiências ÚNICAS e TRANSFORMADORAS.
          Acreditamos no poder da vivência a cima de tudo e por isso sempre nos
          preocupamos em preparar atividades imersivas aos alunos.
        </p>
        <div id="carousel-eventos">
          <CardCarousel photos={photos}></CardCarousel>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row justify-content-center">
          <div className="col-9">
            <div className="pinguim-container d-flex justify-content-end">
              <img src={pinguim} width={"200"}></img>
            </div>
          </div>
        </div>
          <div className="eventContent">
            <h2 className="tittle text-center titles-h2">Mural de Eventos</h2>
            <p className="text-center">
              Acompanhe o nosso mural para ficar por dentro dos próximos eventos
              que ocorrerão:
            </p>
            <div className="event-cards">
              {(eventos.length > 0) ? eventos.map((evento) => (
                <CardEvento
                  nomeEvento={evento.nomeEvento}
                  data={evento.data}
                  hora={evento.hora}
                  imageUrl={evento.imageUrl}
                  descricao={evento.descricao}
                  local={evento.local}
                  key={evento.id}
                ></CardEvento>
              )) : <h2>Não há eventos no momento</h2>}
            </div>
          </div>
        </div>
      <Footer></Footer>
    </>
  );
};

export default Eventos;
