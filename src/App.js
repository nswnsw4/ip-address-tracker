import { useEffect, useState } from 'react';
import './App.css';
import Com from './component';

function App() {

  const [ip, setIp] = useState({
    "ip": "",
    "location": {
        "country": "US",
        "region": "",
        "city": "Mountain View",
        "lat": 37.4223,
        "lng": -122.085,
        "postalCode": "94043",
        "timezone": "",
        "geonameId": 5375480
    },
    "domains": [
        "0--9.ru",
        "000.lyxhwy.xyz",
        "000180.top",
        "00049ok.com",
        "001998.com.he2.aqb.so"
    ],
    "as": {
        "asn": 15169,
        "name": "Google LLC",
        "route": "8.8.8.0/24",
        "domain": "https://about.google/intl/en/",
        "type": "Content"
    },
    "isp": "",
    "proxy": {
        "proxy": false,
        "vpn": false,
        "tor": false
    }
});

  console.log(ip);

  const [input, setInput] = useState('');


  function getData(){
    const api = fetch(`https://geo.ipify.org/api/v1?apiKey=at_r0EOjQ0MCrqhRQRMxO3DTstEfpyT5&ipAddress=${input}`).then(response => response.json()).then(data => setIp(data));
  }

  function changeValue(e){
    setInput(e.target.value);
  }

  useEffect(async () => {
    console.log(ip);
    console.log(input);
  }, [ip,input])


  return (
    <div>
      <div className="search-nav">
        <input type="text" onChange={changeValue} className="search-bar"/>
        <button onClick={getData} className="search-btn">></button>
      </div>

      <div className="container">
        <Com info="IP" data={ip.ip} />
        <Com info="Location" data={ip.location.region} />
        <Com info="Timezone" data={ip.location.timezone} />
        <Com info="ISP" data={ip.isp} />
      </div>
    </div>
  );
}

export default App;
