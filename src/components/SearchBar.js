import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
            <MuiThemeProvider>
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
                            // onClick={(event) => this.props.handleSubmit(event, "search")}
                            style={ButtonStyle}
                            variant="contained"
                            type="submit"
                        >
                            Search
                    </Button>
                    </form>

                </div>
            </MuiThemeProvider>
        )
    }
}

export default SearchBar