import type { PinData } from "../constants/PinConfig.type";

interface CodeGenerationResult {
    success: boolean;
    generatedCode: string;
    errors: string[];
}

export async function generateGpioCode(pins: PinData[]): Promise<CodeGenerationResult> {
    
    const payload = pins.map(p => ({...p, pin: Number(p.pin) }));

    const response = await fetch("http://localhost:5131/Gpio", {
        
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    if (response.status >= 500) {
        throw new Error(`Server error: ${response.status}`);
    }

    const data: CodeGenerationResult = await response.json();

    return data;
}