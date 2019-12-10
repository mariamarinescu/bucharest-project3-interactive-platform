import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


const apiKey = 'AIzaSyBuqivjlUHx_1CzHXli6ft9xLWrI-dOGwo'
const yek = 'AIzaSyBFBgzKEMmLB-LGdSrmFOejutT8m8pOvQk'
const coord = {
    lat: 35.1096357,
    lng: -75.9863747
}

class GMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className='map'>
                    <Map google={this.props.google} zoom={5}
                        initialCenter={{
                            lat: 44.452404,
                            lng: 26.075714599999998
                        }}

                    >
                        <Marker
                            title={'Bucharest'}
                            name={'Bucharest'}
                            position={{
                                lat: 44.452404,
                                lng: 26.075714599999998
                            }}
                        />
                    </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({ apiKey: (apiKey) })(GMap)