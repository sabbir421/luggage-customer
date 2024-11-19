import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import Box from "@mui/material/Box";

// URL for geographical data (world map)
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// Marker data for countries, including flag URLs
const markers = [
  { markerOffset: -15, name: "USA", coordinates: [-100, 40], flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
  { markerOffset: -15, name: "Spain", coordinates: [-3.7038, 40.4168], flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" },
  { markerOffset: -15, name: "India", coordinates: [78.9629, 20.5937], flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" },
  { markerOffset: -15, name: "South Korea", coordinates: [127.7669, 35.9078], flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" },
  { markerOffset: -15, name: "Brazil", coordinates: [-51.9253, -14.235], flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" },
  { markerOffset: -15, name: "South Africa", coordinates: [22.9375, -30.5595], flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" },
  { markerOffset: -15, name: "Australia", coordinates: [133.7751, -25.2744], flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg" },
  { markerOffset: -15, name: "Bangladesh", coordinates: [90.4125, 23.685], flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" }, // Bangladesh added here
];

const CountryMapView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
        backgroundImage: "url('/img/map.jpg')", // Ensure correct image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: "60%",
        mx: "auto",
        marginBottom: "30px",
        height: "600px", // Adjust as needed
      }}
    >
      <ComposableMap
        style={{
          width: "100%",
          height: "auto",
          background: "transparent", // Ensure map background is transparent
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#E0E0E0",
                    stroke: "#FFF",
                    strokeWidth: 0.5,
                  },
                  hover: { fill: "#BDBDBD" },
                }}
              />
            ))
          }
        </Geographies>
        
        {/* Country markers with flag images */}
        {markers.map(({ name, coordinates, markerOffset, flag }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              transform="translate(-15, -25)" // Adjust position to center the flag
            >
              <image
                href={flag} // Country flag URL
                width="24" // Width of the flag
                height="16" // Height of the flag
                style={{
                  filter: "drop-shadow(0 0 8px rgba(0, 0, 0, 0.7))", // Optional glow effect
                  borderRadius: "4px", // Optional rounding of flag corners
                }}
              />
            </g>
            <text
              x="12"
              y={markerOffset}
              textAnchor="middle"
              style={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                fill: "#e77509", // Name text color
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)", // Text shadow for better visibility
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </Box>
  );
};

export default CountryMapView;
