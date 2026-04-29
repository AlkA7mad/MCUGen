
export interface PinConfigProps {
    pin: PinData;
    onChange: (updatedPin: PinData) => void;
    onRemove: () => void;
};

export interface PinData {
    id: string;
    port: string;
    pin: string;
    mode: string;
    outputType: string;
    outputSpeed: string;
    pullType: string;
};