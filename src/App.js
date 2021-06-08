import React, { Component } from 'react';
import ListaDeNotas from "./components/ListaDeNotas/index";
import FormularioCadastro from "./components/FormularioCadastro/index";
import ListaDeCategorias  from "./components/ListaDeCategorias/index";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {
  
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }
    /*this.state = {
      notas:[],
      //categorias: ["Games", "Musica"],
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
*/
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.categorias}  
          criarNota={this.notas.adicionarNota.bind(this.notas)} 
          />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias} 
          />
          <ListaDeNotas 
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas} 
          />

        </main>
     </section>
    
    );
  }
}

export default App;
