'use client'

import { useState } from 'react'

export default function AddProductButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    category: 'Electronics'
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          imageUrl: formData.imageUrl || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect fill="%23f0f0f0" width="300" height="300"/><text x="150" y="150" text-anchor="middle" dy=".3em" fill="%23999" font-size="20">Image</text></svg>'
        })
      })

      if (response.ok) {
        setFormData({ name: '', description: '', price: '', imageUrl: '', category: 'Electronics' })
        setIsModalOpen(false)
        window.location.reload()
      }
    } catch {
      // silent fail for POC
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-sm text-white px-3 py-1 border border-transparent hover:border-white rounded whitespace-nowrap font-bold"
      >
        + Vendre
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-[#F0F2F2] border-b border-[#D5D9D9] px-6 py-4 flex justify-between items-center">
              <h2 className="text-lg font-bold text-[#0F1111]">Ajouter un produit</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#565959] hover:text-[#0F1111] text-xl leading-none"
              >
                &#x2715;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-[#0F1111] mb-1">
                  Nom du produit <span className="text-[#B12704]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-1.5 border border-[#888C8C] rounded text-sm shadow-inner focus:border-[#007185] focus:ring-1 focus:ring-[#007185] focus:outline-none"
                  placeholder="ex: iPhone 15 Pro"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0F1111] mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-1.5 border border-[#888C8C] rounded text-sm shadow-inner focus:border-[#007185] focus:ring-1 focus:ring-[#007185] focus:outline-none"
                  placeholder="Description du produit..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#0F1111] mb-1">
                    Prix (EUR) <span className="text-[#B12704]">*</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full px-3 py-1.5 border border-[#888C8C] rounded text-sm shadow-inner focus:border-[#007185] focus:ring-1 focus:ring-[#007185] focus:outline-none"
                    placeholder="999.99"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#0F1111] mb-1">
                    Catégorie
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 border border-[#888C8C] rounded text-sm bg-[#F0F2F2] shadow-sm focus:border-[#007185] focus:ring-1 focus:ring-[#007185] focus:outline-none"
                  >
                    <option value="Electronics">High-Tech</option>
                    <option value="Books">Livres</option>
                    <option value="Clothing">Mode</option>
                    <option value="Home">Maison</option>
                    <option value="Sports">Sports</option>
                    <option value="Other">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#0F1111] mb-1">
                  URL de l&apos;image
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 border border-[#888C8C] rounded text-sm shadow-inner focus:border-[#007185] focus:ring-1 focus:ring-[#007185] focus:outline-none"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-[#D5D9D9] rounded bg-white hover:bg-[#F7FAFA] text-sm text-[#0F1111] shadow-sm"
                  disabled={loading}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-buy py-2 text-sm font-bold"
                  disabled={loading}
                >
                  {loading ? 'Ajout en cours...' : 'Ajouter le produit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
