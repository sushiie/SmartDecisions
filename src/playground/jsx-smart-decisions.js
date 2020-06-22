console.log('app js is running');

// JSX -- JavaScript XML

// var template = <p>My Journey of React has started</p>
const app = {
    title: 'Smart Decisions',
    subtitle: 'Put your life in hands of a computer.',
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
    }

    renderApp();
};

const onRemoveAll = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No Options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do!!</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                { app.options.map((option, index) => <li key={index}>{option}</li>)}
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);    
}

renderApp();