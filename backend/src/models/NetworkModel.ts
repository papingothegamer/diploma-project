import mongoose, { Document } from 'mongoose';

interface ClientUsage {
  device: string;
  usagePercentage: number;
}

interface Coverage {
  indoor: number;
  outdoor: number;
}

interface NetworkDocument extends Document {
  networkType: string;
  location: string;
  latency: number;
  downloadSpeedMbps: number;
  uploadSpeedMbps: number;
  optimizationStatus: boolean;
  clientUsage: ClientUsage[];
  coverage: Coverage;
  securityLevel: string;
  spectrumBands: string[];
  connectedDevices: number;
  topApplications: string[];
  supportingTechnologies: string[];
  upgradableTo6G?: boolean;
  upgradableTo5G?: boolean;
  upgradableTo4G?: boolean;
  upgradableTo3G?: boolean;
}

const clientUsageSchema = new mongoose.Schema({
  device: { type: String, required: true },
  usagePercentage: { type: Number, required: true },
});

const coverageSchema = new mongoose.Schema({
  indoor: { type: Number, required: true },
  outdoor: { type: Number, required: true },
});

const networkSchema = new mongoose.Schema<NetworkDocument>({
  networkType: { type: String, required: true },
  location: { type: String, required: true },
  latency: { type: Number, required: true },
  downloadSpeedMbps: { type: Number, required: true },
  uploadSpeedMbps: { type: Number, required: true },
  optimizationStatus: { type: Boolean, required: true },
  clientUsage: { type: [clientUsageSchema], required: true },
  coverage: { type: coverageSchema, required: true },
  securityLevel: { type: String, required: true },
  spectrumBands: { type: [String], required: true },
  connectedDevices: { type: Number, required: true },
  topApplications: { type: [String], required: true },
  supportingTechnologies: { type: [String], required: true },
  upgradableTo6G: { type: Boolean },
  upgradableTo5G: { type: Boolean },
  upgradableTo4G: { type: Boolean },
  upgradableTo3G: { type: Boolean },
});

const NetworkModel = mongoose.model<NetworkDocument>('Network', networkSchema);

export default NetworkModel;