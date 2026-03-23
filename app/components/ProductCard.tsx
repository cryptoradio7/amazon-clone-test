'use client'

import { useState } from 'react'

interface Product {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  category: string
  createdAt: string
}

interface ProductCardProps {
  product: Product
  onDelete: (id: number) => void
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-[#FFA41C]' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-[#007185]">{Math.floor(Math.random() * 500 + 50)}</span>
    </div>
  )
}

export default function ProductCard({ product, onDelete }: ProductCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedProduct, setEditedProduct] = useState(product)

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedProduct)
      })

      if (response.ok) {
        setIsEditing(false)
        window.location.reload()
      }
    } catch {
      // silent fail for POC
    }
  }

  const formatPrice = (price: number) => {
    const euros = Math.floor(price)
    const cents = Math.round((price - euros) * 100).toString().padStart(2, '0')
    return { euros: euros.toLocaleString('fr-FR'), cents }
  }

  const { euros, cents } = formatPrice(product.price)

  return (
    <div className="bg-white rounded-sm group relative flex flex-col h-full">
      {/* Product Image */}
      <div className="relative pt-4 px-4 flex justify-center items-center h-[220px] cursor-pointer">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-h-[200px] max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect fill="%23f0f0f0" width="300" height="300"/><text x="150" y="150" text-anchor="middle" dy=".3em" fill="%23999" font-size="20">Image</text></svg>'
          }}
        />
        {/* Category badge */}
        <span className="absolute top-2 left-2 bg-[#232F3E] text-white text-[10px] font-medium px-2 py-0.5 rounded-sm">
          {product.category}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-3 pt-3 flex flex-col flex-1">
        {isEditing ? (
          <div className="space-y-2">
            <input
              type="text"
              value={editedProduct.name}
              onChange={(e) => setEditedProduct({...editedProduct, name: e.target.value})}
              className="w-full px-2 py-1 border border-[#888C8C] rounded text-sm focus:border-[#007185] focus:ring-1 focus:ring-[#007185] focus:outline-none"
            />
            <textarea
              value={editedProduct.description}
              onChange={(e) => setEditedProduct({...editedProduct, description: e.target.value})}
              className="w-full px-2 py-1 border border-[#888C8C] rounded text-sm focus:border-[#007185] focus:ring-1 focus:ring-[#007185] focus:outline-none"
              rows={2}
            />
            <input
              type="number"
              value={editedProduct.price}
              onChange={(e) => setEditedProduct({...editedProduct, price: parseFloat(e.target.value) || 0})}
              className="w-full px-2 py-1 border border-[#888C8C] rounded text-sm focus:border-[#007185] focus:ring-1 focus:ring-[#007185] focus:outline-none"
              step="0.01"
            />
            <div className="flex gap-2">
              <button onClick={handleSave} className="flex-1 btn-buy text-xs py-1.5">Enregistrer</button>
              <button onClick={() => setIsEditing(false)} className="flex-1 text-xs py-1.5 border border-[#D5D9D9] rounded-full bg-white hover:bg-[#F7FAFA] text-[#0F1111]">Annuler</button>
            </div>
          </div>
        ) : (
          <>
            {/* Title */}
            <h3 className="text-sm text-[#0F1111] hover:text-[#C7511F] cursor-pointer line-clamp-2 leading-5 mb-1">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-xs text-[#565959] line-clamp-2 mb-2">{product.description}</p>

            {/* Rating */}
            <StarRating rating={4} />

            {/* Price */}
            <div className="mt-2 mb-1">
              <span className="text-2xl font-light text-[#0F1111]">{euros}</span>
              <span className="text-xs align-top relative top-[2px] text-[#0F1111]">,{cents}&nbsp;€</span>
            </div>

            {/* Prime */}
            <div className="flex items-center gap-1 mb-2">
              <span className="prime-badge italic">prime</span>
              <span className="text-xs text-[#565959]">Livraison GRATUITE</span>
            </div>

            {/* Delivery info */}
            <p className="text-xs text-[#565959] mb-3">
              Livraison <span className="font-bold text-[#0F1111]">lundi 24 mars</span>
            </p>

            {/* Action buttons */}
            <div className="mt-auto space-y-1.5">
              <button className="w-full btn-buy text-sm py-2">
                Ajouter au panier
              </button>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex-1 text-xs py-1.5 border border-[#D5D9D9] rounded-full bg-white hover:bg-[#F7FAFA] text-[#0F1111]"
                >
                  Modifier
                </button>
                <button
                  onClick={() => onDelete(product.id)}
                  className="flex-1 text-xs py-1.5 border border-[#D5D9D9] rounded-full bg-white hover:bg-[#FFF0F0] text-[#B12704]"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
