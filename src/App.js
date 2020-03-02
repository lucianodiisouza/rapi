import React, { Component } from 'react';
import './Estilos.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Carregando...</div>
    } else {
      return (
        <section className="container">
          <h2><center>Listing Data from JSON</center></h2>
          <br />
          <section className="lista">
            {items.map(item => (
              <p className="item" key={item.id}>
                <span className="nome">Nome: {item.name} </span>
                <span className="email">Email: {item.email} </span>
                <span className="empresa"> Empresa: {item.company.name}</span>
                <span><a href={ 'http://'+item.website } target="_blank">Click here to Access the WebSite</a></span>
              </p>
            ))}
          </section>
        </section>

      );
    }
  }
}


export default App;