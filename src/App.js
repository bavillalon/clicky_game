import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./friends.json";
import CardBox from "./components/CardBox"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  randomizeCards = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.sort(function (a, b) { return 0.5 - Math.random() });
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title title={"Office Game!"} content={"Click on an Office character to score points. Make sure not to click the same person twice or your score will reset!"}> </Title>
        <CardBox>
          {this.state.characters.map(character => (
            <CharacterCard
              randomizeCards={this.randomizeCards}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </CardBox>
      </Wrapper>
    );
  }
}

export default App;
