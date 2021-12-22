import './App.css';
import React from 'react';
import Row from './components/Row';
import requests from './services/Requests';

function App() {
  return (
    <div className="App">
      <h1>Teste</h1>
      <Row
        title="Netflix Originais"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Em alta" fetchUrl={requests.fetchTreding} />
      <Row title="Mais Votados" fetchUrl={requests.fetchTopRated} />
      <Row title="Filmes de Ação" fetchUrl={requests.fetchActionMovies} />
      <Row title="Filmes de Comédia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Filmes de Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Filmes de Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentarios" fetchUrl={requests.fetchDocumentaryMovies} />
    </div>
  );
}

export default App;
