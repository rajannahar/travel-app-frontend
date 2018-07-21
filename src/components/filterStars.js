import React, { Component } from 'react';
import {Row, Input} from 'react-materialize';
class FilterStars extends Component {

    render(props) {
       
        let {handleFilterStars} = this.props;

        return (
            <Row>
                <Input className="filterStars" s={6} type='select' defaultValue='' onChange={handleFilterStars} >
                    <option value="">Filter Stars:</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </Input>
            </Row>
        );
    }
}

export default FilterStars;
