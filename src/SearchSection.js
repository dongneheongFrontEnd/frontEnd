// SearchSection.js
import React, { useState } from 'react';
import './SearchSection.css';
import { FaSearch } from "react-icons/fa";

// ... (imports는 변경되지 않음)

const SearchSection = ({ map }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedSubAddress, setSelectedSubAddress] = useState(null);

  const handleRegionSelect = (region, subAddress = null) => {
    setSelectedRegion(region);
    setSelectedSubAddress(subAddress);
  };

  const regions = ['서울특별시', '부산광역시', '대구광역시', '인천광역시', '광주광역시', '대전광역시', '울산광역시', '세종특별자치시', '경기도'];

  const subAddresses = {
    서울특별시: ['종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '강북구', '도봉구', '노원구', '은평구', '서대문구', '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구'],
    부산광역시: ['중구', '서구', '동구', '영도구', '부산진구', '동래구', '남구', '북구', '해운대구', '사하구', '금정구', '강서구', '연제구', '수영구', '사상구', '기장군'],
    대구광역시: ['중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군'],
    인천광역시: ['중구', '동구', '미추홀구', '연수구', '남동구', '부평구', '계양구', '서구', '강화군', '옹진군'],
    광주광역시: ['동구', '서구', '남구', '북구', '광산구'],
    대전광역시: ['동구', '중구', '서구', '유성구', '대덕구'],
    울산광역시: ['중구', '남구', '동구', '북구', '울주군'],
    세종특별자치시: ['세종시'],
    경기도: ['수원시', '성남시', '의정부시', '안양시', '부천시', '광명시', '평택시', '동두천시', '안산시', '고양시', '과천시', '구리시', '남양주시', '오산시', '시흥시', '군포시', '의왕시', '하남시', '용인시', '파주시', '이천시', '안성시', '김포시', '화성시', '광주시', '양주시', '포천시', '여주시', '연천군', '가평군', '양평군'],
  };
  
  return (
    <>
      <div style={{ width: '25%', height: '', backgroundColor: 'white', color: '#2196f3', marginLeft: '19%', fontSize: '19px', fontWeight: 'bold', marginTop: '15px' }}>전체 지역 검색</div>
      <div className="search-section">
        <div className='InputRegion' style={{ display: 'flex', justifyContent: 'center', padding: '15px', backgroundColor: '#cfcfcf' }}>
          <FaSearch style={{ color: '#2196f3', fontWeight: 'bold' }} />
          <input type="text" style={{ width: '95%', height: '23px', color: 'black', border: '1px solid #fff', borderRadius: '10px' }}
            placeholder />
        </div>
        <div className='address-container'>
          <div className="main-address">
            <ul>
              {regions.map((region) => (
                <li
                  key={region}
                  onClick={() => handleRegionSelect(region)}
                  className={selectedRegion === region ? 'selected' : ''}
                >
                  {region}
                </li>
              ))}
            </ul>
          </div>

          <div className="sub-address">
            {selectedRegion && subAddresses[selectedRegion] && (
              <ul>
                {subAddresses[selectedRegion].map((subAddress) => (
                  <li
                    key={subAddress}
                    onClick={() => handleRegionSelect(selectedRegion, subAddress)}
                    className={selectedSubAddress === subAddress ? 'selected' : ''}
                  >
                    {subAddress}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
