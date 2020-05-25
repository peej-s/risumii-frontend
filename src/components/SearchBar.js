import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ButtonStyle = {
    margin: 15,
    verticalAlign: "bottom",
};

const TextFieldStyle = {
    margin: 15,
    width: 300,
};

class SearchBar extends Component {
    onFormSubmit = event => {
        event.preventDefault();
        this.props.handleSubmit(event, "search")
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <TextField
                        name="searchQuery"
                        label="Search for a song or artist"
                        value={this.props.searchQuery}
                        onChange={this.props.handleChange}
                        style={TextFieldStyle}
                    />
                    <Button
                        style={ButtonStyle}
                        variant="contained"
                        type="submit"
                    >
                        Search
                    </Button>
                </form>

            </div>
        )
    }
}

export default SearchBar