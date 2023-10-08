"use client";
import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import LocationIcon from "../../public/assets/icons/location.svg";
import Image from "next/image";
import { locations } from "./data";
import "mapbox-gl/dist/mapbox-gl.css";

const LocationAggregatorMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 7.3697,
    longitude: 12.3547,
  });
  return (
    <div className="">
      <Map
        initialViewState={{ ...viewport }}
        mapboxAccessToken="pk.eyJ1Ijoic2VwY3kiLCJhIjoiY2w0Mmt4NzloMHVjYTNmcjI5emwyeHN4MSJ9.E3m00Uw12dCWZf_YnXjQqA"
        mapStyle="mapbox://styles/sepcy/cklfy4o3847qy17k7lwbi8fo3"
        style={{ width: "100%", height: "100vh" }}
        className=""
        controller={true}
        onMove={(viewport) => setViewport(viewport)}
      >
        {locations?.map((place) => (
          <div className="relative bg-slate-600">
            <Marker
              key={place?.id}
              onClick={function () {
                return onClickStation(place);
              }}
              longitude={place?.latitude}
              latitude={place?.longitude}
              anchor="bottom"
            >
              <Image
                className="w-8 absolute hover:scale-105 cursor-pointer "
                src={LocationIcon}
                alt="Icône de marqueur"
              />
              <div className="inset-0 top-0 flex justify-center items-center left-0  cursor-pointer opacity-0 hover:opacity-100">
                <div className="relative left-0 bottom-0 text-center right-0  text-sm rounded-md  bg-red-600 text-white px-4 py-1">
                  {place.name}
                  <div className="absolute left-0 bottom-0 bg-red-600 w-4 h-2 transform rotate-45"></div>
                </div>
              </div>
            </Marker>
          </div>
        ))}
        {/* {modalStatus ? (
          <div class="absolute inset-0">
            <ModalView
              selectedStation={selectedStation}
              closeModal={closeModal}
              count={count}
            />
          </div>
        ) : (
          ""
        )} */}
      </Map>
    </div>
  );
};

export default LocationAggregatorMap;
