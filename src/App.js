import Banner from "./Componentes/Banner";
import Servicos from "./Componentes/Servicos";
import Titulo from "./Componentes/Titulo";

function App() {
  return (
    <div className="App">
      <Banner/>
      <Titulo titulo="Nossos Servicos" />
      <Servicos servico="Eletrica residencial, predial e comercial"/>
      <Servicos servico="Leitura de projetos"/>
      <Servicos servico="Instalacao de ar-condicionado"/>
      <Servicos servico="Manutencao e higienizacao de ar-condicionado"/>
      <Servicos servico="Vendas de ar-condicionado e materiais eletricos"/>
      <Titulo titulo="Tecnicos Responsaveis" />
    </div>
  );
}

export default App;
