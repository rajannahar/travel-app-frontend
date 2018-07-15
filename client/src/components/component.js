import React, { Component } from 'react';
import {Card, Col, Row, Preloader} from 'react-materialize';
import SortBy from './sortBy';
import FilterName from './filterName';
import FilterStars from './filterStars';
import $ from 'jquery';

let initialState = {};

class Client extends Component {

    constructor() {
        super();
        this.state = {
            hotels: [], 
            sortBy: '',
            filterName: ''
        }
    }

    apidata = () => {
        fetch('/api')
        .then(res => res.json()
        .then(data => {
            const hotelData = data.Establishments;
            this.setState({
                ...this.state,
                hotels:hotelData
            });

            initialState = {...this.state};
        }));
    };

    componentDidMount() {
        this.apidata();
    }

    handleSort = (event) => {

        this.setState({
            sortBy: event.target.value
        })

        let newObj = [...this.state.hotels];
        
        switch(this.state.sortBy) {
            case("1"):
                console.log("Distance - low to high", event.target.value);
                // newObj.sort((a, b) => a.Distance - b.Distance);
                // this.setState({
                //     ...this.state,
                //     hotels: newObj
                // });
                return newObj.sort((a, b) => a.Distance - b.Distance);
                break;
            
            case("2"):
                // console.log("Distance - high to low");
                newObj.sort((a, b) => b.Distance - a.Distance);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
            
            case("3"):
                // console.log("Stars - low to high");
                newObj.sort((a, b) => a.Stars - b.Stars);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
                
            case("4"):
                // console.log("Stars - high to low");
                newObj.sort((a, b) => b.Stars - a.Stars);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
            
            case("5"):
                // console.log("Min cost - low to high");
                newObj.sort((a, b) => a.MinCost - b.MinCost);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;

            case("6"):
                // console.log("Min cost - high to low");
                newObj.sort((a, b) => b.MinCost - a.MinCost);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;

            case("7"):
                // console.log("User rating - low to high");
                newObj.sort((a, b) => a.UserRating - b.UserRating);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;

            case("8"):
                // console.log("User rating - high to low");
                newObj.sort((a, b) => b.UserRating - a.UserRating);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
            
            default:
                console.log("default");
                // this.apidata();
        }

        this.test();
    }

    test = () => {
        console.log("..... ",this.state.sortBy);
    }

    resetData = () => {
        this.setState({
            filterName: ''
        });
        $(".filterName").val("");
    }

    handleFilterName = (event) => {
        let nameInput = event.target.value;
        this.setState({
            filterName: nameInput
        });
                        
    };

    handleFilterStars = (event) => {
        let starInput = parseInt($(".filterStars input").val(), 10);

        let newState = [...this.state.hotels]
        newState = newState.filter(hotel => hotel.Stars === starInput);

        this.setState({
            hotels: newState,
        });
    };

    
  render() {

   // if (this.state.hotels.length) {
        console.log("load");

        let a, b;
        const {hotels, sortBy} = this.state;

        let hotelsToRender = hotels ? hotels.filter(hotel => 
            hotel.Name.toLowerCase().includes(
                this.state.filterName.toLowerCase())
        ) : [];

        hotelsToRender = sortBy ? hotelsToRender.sort((a, b)) : hotelsToRender; 

        return (
            
            <div className="client">
            
                
            {this.state.hotels.length ? 
                <div className="container">

                    <Row>
                        <SortBy 
                            handleSort={this.handleSort.bind(this)}
                        />
                    </Row>

                    <Row>
                        <FilterName 
                            handleFilterName={this.handleFilterName.bind(this)} 
                            resetData={this.resetData.bind(this)} 
                        />
                    </Row>

                    <Row>
                            
                        { hotelsToRender.map(hotel =>
                        
                            <Col m={6} s={12} key={hotel.EstablishmentId}>
                                <Card>
                                    <div className="card-image">
                                        <img src={hotel.ImageUrl} alt="" />
                                        <span className="card-title">{hotel.Name}</span>
                                    </div>
                                    <div className="card-content">
                                        <p><b>Type: </b>{hotel.EstablishmentType}</p>
                                        <p><b>Location: </b>{hotel.Location}</p>
                                        <p><b>Minimum cost: </b>£{hotel.MinCost}</p>
                                        <p><b>Stars: </b>{hotel.Stars}</p>
                                        <p><b>User rating: </b>{hotel.UserRating}</p>
                                        <p><b>User rating title: </b>{hotel.UserRatingTitle}</p>
                                        <p><b>User rating count: </b>{hotel.UserRatingCount}</p>
                                        <p><b>Distance: </b>{parseFloat(hotel.Distance).toFixed(2)}</p>
                                    </div>
                                </Card>
                            </Col>
                            
                        )}

                    </Row>
                </div>

                    :  <div className="container">
                        <Row>
                            <Col s={12}>
                                <Preloader flashing size='big'/>
                            </Col>
                        </Row> 
                    </div>
                }

            </div>

        );
    

  }
}

export default Client;
