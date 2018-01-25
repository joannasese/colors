import React from 'react';
import { connect } from 'react-redux';

const Verbs = ({verbs}) =>
  <div>
   {verbs.map((verb, index) =>
     <h2 key={index}>I want to <strong>{verb}</strong> it.</h2>
   )}
   { console.log({verbs})}
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
