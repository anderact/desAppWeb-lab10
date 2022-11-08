import React, {Component} from 'react';
import './App.css';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      articulos: [{
        codigo:1,
        descripcion: 'coca-cola',
        precio: 2.50
      },{
        codigo:2,
        descripcion: 'inka-cola',
        precio: 2.20
      },{
        codigo: 3,
        descripcion: 'fanta',
        precio: 1.70
      }]
    }
    this.borrar = this.borrar.bind(this);
  }

  render(){
    return (
      <Container>
        <Table hover striped='columns' variant='dark' size='sm' bordered responsive>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articulos.map(elemento => {
              return (
                <tr key={elemento.codigo}>
                  <td>
                    {elemento.codigo}
                  </td>
                  <td>
                    {elemento.descripcion}
                  </td>
                  <td>
                    {elemento.precio}
                  </td>
                  <td>
                    <Button variant='danger' size='sm' onClick={()=>this.borrar(elemento.codigo)}>Borrar</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    );
  }

  borrar(cod){
    var temp = this.state.articulos.filter((el)=>el.codigo!==cod);
    this.setState({
      articulos:temp
    })
  }
}

export default App;