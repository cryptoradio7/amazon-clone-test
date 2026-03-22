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
        alert('Product updated successfully!')
        window.location.reload()
      } else {
        alert('Failed to update product')
      }
    } catch (err) {
      alert('Error updating product')
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR')
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        {isEditing ? (
          <div className="space-y-3">
            <input
              type="text"
              value={editedProduct.name}
              onChange={(e) => setEditedProduct({...editedProduct, name: e.target.value})}
              className="w-full px-3 py-2 border rounded"
              placeholder="Product name"
            />
            <textarea
              value={editedProduct.description}
              onChange={(e) => setEditedProduct({...editedProduct, description: e.target.value})}
              className="w-full px-3 py-2 border rounded"
              placeholder="Description"
              rows={2}
            />
            <input
              type="number"
              value={editedProduct.price}
              onChange={(e) => setEditedProduct({...editedProduct, price: parseFloat(e.target.value) || 0})}
              className="w-full px-3 py-2 border rounded"
              placeholder="Price"
              step="0.01"
            />
            <input
              type="text"
              value={editedProduct.category}
              onChange={(e) => setEditedProduct({...editedProduct, category: e.target.value})}
              className="w-full px-3 py-2 border rounded"
              placeholder="Category"
            />
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {product.category}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-gray-900">{formatPrice(product.price)}</span>
              <span className="text-xs text-gray-500">Added: {formatDate(product.createdAt)}</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}