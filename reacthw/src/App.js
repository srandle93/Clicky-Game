import React, { Component } from "react";
import Theme from "./components/Theme/Theme";
import ImageCards from "./components/ImageCard/ImageCards";
// import Counter from "./components/Counter/Counter";
import image from "./image.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    image
  };

  render() {
    return(
      <div>
      <Theme>
          {/* <Counter /> */}
        {this.state.image.map(image => (
          <ImageCards 
            id={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
      </Theme>
      </div>
    
    );
  }
}

export default App;