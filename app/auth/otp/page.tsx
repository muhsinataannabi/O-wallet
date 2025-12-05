"use client";

import { useState, useRef } from "react";

export default function OTPPage() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (paste.length > 0) {
      const newOtp = paste.split("").concat(["", "", "", "", "", ""]).slice(0, 6);
      setOtp(newOtp);
      inputsRef.current[Math.min(paste.length - 1, 5)]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary-light flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-primary-dark text-transparent bg-clip-text">Enter OTP</h2>
          <p className="mt-2 text-gray-600">We sent a 6-digit code to your phone</p>
        </div>

        <form className="mt-8">
          <div className="flex gap-3 justify-center" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-8 h-8  lg:w-14 lg:h-14 text-2xl font-bold text-center border-2 border-gray-300 rounded-lg focus:border-primary-light focus:outline-none transition-all"
                inputMode="numeric"
                autoComplete="one-time-code"
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={otp.some((d) => !d)}
              className="w-full max-w-xs py-3 px-8 bg-gradient-primary-dark text-white font-semibold rounded-xl hover:shadow-2xl disabled:bg-gray-300 disabled:cursor-not-allowed transition shadow-lg"
            >
              Verify OTP
            </button>
          </div>

          <p className="text-center mt-6 text-sm text-gray-600">
            Didn’t receive code?{" "}
            <button type="button" className="font-semibold text-primary-light hover:underline">
              Resend
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}