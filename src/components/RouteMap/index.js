/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCgijq6tCCyVneOSvnjX7vQrIEoDmYKRMM';

const RouteMap = props => {

    const origin = {
        latitude: 28.450627,
        longitude: -16.263045,
    };

    const destination = {
        latitude: 28.460127,
        longitude: -16.269045,
    };



    return (
        <MapView
            style={{ width: '100%', height: '100%' }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}>
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={2}
                strokeColor="black"
            />
            <Marker
                coordinate={origin}
                title={'Origin'}
            />
            <Marker
                coordinate={destination}
                title={'Destination'}
            />


        </MapView>


    );
};

export default RouteMap;
