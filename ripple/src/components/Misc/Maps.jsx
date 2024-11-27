import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';
import { fetchLocationMap } from '@/app/functions/api';
import { Component } from 'lucide-react';
const Maps=({item})=>{
    const mapRef = useRef()
    const mapContainerRef = useRef()
    const [center, setCenter]= useState([0,0])
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuYWVzcGxhc2giLCJhIjoiY20zaDVwYjl2MGFwNzJrc2RmaXVnOGg0YiJ9.TPRKKl1T2jv65uuWa8eZoQ'
     useEffect(() => {
   
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(item.collection_point)}.json?access_token=${mapboxgl.accessToken }`;
    fetchLocationMap(url).then((data)=>{
        setCenter(data.features[0].center)
    });
     

   

  }, [])
  useEffect(() => {
  
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: 15
    });
    new mapboxgl.Marker()
      .setLngLat(center)
      .addTo( mapRef.current);

    return () =>  mapRef.current.remove();
  }, [center]);
  

return (
    <>
   <div className="container h-full w-full"id='map-container' ref={mapContainerRef}/>
    </>
  )
}

export default Maps;