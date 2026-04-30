// Configurator.tsx

import { useState } from "react";
import PinConfig from "../../components/PinConfig/PinConfig";
import type { PinData } from "../../constants/PinConfig.types";
import { defaultPin } from "../../constants/gpioOptions";
import { generateGpioCode } from "../../api/gpioAPI";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import styles from "./Configurator.module.scss";

function Configurator() {
  const [pins, setPins] = useState<PinData[]>([]);
  const [generatedCode, setGeneratedCode] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleGenerate() {
    try {
      if (pins.length === 0) {
        setErrors(["Add at least one pin before generating code"]);
        return;
      }

      setIsLoading(true);

      const result = await generateGpioCode(pins);
      if (result.success) {
        setGeneratedCode(result.generatedCode);
        setErrors([]);
      } else {
        setGeneratedCode("");
        setErrors(result.errors);
      }
    } catch (err) {
      setErrors([
        `Network error: ${err instanceof Error ? err.message : "unknown"}`,
      ]);
      setGeneratedCode("");
    } finally {
      setIsLoading(false);
    }
  }

  function handleRemove(pin: PinData) {
    const newPins = pins.filter((p) => p.id !== pin.id);
    setPins(newPins);
    if (newPins.length === 0) {
      setGeneratedCode("");
      setErrors([]);
    }
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>MCUGen – STM32 Configurator</h1>
      <div className={styles.layout}>
        <div className={styles.left}>
          <div className={styles.configuration}>
            {pins.length === 0 ? (
              <div className={styles.empty}>
                No pins configurated yet. click "Add Pin" to get started
              </div>
            ) : (
              pins.map((pin) => (
                <PinConfig
                  key={pin.id}
                  pin={pin}
                  onChange={(updatedPin) => {
                    setPins(
                      pins.map((p) => (p.id === pin.id ? updatedPin : p)),
                    );
                  }}
                  onRemove={() => handleRemove(pin)}
                />
              ))
            )}
          </div>

          <div className={styles.actions}>
            <button
              className={styles.button}
              onClick={() =>
                setPins([...pins, { ...defaultPin, id: crypto.randomUUID() }])
              }
              disabled={isLoading}
            >
              Add Pin
            </button>
            <button
              className={`${styles.button} ${styles.primaryButton}`}
              onClick={handleGenerate}
              disabled={isLoading}
            >
              Generate Code
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.codePanel}>
            <div className={styles.panelLabel}>Generated Code</div>
            {isLoading ? (
              <LoadingSpinner />
            ) : generatedCode ? (
              <pre className={styles.code}>{generatedCode}</pre>
            ) : (
              <div className={styles.placeholder}></div>
            )}

            {errors.length > 0 && (
              <ul className={styles.errors}>
                {errors.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configurator;
