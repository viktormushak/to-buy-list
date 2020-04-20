import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper fixed">
                    <a href="/" className="brand-logo center">Buy List</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;