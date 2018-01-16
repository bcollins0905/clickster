import React, { Component } from 'react';
// import logo from './logo.svg';
import GameTile from "./components/GameTile";
import GameBoard from "./components/GameBoard";
import Title from "./components/Title";
import tiles from "./tiles.json";
import './App.css';


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    tiles
  };



// renderPage = () => {
//     if (this.state.currentPage === "Home") {
//       return <Home />;
//     } else if (this.state.currentPage === "About") {
//       return <About />;
//     } else if (this.state.currentPage === "Blog") {
//       return <Blog />;
//     } else {
//       return <Contact />;
//     }
//   };


shuffleTiles = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    for (let i = this.state.tiles.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    
    this.setState({ tiles })
    }
  
  }

  render() {
    console.log(this.state.tiles)
    return (
      <GameBoard>
        <Title>Don't Click on the Same Character Twice</Title>
        {this.state.tiles.map(tile => (
          <GameTile
            shuffleTiles={this.shuffleTiles}
            id={tile.id}
            key={tile.id}
            name={tile.name}
            image={tile.image}
          />
        ))}
      </GameBoard>
    );
  }
}

export default App;


