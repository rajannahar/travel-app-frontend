import React, { Component } from 'react';
import {Row, Input} from 'react-materialize';
class FilterStars extends Component {

    render(props) {
       
        let {handleFilterStars} = this.props;

        return (
            <Row>
                <Input className="filterStars" s={6} type='select' defaultValue='' onChange={handleFilterStars} >
                    <option key="" value="">Filter Stars:</option>
                    <option key="0" value="0">0 Star</option>
                    <option key="1" value="1">1 Star</option>
                    <option key="2" value="2">2 Stars</option>
                    <option key="3" value="3">3 Stars</option>
                    <option key="4" value="4">4 Stars</option>
                    <option key="5" value="5">5 Stars</option>
                </Input>
            </Row>
        );
    }
}

export default FilterStars;
