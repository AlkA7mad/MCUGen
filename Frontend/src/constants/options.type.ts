
interface DropdownOption {
  label: string;
  value: string;
}

export interface GpioDropdownOptions {
  modes: DropdownOption[];
  outputTypes: DropdownOption[];
  speeds: DropdownOption[];
  pulls: DropdownOption[];
  ports: DropdownOption[];
}