export default function Footer() {
  return (
    <footer className="bg-barclays-navy text-white/70 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-barclays-blue flex items-center justify-center font-bold text-sm text-white">
                B
              </div>
              <span className="text-white text-lg font-bold">Barclays</span>
            </div>
            <p className="text-sm leading-relaxed">
              Barclays is a British multinational universal bank. Your trusted partner for personal and business banking.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Banking</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Current Accounts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Savings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Credit Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mortgages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Centre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FSCS Protection</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            \u00a9 2026 Barclays Portal Demo. This is a prototype \u2014 not affiliated with Barclays Bank PLC.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              256-bit SSL Encrypted
            </span>
            <span>FSCS Protected</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
