import ProductList from '@/app/components/ProductList'
import AddProductButton from '@/app/components/AddProductButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Amazon Clone Test</h1>
              <p className="text-gray-600">POC rapide - Catalogue de produits</p>
            </div>
            <AddProductButton />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Catalogue des produits</h2>
          <p className="text-gray-600">
            Application CRUD complète avec Next.js 16, Prisma, SQLite et Tailwind CSS.
            Inspirée de l'interface Amazon.fr.
          </p>
        </div>

        <ProductList />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500">
            POC développé par l'équipe AgileVizion • Déploiement Vercel + GitHub
          </p>
        </div>
      </footer>
    </div>
  )
}
