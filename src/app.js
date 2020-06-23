import React from 'react';
import ReactDOM from 'react-dom';
import SmartDecisionsApp from "./components/SmartDecisionsApp";
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<SmartDecisionsApp />, document.getElementById('app'));

// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//     );
// }

// ReactDOM.render((
//     <Layout>
//         <div>
//             <h1>Page Title</h1>
//             <p>This is page content</p>
//         </div>
//     </Layout>)
// , document.getElementById('app'));