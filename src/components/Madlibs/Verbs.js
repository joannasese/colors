import React, { Component } from 'react';
import { connect } from 'react-redux';

const Verbs = ({verbs}) =>
  <div>
   {verbs.map(verb =>
     <h2>I want to <strong>{verb}</strong> it.</h2>
   )}
  </div>

// export class Verbs extends Component {
//   render() {
//     console.log(this.props.verbs)
//     let verbs = this.props.verbs.map((verb, index) =>
//       <li key={index}>
//         <h1>I wanted to <strong>{verb}</strong> melons.</h1>
//       </li>
//     );
//
//     return(
//       <ul>
//         {verbs}
//       </ul>
//     );
//   }
// };

function mapStateToProps (state){
  return { verbs: state.verbs };
};

// export default Verbs;
export const ConnectedVerbs = connect(mapStateToProps)(Verbs);
