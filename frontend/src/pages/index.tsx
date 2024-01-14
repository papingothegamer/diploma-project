// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import NetworkList from '../components/NetworkList';
import OptimizationStatus from '../components/OptimizationStatus';

interface Network {
  _id: string;
  networkType: string;
  location: string;
  latency: number;
  downloadSpeedMbps: number;
  uploadSpeedMbps: number;
  optimizationStatus: boolean;
}

interface FetchData {
  networks: Network[];
  optimizationStatus: boolean;
  connectedDevices: number;
}

const HomePage: React.FC = () => {
  const [fetchData, setFetchData] = useState<FetchData | null>(null);

  useEffect(() => {
    // Fetch data from the backend
    const fetchDataFromBackend = async () => {
      try {
        const response = await fetch('http://localhost:3000/');
        const data = await response.json();
        setFetchData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch function
    fetchDataFromBackend();
  }, []);

  if (!fetchData) {
    // Add loading state or handle the case when data is still being fetched
    return null;
  }

  const { networks, optimizationStatus, connectedDevices } = fetchData;

  return (
    <Layout>
      <NetworkList networks={networks} />
      <OptimizationStatus optimizationStatus={optimizationStatus} connectedDevices={connectedDevices} />
    </Layout>
  );
};

export default HomePage;