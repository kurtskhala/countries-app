import {
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  useRef,
  useState,
} from "react";
import styles from "./InputOTP.module.css";

const InputOTP: React.FC<{ length: number }> = ({ length }) => {
  const [inputs, setInputs] = useState(Array(length).fill(""));

  const inputRefs = useRef<HTMLInputElement[]>(Array(length).fill(null));

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if ((parseInt(value) >= 0 && parseInt(value) <= 9) || value === "") {
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);
      if (value.length === 1 && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
      if (value.length === 0 && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      if (value.length === 1 && index === length - 1) {
        inputRefs.current[index]?.blur();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newInputs = [...inputs];
      newInputs[index] = "";
      setInputs(newInputs);

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    if (/^\d+$/.test(pastedData)) {
      const pastedArray = pastedData.slice(0, length).split("");
      const newInputs = [...inputs];

      pastedArray.forEach((value, index) => {
        if (index < length) {
          newInputs[index] = value;
        }
      });
      setInputs(newInputs);

      if (pastedArray.length > 4) {
        inputRefs.current[0]?.blur();
      } else {
        inputRefs.current[pastedArray.length]?.focus();
      }
    }
  };

  return (
    <div className={styles.OTPContainer}>
      {inputs.map((input, index) => {
        return (
          <input
            className={styles.OTPInput}
            ref={(element) => {
              inputRefs.current[index] = element as HTMLInputElement;
            }}
            key={index}
            value={input}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            maxLength={1}
          />
        );
      })}
    </div>
  );
};

export default InputOTP;
