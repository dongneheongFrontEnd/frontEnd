// MapSection.js
import React, { useEffect } from 'react';

const MapSection = () => {
  useEffect(() => {
    // Kakao 지도 초기화
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(37.5501102, 126.924612),
      level: 2,
    };

    const map = new window.kakao.maps.Map(container, options);

    // 마커 추가
    const markerPosition = new window.kakao.maps.LatLng(37.5501102, 126.924612);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return <div id="map" style={{ width: '39%', height: '560px' ,marginLeft: 'auto', marginRight:'18%',marginTop:'10px'}}></div>;
};

export default MapSection;
