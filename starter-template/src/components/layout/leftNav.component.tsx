import * as React from "react";
import { Nav, INavProps } from 'office-ui-fabric-react/lib/Nav';
import './leftNav.css'

class LeftNav extends React.Component {

    constructor(prop: INavProps) {
        super(prop);
    }
    render() {
        return (
            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                <div className="ms-NavExample-LeftPane">
                    <Nav
                        groups={[
                            {
                                links: [
                                    {
                                        name: 'Airline',
                                        url: "#;",
                                        onClick: this._onItemClickHandler,
                                        key: 'key2',
                                        title:"Shows the airline related configuration."
                                    },
                                    {
                                        name: 'Station',
                                        url: 'http://example.com',
                                        key: 'key3'
                                    },
                                    {
                                        name: 'Technical',
                                        url: 'http://msn.com',
                                        key: 'key4'
                                    },
                                    {
                                        name: 'Messaging',
                                        url: 'http://msn.com',
                                        key: 'key5'
                                    },
                                ]
                            }
                        ]}
                    />
                </div>
            </div>
        );
    }

    private _onItemClickHandler(e: React.MouseEvent<HTMLElement>): false {
        alert('adf');
        return false;
    }
}

export default LeftNav;