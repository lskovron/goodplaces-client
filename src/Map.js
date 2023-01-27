import 'mapbox-gl/dist/mapbox-gl.css';
import { Container } from '@mui/material'
import { css } from '@emotion/css'
import Map, {Marker} from 'react-map-gl';


const MAPBOX_TOKEN = 'pk.eyJ1IjoibHNrb3Zyb24iLCJhIjoiY2xjdXZjcTd0MHA0NDNwcG9jcmF5bW43NyJ9.ZlGueYFzCRCOpdju_i1Glw';

const GoodPlacesMap = () => {
    return (
        <Container maxWidth="lg" className={
            css`
            background-color: lightgrey;
            margin: 40px 0;
            min-height: 500px;
            border-radius: 8px;
        `}>
            <Map
                initialViewState={{
                    latitude: 37.8,
                    longitude: -122.4,
                    zoom: 14
                }}
                style={{width: 800, height: 600}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                <Marker longitude={-122.4} latitude={37.8} color="red" />
            </Map>
        </Container>
    )
}



export default GoodPlacesMap;