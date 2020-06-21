class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false   
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Detail' : 'Show Details'}
                </button>
                {
                    <div>
                        {this.state.visibility && <p>Hey these are the details you can now see.</p>}
                    </div>
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const goggleVisibility =() => {
//     visibility = !visibility;
//     renderApp();
// };

// const renderApp = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={goggleVisibility}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             {
//                 <div>
//                     {
//                         visibility && <p>Hey these are the details you can now see.</p>
//                     }
//                 </div>
//             }
//         </div>
//     )

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// renderApp();