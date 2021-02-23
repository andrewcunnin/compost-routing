import ReactMapGL from "react-map-gl"
import {useState} from "react";

export default function Map() {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 42.37761193348196,
        longitude: -72.51991253509473,
        zoom: 10
    });

    return <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken="pk.eyJ1IjoiYW5kcmV3amN1bm5pbiIsImEiOiJja2tvajB2cGkybGxjMnBwZHdscjdvbW1mIn0.pNADRtDSF3M8XDr6CNfLWQ"
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
    </ReactMapGL>
}