import React, { useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CreateEvent from "./createEvent";
import EventCard from "./eventCard";
import EventModal from "./eventModel";
import "./style.css"

const PageEvent = () => { // <--- Componentes React devem começar com Maiúscula

  // Estado para controlar se o modal está aberto
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Estado para saber QUAL evento foi clicado
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { title: "Nome do grande evento", date: "XX/XX/XXXX", time: "XXhXX", location: "Rua X - Limeira-SP" },
    { title: "Nome do grande evento", date: "XX/XX/XXXX", time: "XXhXX", location: "Rua X - Limeira-SP" }
  ];

  // Função chamada ao clicar em "Saiba Mais"
  const handleOpenModal = (eventData) => {
    setSelectedEvent(eventData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <Header
        title="Gerenciamento do Evento"
        content="Vamos gerenciar alguns eventos para os alunos?"
      />

      <div className="container">
        {/* Seção 1: Cadastro */}
        <CreateEvent />

        {/* Seção 2: Lista */}
        <h2 className="section-title">Eventos disponíveis</h2>
        <div className="events-grid">
          {events.map((evt, index) => (
            <EventCard
              key={index}
              title={evt.title}
              date={evt.date}
              time={evt.time}
              location={evt.location}
              onOpenModal={handleOpenModal} 
            />
          ))}
        </div>
      </div>

      <EventModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        event={selectedEvent} 
      />

      <Footer />
    </>
  )
}

export default PageEvent;