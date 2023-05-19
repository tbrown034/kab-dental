"use client";
import React, { useCallback, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 41.74523550483188,
  lng: -88.16676062975371,
};

const markerLocation = {
  lat: 41.74819382103896,
  lng: -88.16685256148999,
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  const onLoad = useCallback((map) => {
    console.log("marker: ", markerLocation);
    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  const handleClick = () => {
    setIsInfoWindowOpen(!isInfoWindowOpen);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={markerLocation} onClick={handleClick}></Marker>
      {isInfoWindowOpen && (
        <InfoWindow onLoad={onLoad} position={markerLocation}>
          <div>
            <h4>Keith Brown, DDS FAGD</h4>
            <p style={{ marginTop: "5px" }}>
              {" "}
              1296 Rickert Dr #300, Naperville, IL 60540
            </p>
            <a
              href="https://www.google.com/maps/place/Keith+A.+Brown,+DDS,+FAGD/@41.7482219,-88.1689447,17z/data=!3m1!4b1!4m6!3m5!1s0x880e57ffb6eb6c69:0xbc5292dc03318948!8m2!3d41.7482219!4d-88.166756!16s%2Fg%2F1tfq57bq"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <>Loading...</>
  );
}
