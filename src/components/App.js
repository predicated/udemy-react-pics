import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log("You submitted: " + term);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onHyloSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}


export default App;