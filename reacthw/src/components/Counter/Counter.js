// import React , { Component } from "react";
// import ImageCards from "../ImageCard/ImageCards";
// import image from "./image.json"
// // By extending the React.Component class, Counter inherits functionality from it
// class Counter extends Component {
//   // Setting the initial state of the Counter component
//   state = {
//     count: 0,
//     oneClick: false,
//     image
//   };

//   shuffleImages = (props) => {
//     //   handles the rearranging of images
//     let m = this.state.image.length, t, i;

//     // While there remain elements to shuffle…
//     while (m) {

//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);

//     // And swap it with the current element.
//     t = image[m];
//     image[m] = image[i];
//     image[i] = t;
//   }

//   return image;
// }

//   // handleIncrement increments this.state.count by 1
//   pointCounter = () => {
//     // We always use the setState method to update a component's state
//     this.setState({ count: this.state.count + 1 });
//   };

//   // The render method returns the JSX that should be rendered
//   render() {
//       const oneClick = this.state.oneClick;
//     return (
//       <div className="card text-center">
//         <div className="card-header bg-primary text-white">
//           Click Counter!
//         </div>
//         <div className="card-body">
//           <p className="card-text">Life Points: {this.state.count}</p>
//           {oneClick ? (
//               <ImageCards 
//               onClick={this.shuffleImages} 
//               pointCounter={this.pointCounter}/>
//                 ) : (
//               this.setState({ count: this.state.count === 0 })
//               )
//           };
//            <button className="btn btn-primary" onClick={this.pointCounter}>
//             <ImageCards />
//           </button> 
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;
