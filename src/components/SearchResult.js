import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const style = {
    margin: 15,
    padding: 5,
    border: "1px black solid",
};

class SearchResult extends Component {

    joinArtists(artists) {
        var artistNames = []
        artists.forEach(artistData => {
            artistNames.push(artistData.name)
        })
        return artistNames.join(", ")
    }

    render() {
        return (
            <div>
                <Card style={style}  >
                    <CardContent>
                        <strong>Track Name:</strong> {this.props.trackData.name}
                    </CardContent>
                    <CardContent>
                        <strong>Artists:</strong> {this.joinArtists(this.props.trackData.artists)}
                    </CardContent>
                    <CardContent>
                        {this.props.trackData.preview_url ?
                            <Link href={this.props.trackData.preview_url}>
                                Preview Song
                                </Link> :
                            "No Preview Available"
                        }
                    </CardContent>
                    <CardContent>
                        <Button
                            onClick={(event) => this.props.handleSubmit(event, "recommend", this.props.trackData)}
                            variant="contained"
                        >
                            Get Recommendations
                            </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default SearchResult