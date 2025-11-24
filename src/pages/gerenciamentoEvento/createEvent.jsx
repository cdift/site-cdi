import "./style.css"

// Ícones SVG simples para não depender de bibliotecas externas
const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle><line x1="19" y1="8" x2="19" y2="5"></line><line x1="16" y1="5" x2="22" y2="5"></line></svg>
)


const CreateEvent = () => {
  return (
    <div className="registration-section">
      <h2 className="section-title">Cadastrar evento</h2>
      
      <div className="registration-card">
        {/* Lado Esquerdo: Formulário */}
        <div className="form-side">
          <input type="" placeholder="Nome do evento" className="input-line" />
          
          <textarea className="input-box" placeholder="Descrição (opcional)"></textarea>
          
          <div className="form-row">
            <label>Data:</label>
            <input type="date" className="input-line" />
          </div>
          
          <div className="form-row">
            <label>Horário:</label>
            <input type="time" className="input-line" />
          </div>
          
          <div className="form-row">
            <label>Local:</label>
            <input type="text" className="input-line" />
          </div>

          <button className="btn-confirm">Confirmar</button>
        </div>

        {/* Lado Direito: Upload de Imagem */}
        <div className="upload-side">
           <div style={{textAlign: 'center'}}>
              <CameraIcon />
           </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;