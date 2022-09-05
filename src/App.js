import Banner from "./Componentes/Banner";
import Servicos from "./Componentes/Servicos";
import Tecnicos from "./Componentes/Tecnicos";
import Titulo from "./Componentes/Titulo";

function App() {

  const listaServicos = [
    'Elétrica residencial, predial e comercial',
    'Leitura de projetos',
    'Instalação de ar-condicionado',
    'Manutenção e higienizacao de ar-condicionado',
    'Vendas de ar-condicionado e materiais elétricos'
  ]

  return (
    <div className="App">
      <Banner/>
      <Titulo titulo="Nossos Serviços" />
      
      {listaServicos.map(servico => <Servicos key={servico} tipo={servico} />)}
      
      <Titulo titulo="Técnicos Responsáveis" />
      <Tecnicos nome="Moisés" especializacao1="Elétrica residencial, predial e comercial" especializacao2="Leitura de Projetos"/>
      <Tecnicos nome="Matheus" especializacao1="Instalação de ar-condicionado" especializacao2="Manutenção e higienizacao de ar-condicionado"/>
    </div>
  );
}

export default App;
