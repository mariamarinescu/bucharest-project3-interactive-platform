import React from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { Container, Row, Col } from 'react-bootstrap';

// const apiKey = 'AIzaSyBuqivjlUHx_1CzHXli6ft9xLWrI-dOGwo' /* ISS TEAM API KEY */
const yek = 'AIzaSyBFBgzKEMmLB-LGdSrmFOejutT8m8pOvQk' /* MY BROKEN API KEY */

class GMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };
        this.onMarkerClick = this.onMarkerClick.bind(this)
        this.onMapClicked = this.onMapClicked.bind(this)
    }
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
    render() {
        return (
            <Container fuild>
            <Row noGutters>
                <Col>
            <div className='map'>
                <Map google={this.props.google}
                    zoom={3}
                    className="gMap"
                   
                // initialCenter={coord}  !!!SET DEFAULT CENTER!!!
                >
                    {this.props.locationData.map((e, i) => {
                        return <Marker
                            title={e.title}
                            name={e.name}
                            position={e.position}
                            onClick={this.onMarkerClick}
                        />
                    })}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
            </Col>
            </Row>
            
            </Container>
        )
    }
}

export default GoogleApiWrapper({ apiKey: ('AIzaSyAI7nWxzjV64pxGJ1p8SmjTeV-1LW2XlTA') })(GMap)