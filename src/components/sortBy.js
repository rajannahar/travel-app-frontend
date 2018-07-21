import React, { Component } from 'react';
import {Row, Input} from 'react-materialize';
class SortBy extends Component {

    render(props) {
       
        let {handleSort} = this.props;

        return (
            <Row>
                <Input s={12} type='select' defaultValue='' onChange={handleSort}  >
                    <option value="">Sort by:</option>
                    <option value="1">Distance - low to high</option>
                    <option value="2">Distance - high to low</option>
                    <option value="3">Stars - low to high</option>
                    <option value="4">Stars - high to low</option>
                    <option value="5">Min Cost - low to high</option>
                    <option value="6">Min Cost - high to low</option>
                    <option value="7">User Rating - low to high</option>
                    <option value="8">User Rating - high to low</option>
                </Input>
            </Row>
        );
    }
}

export default SortBy;
