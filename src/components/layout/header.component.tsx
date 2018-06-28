import * as React from 'react';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="ms-Grid-row header">
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                    <h2 className="title">Configurator</h2>
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10"/>
            </div>
        );
    }
}

export default Header;