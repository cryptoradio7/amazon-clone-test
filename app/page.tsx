import ProductList from '@/app/components/ProductList'
import AddProductButton from '@/app/components/AddProductButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EAEDED]">
      {/* Amazon-style Header */}
      <header className="bg-[#131921] text-white">
        {/* Top bar */}
        <div className="max-w-[1500px] mx-auto px-4 py-2 flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-1 py-1 px-2 border border-transparent hover:border-white rounded cursor-pointer">
            <span className="text-2xl font-bold text-white">
              amazon<span className="text-[#FF9900]">.clone</span>
            </span>
            <span className="text-[10px] text-gray-300">.fr</span>
          </div>

          {/* Deliver to */}
          <div className="hidden md:flex items-center gap-1 py-1 px-2 border border-transparent hover:border-white rounded cursor-pointer">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <div className="text-[11px] text-gray-300">Livrer au</div>
              <div className="text-sm font-bold">Luxembourg</div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 flex">
            <select className="hidden md:block bg-[#E6E6E6] text-[#555] text-xs rounded-l px-2 border-r border-gray-300">
              <option>Toutes nos cat.</option>
              <option>Electronics</option>
              <option>Books</option>
              <option>Clothing</option>
              <option>Home</option>
              <option>Sports</option>
            </select>
            <input
              type="text"
              placeholder="Rechercher sur Amazon.clone"
              className="flex-1 px-3 py-2 text-black text-sm focus:outline-none md:rounded-none rounded-l"
            />
            <button className="bg-[#FEBD69] hover:bg-[#F3A847] px-3 rounded-r">
              <svg className="w-5 h-5 text-[#131921]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Account */}
          <div className="hidden lg:flex items-center py-1 px-2 border border-transparent hover:border-white rounded cursor-pointer">
            <div>
              <div className="text-[11px] text-gray-300">Bonjour, identifiez-vous</div>
              <div className="text-sm font-bold">Compte et listes <span className="text-xs">&#9660;</span></div>
            </div>
          </div>

          {/* Orders */}
          <div className="hidden lg:flex items-center py-1 px-2 border border-transparent hover:border-white rounded cursor-pointer">
            <div>
              <div className="text-[11px] text-gray-300">Retours</div>
              <div className="text-sm font-bold">et commandes</div>
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center py-1 px-2 border border-transparent hover:border-white rounded cursor-pointer">
            <div className="relative">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span className="absolute -top-1 right-0 bg-[#FF9900] text-[#131921] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </div>
            <span className="text-sm font-bold ml-1">Panier</span>
          </div>
        </div>

        {/* Sub nav */}
        <div className="bg-[#232F3E]">
          <div className="max-w-[1500px] mx-auto px-4 flex items-center gap-1 py-1 text-sm overflow-x-auto">
            <button className="flex items-center gap-1 px-2 py-1 border border-transparent hover:border-white rounded whitespace-nowrap">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Toutes
            </button>
            {['Meilleures Ventes', 'Livres', 'High-Tech', 'Informatique', 'Jeux vidéo', 'Cuisine', 'Mode'].map((cat) => (
              <button key={cat} className="px-2 py-1 border border-transparent hover:border-white rounded whitespace-nowrap text-sm">
                {cat}
              </button>
            ))}
            <div className="ml-auto">
              <AddProductButton />
            </div>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="bg-gradient-to-b from-[#232F3E] to-[#EAEDED] h-8" />

      {/* Main content */}
      <main className="max-w-[1500px] mx-auto px-4 -mt-4">
        {/* Results header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-[#0F1111]">Nos produits</h1>
            <p className="text-sm text-[#565959]">Catalogue complet</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#565959]">Trier par :</span>
            <select className="text-sm bg-[#F0F2F2] border border-[#D5D9D9] rounded px-2 py-1 text-[#0F1111]">
              <option>En vedette</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Nouveautés</option>
            </select>
          </div>
        </div>

        <ProductList />
      </main>

      {/* Footer Amazon-style */}
      <div className="mt-12">
        {/* Back to top */}
        <a
          href="#"
          className="block w-full bg-[#37475A] hover:bg-[#485769] text-white text-sm py-3 text-center"
        >
          Retour en haut
        </a>

        {/* Footer links */}
        <div className="bg-[#232F3E] text-white">
          <div className="max-w-[1500px] mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-base mb-3">Pour mieux nous connaitre</h3>
              <ul className="space-y-2 text-sm text-[#DDD]">
                <li className="hover:underline cursor-pointer">A propos</li>
                <li className="hover:underline cursor-pointer">Carrières</li>
                <li className="hover:underline cursor-pointer">Développement durable</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base mb-3">Gagnez de l&apos;argent</h3>
              <ul className="space-y-2 text-sm text-[#DDD]">
                <li className="hover:underline cursor-pointer">Vendez sur Amazon</li>
                <li className="hover:underline cursor-pointer">Expédié par Amazon</li>
                <li className="hover:underline cursor-pointer">Partenariat</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base mb-3">Moyens de paiement</h3>
              <ul className="space-y-2 text-sm text-[#DDD]">
                <li className="hover:underline cursor-pointer">Carte bancaire</li>
                <li className="hover:underline cursor-pointer">Chèques-cadeaux</li>
                <li className="hover:underline cursor-pointer">Paiement en plusieurs fois</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base mb-3">Besoin d&apos;aide ?</h3>
              <ul className="space-y-2 text-sm text-[#DDD]">
                <li className="hover:underline cursor-pointer">COVID-19 et Amazon</li>
                <li className="hover:underline cursor-pointer">Suivre un colis</li>
                <li className="hover:underline cursor-pointer">Retours et remboursements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="bg-[#131921] text-center py-4">
          <span className="text-lg font-bold text-white">amazon<span className="text-[#FF9900]">.clone</span></span>
          <p className="text-xs text-gray-400 mt-1">POC AgileVizion - {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  )
}
