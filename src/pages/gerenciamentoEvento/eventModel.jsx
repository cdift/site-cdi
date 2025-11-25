import "./style.css"
import React, { useState } from 'react';
// --- Ícones Adicionais (Lixeira e Lápis) ---
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
);
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
);
const CalendarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0000FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>);
const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0000FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>);
const PinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0000FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>);



const EventModal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* stopPropagation evita que clicar no card feche o modal */}
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Cabeçalho com Imagem e Botões Flutuantes */}
        <div className="modal-header-image">
            <button className="float-btn btn-delete">
                <TrashIcon />
            </button>
            <button className="float-btn btn-edit">
                <EditIcon />
            </button>
        </div>

        {/* Corpo dividido */}
        <div className="modal-body">
            
            {/* Coluna da Esquerda: Texto */}
            <div className="modal-desc-col">
                <h2>{event.title}</h2>
                <p>
                    Lorem ipisilumlorem ipisilumlorem ipisilumlorem ipisilumlorem 
                    ipisilumlorem ipisilumlorem ipisilumlorem ipisilumlorem.
                    Aqui vai a descrição completa do evento selecionado.
                </p>
            </div>

            {/* Coluna da Direita: Detalhes com linha azul vertical */}
            <div className="modal-info-col">
                <div className="info-row">
                    <CalendarIcon />
                    <div>
                        <strong>Data:</strong> <br/> {event.date}
                    </div>
                </div>
                <div className="info-row">
                    <ClockIcon />
                    <div>
                        <strong>Horário:</strong> <br/> {event.time}
                    </div>
                </div>
                <div className="info-row">
                    <PinIcon />
                    <div>
                        <strong>Local:</strong> <br/> {event.location}
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default EventModal;