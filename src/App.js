import React, { Component } from 'react';
import ListaDeNotas from "./components/ListaDeNotas/index";
import FormularioCadastro from "./components/FormularioCadastro/index";
import ListaDeCategorias  from "./components/ListaDeCategorias/index";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      notas:[],
      categorias: ["Games", "Musica"],
    }
  }

  criarNota(titulo, texto, categoria){
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
   this.setState(novoEstado)
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCaregorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCaregorias};
    this.setState(novoEstado);
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas});
    console.log("deletar");
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.state.categorias}  
          criarNota={this.criarNota.bind(this)} 
          />
        <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias} />
          <ListaDeNotas 
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas} />

        </main>
     </section>
    
    );
  }
}

export default App;
