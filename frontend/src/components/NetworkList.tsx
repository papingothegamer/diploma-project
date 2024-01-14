// components/NetworkList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Network {
  _id: string;
  networkType: string;
  location: string;
  latency: number;
  downloadSpeedMbps: number;
  uploadSpeedMbps: number;
  optimizationStatus: boolean;
}

interface NetworkListProps {
  networks: Network[];
}

const NetworkList: React.FC<NetworkListProps> = () => {
  const [networks, setNetworks] = useState<Network[]>([]);

  useEffect(() => {
    // Fetch networks from the backend
    const fetchNetworks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/networks');
        setNetworks(response.data);
      } catch (error) {
        console.error('Error fetching networks:', error);
      }
    };

    // Call the fetch function
    fetchNetworks();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h2>Networks</h2>
      <ul>
        {networks.map((network) => (
          <li key={network._id}>
            <h3>{network.networkType}</h3>
            <p>Location: {network.location}</p>
            <p>Latency: {network.latency} ms</p>
            <p>Download Speed: {network.downloadSpeedMbps} Mbps</p>
            <p>Upload Speed: {network.uploadSpeedMbps} Mbps</p>
            <p>Optimization Status: {network.optimizationStatus ? 'Optimized' : 'Not Optimized'}</p>
            <Link to={`/networks/${network._id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NetworkList;