import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const style = {
    margin: 15,
};

class SearchBar extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TextField
                        name="searchQuery"
                        floatingLabelText="Search for a song or artist"
                        value={this.props.searchQuery}
                        onChange={this.props.handleChange}
                        style={style}
                    />
                    <Button
                        onClick={(event) => this.props.handleSubmit(event, "search")}
                        style={style}
                        variant="contained"
                    >
                        Search
                    </Button>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default SearchBar