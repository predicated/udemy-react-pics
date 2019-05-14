import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => {  // Must be arrow function to bind 'this' and avoid TypeError
        event.preventDefault();

        this.props.onHyloSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;
