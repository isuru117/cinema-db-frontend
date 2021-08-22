import { Card } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

class ResultCard extends React.Component {
    render() {
        return (
            <>
                <StyledCard>
                    {this.props.image ?
                        <Image src={`https://image.tmdb.org/t/p/w200${this.props.image}`} alt={this.props.name} /> :
                        <Image src={"https://via.placeholder.com/150"} alt={this.props.name} />
                    }
                    <Title>{this.props.name}</Title>
                    <Description>{this.props.description}</Description>
                </StyledCard>
            </>)
    }
}

export default ResultCard;

const Title = styled.div`
    align-self:flex-start;
    width:20%;
`;

const Description = styled.div`
    align-self:stretch;
    font-size: 15px;
    color:#555555;
    text-align:justify;
    width:70%;
    overflow: hidden;
`;

const StyledCard = styled(Card)`
&.MuiCard-root{
    background-color: #11111155;
    color: #aaaacc;
    height:200px;
    font-size: 20px;
}
display:flex;
justify-content: space-between;
`;

const Image = styled.img`
    width:150px;
    padding: 5px;
`;