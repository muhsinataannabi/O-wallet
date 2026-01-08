
export default function Footer() {
  return (
    <footer className="bg-gradient-primary-dark border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm text-white">

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#howToUse">How it works</a></li>
             <li><a href="#security">Security</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="font-semibold text-white mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Security</a></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li>support@owallet.com</li>
            <li>Help Center</li>
          </ul>
        </div>

      </div>

      <div className="border-t text-center text-xs text-blue-100 py-4">
        © {new Date().getFullYear()} O-Wallet. All rights reserved.
      </div>
    </footer>
  );
}