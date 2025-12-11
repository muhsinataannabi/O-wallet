import { Bell } from "lucide-react";

export default function Walletheader() {

  return (
    <div className="bg-gradient-primary-dark w-full h-auto text-white">
      <header className="px-6 pt-6 pb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-semibold uppercase">hi, muhsinat</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2">
              <Bell className="w-6 h-6 text-white" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2">
                0
              </span>
            </button>
          </div>
        </div>
      </header>
      </div>
      );
}