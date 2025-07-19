import { Component, useState } from 'react';

// This is an example of the Code Higher Order approach!!! it splits theme from initial logic

const App = ({ darkTheme, toggleTheme }){

    return (
        <div className="container" data-theme={darkTheme ? "dark" : "light"}
            onClick={toggleTheme}>
            My Site
        </div>
    );
}

const withTheme = (Component) => {
    function Func(props) {
        const [darkTheme, setDarkTheme] = useState(true);
        return (
            <Component {...props} darkTheme={() => setDarkTheme(!darkTheme)} toggleTheme={setDarkTheme} />
        );
    }
    return Func;
}

export default withTheme(App);