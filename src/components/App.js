import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos',{
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 5966ec79bf5f80c9cd33b79255b73315e5e40e9e83e682395d4a53ba32aab656'
            }
        });
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