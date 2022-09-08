import Contato from "./Componentes/Contato";
import Descricao from "./Componentes/Descricao";
import Header from "./Componentes/Header";
import Servicos from "./Componentes/Servicos";
import Tecnicos from "./Componentes/Tecnicos";
import Titulo from "./Componentes/Titulo";

function App() {

  const tecnicos = [
    {
      nome: 'Moises Andrade',
      especializacao1: 'Elétrica residencial, predial e comercial',
      especializacao2: 'Leitura de Projetos'
    },
    {
      nome: 'Matheus Andrade',
      especializacao1: 'Instalação de ar-condicionado',
      especializacao2: 'Manutenção e higienizacao de ar-condicionado'
    }
  ]

  return (
    <div className="App">
      <Header />
      <Descricao />
      <Servicos />
      <Titulo titulo="Técnicos Responsáveis" />

      {tecnicos.map(profissional => <Tecnicos nome={profissional.nome} especializacao1={profissional.especializacao1} especializacao2={profissional.especializacao2}/>)}

      <Contato />

    </div>
  );
}

export default App;
