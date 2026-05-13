
export interface BoardData {
    board: BoardDetails;
    gpio: GpioOptions;
    pins: { [key: string]: PinInfo};
}

export interface Board {
    id: string;
    name: string;
    mcu: string;
    package: string;
}

interface BoardDetails extends Board {
    defaultReservedPins: { [key: string]: string};
}

interface GpioOptions {
    ports: { [key: string]: PortInfo};
    modes: string[];
    outputTypes: string[];
    speeds: string[];
    pulls: string[];
}

interface PinInfo {
    position: BigInteger;
    fiveVTolerant: boolean;
    analog: string[];
    af: { [key: string]: string};
}

interface PortInfo {
    baseAddress: string;
    pins: BigInteger[];
}
