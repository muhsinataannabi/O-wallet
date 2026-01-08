"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Delete } from "lucide-react";

type PinModalProps = {
  mode: "create" | "verify";
  onSuccess: () => void;
  onForgot?: () => void;
};

export default function PinModal({ mode, onSuccess, onForgot }: PinModalProps) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
function addDigit(digit: string) {
  if (pin.length < 4) {
    const newPin = pin + digit;
    setPin(newPin);
    setError(false);

    if (newPin.length === 4) {
      setTimeout(submitPin, 150);
    }
  }
}
  
  function removeDigit() {
    setPin(pin.slice(0, -1));
  }

  function submitPin() {
    if (pin.length !== 4) return;
    
    if (mode === "create") {
  const storedUser = localStorage.getItem("user");
  if (!storedUser) return;

  const user = JSON.parse(storedUser);
  localStorage.setItem(`pin_${user.email}`, pin);
  onSuccess();
} else {
  const storedUser = localStorage.getItem("user");
  if (!storedUser) return;

  const user = JSON.parse(storedUser);
  const savedPin = localStorage.getItem(`pin_${user.email}`);

  if (pin === savedPin) {
    onSuccess();
  } else {
    setError(true);
    setPin("");
  }
}
    
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl w-full max-w-sm p-6"
      >
        <h2 className="text-center text-xl font-semibold mb-6">
          {mode === "create" ? "Create your PIN" : "Enter your PIN"}
        </h2>

        {/* PIN DOTS */}
        <motion.div
          animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
          className="flex justify-center gap-4 mb-6"
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full ${
                pin.length > i ? "bg-primary-bright" : "bg-gray-300"
              }`}
            />
          ))}
        </motion.div>

        {/* ERROR TEXT */}
        {error && (
          <p className="text-center text-red-500 text-sm mb-3">
            Incorrect PIN
          </p>
        )}

        {/* KEYPAD */}
        <div className="grid grid-cols-3 gap-4">
          {[1,2,3,4,5,6,7,8,9].map((num) => (
            <button
              key={num}
              onClick={() => addDigit(num.toString())}
              className="h-14 rounded-xl bg-gray-100 text-xl font-semibold active:bg-gray-200"
            >
              {num}
            </button>
          ))}

          {/* EMPTY */}
          <div />

          {/* ZERO */}
          <button
            onClick={() => addDigit("0")}
            className="h-14 rounded-xl bg-gray-100 text-xl font-semibold active:bg-gray-200"
          >
            0
          </button>

          {/* DELETE */}
          <button
            onClick={removeDigit}
            className="h-14 rounded-xl bg-gray-100 flex items-center justify-center active:bg-gray-200"
          >
            <Delete />
          </button>
        </div>

        {/* SUBMIT */}
        <button
          onClick={submitPin}
          disabled={pin.length !== 4}
          className={`w-full mt-6 py-3 rounded-xl text-white font-medium transition ${
            pin.length === 4
              ? "bg-primary-bright"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
   {error && (
  <button
    onClick={onForgot}
    className="text-sm text-primary-bright mt-4 text-center w-full"
  >
    Forgot PIN?
  </button>
)}
       
      </motion.div>
    </div>
  );
}