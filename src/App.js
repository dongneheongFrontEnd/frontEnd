// App.js
import React, { useState } from 'react';
import Header from './Header';
import MapSection from './MapSection';
import SearchSection from './SearchSection';
import ListSection from './ListSection';

const App = () => {
  const [map, setMap] = useState(null);
  const [selectedAddresses, setSelectedAddresses] = useState([]);

  const handleRegionSelect = (region, subAddress = null) => {
    const newAddress = { region, subAddress };
    setSelectedAddresses(prevAddresses => [...prevAddresses, newAddress]);
  };

  return (
    <div>
      <Header />
      <SearchSection map={map} onRegionSelect={handleRegionSelect} />
      <MapSection setMap={setMap} />
      <ListSection selectedAddresses={selectedAddresses} />
    </div>
  );
};

export default App;
