// components/OptimizationStatus.tsx
import React from 'react';

interface OptimizationStatusProps {
  optimizationStatus: boolean;
  connectedDevices: number;
}

const OptimizationStatus: React.FC<OptimizationStatusProps> = ({ optimizationStatus, connectedDevices }) => {
  return (
    <div>
      <h2>Optimization Status</h2>
      <p>Status: {optimizationStatus ? 'Optimized' : 'Not Optimized'}</p>
      <p>Connected Devices: {connectedDevices}</p>
    </div>
  );
};

export default OptimizationStatus;