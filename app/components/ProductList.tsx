'use client'

import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

interface Product {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  category: string
  createdAt: string
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/products')
      if (!response.ok) throw new Error('Failed to fetch products')
      const data = await response.json()
      setProducts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Supprimer ce produit ?')) return

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setProducts(products.filter(p => p.id !== id))
      }
    } catch {
      // silent fail for POC
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-[#FF9900] border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-[#565959]">Chargement des produits...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white border border-[#D5D9D9] rounded-sm p-6 text-center">
        <p className="text-[#B12704] font-bold mb-2">Erreur de chargement</p>
        <p className="text-sm text-[#565959] mb-4">{error}</p>
        <button onClick={fetchProducts} className="btn-buy px-6">Réessayer</button>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="bg-white border border-[#D5D9D9] rounded-sm p-12 text-center">
        <svg className="w-16 h-16 mx-auto text-[#D5D9D9] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <p className="text-lg font-bold text-[#0F1111] mb-1">Aucun produit</p>
        <p className="text-sm text-[#565959]">Ajoutez votre premier produit avec le bouton &quot;+ Vendre&quot; ci-dessus.</p>
      </div>
    )
  }

  return (
    <>
      {/* Results count */}
      <div className="mb-3">
        <span className="text-sm text-[#565959]">
          1-{products.length} sur {products.length} résultats
        </span>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1px] bg-[#DDD]">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  )
}
