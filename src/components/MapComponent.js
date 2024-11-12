/** @format */
import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
let mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const MapComponent = ({ coords, zoom = 10 }) => {
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    handleLocation();
  }, []);

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          setCoords({ lat: latitude, lng: longitude });
          setDistance(accuracy);
        },
        (error) => {
          setCoords({ lat: 51.5074, lng: -0.1278 });
        }
      );
    }
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDaIOHljSeGOAM5dEgOecGc4GE1NfSWZQg",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps ...</div>;
  }

  return (
    <div>
      {coords.lat && coords.lng && isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={coords}
          zoom={10}
        >
          <Marker position={coords} />
        </GoogleMap>
      )}
    </div>
  );
};

export default MapComponent;
