// Incrementing and Decerementing web page using react
import React from "react" ;

class App extends React.Component {
  //Class will always have a render function
  //State Variables
  constructor() {
    super();
    //State is always an object
    this.state = {
      count: 0,
    };
  }

  //When State Variable is updated, UI rerenders , i.e. render function is
  //called again automatically

  render() {
    //return Whatever you want to show on the screen
    return (
      <div>
        <h1>Counter Application</h1>
        <h3>{this.state.count}</h3>
        <button
          onClick={(e) => {
            console.log("event is", e);
            // In React You cannot directly mutate/change state variables
            // this.state.count++;
            //Special Method called setState
            //setState is a function to which you pass an object
            //In Object you only pass those properties that you want to change
            if (this.state.count < 15) {
              this.setState({
                count: this.state.count + 1,
              });
            }
          }}
        >
          Increment Count
        </button>
        <button
          onClick={() => {
            if (this.state.count > 0) {
              this.setState({
                count: this.state.count - 1,
              });
            }
          }}
        >
          Decrement count
        </button>
      </div>
    );
  }
}

// export default App;
export default App;

//let count=0;
//Add event Listener on button
//Update the Count variable
//Update the Count UI

// <button onclick=""></button>

// showCount(){
//   //get The Element
//   //append it To html DOM
// }
