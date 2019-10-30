//required imports, these include character cards where each character will be put, character box where all the characters will land
//the characters json where the names and image paths are defined, the title where we can control what is in the jumbo tron
// and the required REACT imports
import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./friends.json";
import CardBox from "./components/CardBox";
import Counter from "./components/Counter";


//using app as an extension of the component contructor of react to make the different parts of the page stateful.
class App extends Component {
  // settting the state to characters and tracking variables for keeping track of the not clicked characters as well
  //as the count and scores
  state = {
    characters:characters,
    charactersNotClicked: [],
    count: 0,
    highScore: 0
  };

  //setting the initial state of the not clicked characters to the original state of the characters
  componentDidMount = () => {
    this.setState({ charactersNotClicked: characters });
  }

  //function to randomize the order of the cards. when the state is changed, the character cards will rerender
  randomizeCards = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.sort(function (a, b) { return 0.5 - Math.random() });
    // Set this.state.friends equal to the new friends array
    this.setState({ characters: characters });
  };

  //handles the scores by checking what characters wer enot clicked.
  handleScores = (id) => {

    const notClicked = this.state.charactersNotClicked.filter(function (character) {
      return character.id !== id;
    });
    console.log([this.state.charactersNotClicked.length, notClicked.length]);
    if (this.state.charactersNotClicked.length === notClicked.length) {
      this.setState({ charactersNotClicked: characters, count: 0 , showModal:true});
    }
    else {
      //set state accepts a callback since it's async so I'm using this to change the state of the high score once the current count is changed for a
      //successful click.
      this.setState({ charactersNotClicked: notClicked, count: this.state.count + 1 }, () => {
        if (this.state.count >= this.state.highScore) {
          this.setState({ highScore: this.state.count });
        };
      });

    }
  };

  // renders the page in order and when the state is changed.
  render() {
    return (
      <Wrapper>
        <Title title={"Office Game!"} content={"Click on an Office character to score points. Make sure not to click the same person twice or your score will reset!"}> </Title>
        <Counter
          count={this.state.count}
          highScore={this.state.highScore}
        />
        <CardBox>
          {this.state.characters.map(character => (
            <CharacterCard
              handleScores={this.handleScores}
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
