import React from 'react';
import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

class MenuPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchText: "" }
    }

    searchMovie = () => {
        if (this.state.searchText)
            this.props.history.push(`/search/${this.state.searchText}`);
    }

    render() {
        return (
            <div>
                <h1>Search for your favorite movie!</h1>
                <SearchBar autoFocus={true} type={"search"} fullWidth onChange={e => this.setState({ searchText: e.target.value })} />
                <StyledButton onClick={this.searchMovie}>Search</StyledButton>
            </div>
        );
    }
}
export default withRouter(MenuPage);

const StyledButton = styled(Button)`
    span {
        color: #ffffff;
        font-size: calc(10px + 2vmin);
    };
`;

const SearchBar = styled(TextField)`
    background-color: #ffffff11;
    width:100%;
    display:block;
    margin: 0;
    font-color:white;

    input, select, textarea{
        color: #ffffff;
        font-size: calc(10px + 2vmin);
        padding: 15px;
        text-align: center;
    }
`;
