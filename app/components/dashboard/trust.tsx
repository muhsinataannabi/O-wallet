import { ShieldCheck, Lock, Fingerprint } from "lucide-react";

export default function Trust() {
  const trustItems = [
    {
      icon: ShieldCheck,
      text: "Bank-Grade Security",
    },
    {
      icon: ShieldCheck,
      text: "Fraud Protection",
    },
    {
      icon: Lock,
      text: "PIN Protection",
    },
    {
      icon: Fingerprint,
      text: "Biometric Security",
    },
  ];

  return (
    <div id="security" className="scroll-mt-24">
       <h1 className="text-center text-3xl font-bold text-gray-900 mb-12">
        Security
      </h1>
    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 px-5 py-6">
      
      {trustItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl"
          >
            <Icon className="w-4 h-4 text-blue-600" />
            <span>{item.text}</span>
          </div>
        );
      })}
    </div>
    </div>
  );
}