import React, { Component } from 'react';
import Maps from './components/maps/Maps'


// DUMMY DATA 
const markerData = [{
  title: 'marker1_title',
  name: 'Kathmandu City',
  position: {
    lat: 27.708259611420385,
    lng: 85.31940732779083
  }
}, {
  title: 'marker2_title',
  name: 'Salta City',
  position: {
    lat: -24.795283873195597,
    lng: -65.42829136976184
  }
}, {
  title: 'marker3_title',
  name: 'Oracoke Lighthouse',
  position: {
    lat: 35.1096357,
    lng: -75.9863747
  }
}, {
  title: 'marker4_title',
  name: 'Antananarivo City',
  position: {
    lat: -18.915194943870617,
    lng: 47.53313308528492
  }
}, {
  title: 'marker5_title',
  name: 'Esports',
  position: {
    lat: 37.5246642275535,
    lng: 126.94545210259305
  }
}, {
  title: 'marker6_title',
  name: 'Neo-Tokyo',
  position: {
    lat: 35.675784883832065,
    lng: 139.7688509481294
  }
}, {
  title: 'marker7_title',
  name: 'Boring',
  position: {
    lat: 47.44931986261183,
    lng: 12.154022557394521
  }
}]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className='app'>
        <div style={{ height: '60vh' }}>
          <Maps locationData={markerData} />
        </div>
      </div>
    );
  }
}


