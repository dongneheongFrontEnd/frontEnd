// ListSection.js
import React from 'react';

const ListSection = ({ selectedAddresses }) => {
  return (
    <div style={{ marginLeft: '20%', marginTop: '-180px', position: 'absolute', zIndex: '1', backgroundColor: 'white', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <ul>
        {selectedAddresses.map((address, index) => (
          <li key={index} style={{ fontWeight: index === selectedAddresses.length - 1 ? 'bold' : 'normal', cursor: 'pointer' }}>
            {address.region}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
