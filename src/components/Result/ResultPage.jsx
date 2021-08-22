import React from 'react';
import { movieDBApiKey } from './../../appSettings';
import ResultCard from './ResultCard';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: this.props.match.params.query, movieResult: [] }
    }

    componentDidMount() {
        this.getMoviesResult();
    }

    getMoviesResult = () => {
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${movieDBApiKey}&query=${this.state.query}&page=1`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => { this.setState({ movieResult: data.results }) });
    }

    goBack = () => {
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <h1>Search results for : '{this.state.query}'</h1>
                <ScorllableDiv>
                    {this.state.movieResult.map((result) => {
                        return <ResultCard key={result.id} name={result.title} description={result.overview} image={result.poster_path}></ResultCard>
                    })}
                </ScorllableDiv>
                <StyledButton onClick={this.goBack}>Go Back</StyledButton>
            </div>
        );
    }
}
export default withRouter(ResultPage);

const StyledButton = styled(Button)`
    span {
        color: #ffffff;
        font-size: calc(10px + 2vmin);
    };
`;

const ScorllableDiv = styled.div`
    overflow-y: scroll;
    max-height: 500px;
    width:100%;
    div {
        padding:5px;
        margin:5px;
    }
`