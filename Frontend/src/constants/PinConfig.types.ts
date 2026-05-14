import type { PortInfo } from "./boardData.type";
import type { GpioDropdownOptions } from "./options.type";

export interface PinConfigProps {
    pin: PinData;
    options: GpioDropdownOptions
    ports: { [key: string]: PortInfo}
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