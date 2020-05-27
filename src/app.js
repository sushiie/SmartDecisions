console.log('app js is running');

// JSX -- JavaScript XML

// var template = <p>My Journey of React has started</p>
const app = {
    title: 'Smart Decisions',
    subtitle: 'Put your life in hands of a computer.',
    options: ['One', 'Two']
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No Options"}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>

    </div>
);

const user = {
    name: 'Susheel',
    age: 28,
    location: 'Greater Noida'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template , appRoot);