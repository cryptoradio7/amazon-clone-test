import { NextRequest, NextResponse } from 'next/server'

// Import shared products from parent route — not possible with in-memory mock
// So we duplicate the reference (in a real app, this would be a DB call)
let products = [
  { id: 1, name: "Apple iPhone 15 Pro Max 256 Go - Titane naturel", description: "Puce A17 Pro.", price: 1479.00, imageUrl: "/products/iphone15.svg", category: "High-Tech", createdAt: "2024-01-15T10:30:00Z" },
  { id: 2, name: "Apple MacBook Air 13 pouces avec puce M3 - Minuit", description: "Puce Apple M3.", price: 1199.00, imageUrl: "/products/macbook-air.svg", category: "Informatique", createdAt: "2024-02-20T14:45:00Z" },
  { id: 3, name: "Sony WH-1000XM5 Casque sans fil", description: "Réduction de bruit.", price: 349.99, imageUrl: "/products/sony-xm5.svg", category: "High-Tech", createdAt: "2024-03-10T09:15:00Z" },
]

// GET single product
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json(product)
}

// PUT update product
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await request.json()
  const index = products.findIndex(p => p.id === parseInt(id))

  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  products[index] = {
    ...products[index],
    name: body.name || products[index].name,
    description: body.description || products[index].description,
    price: body.price !== undefined ? parseFloat(body.price) : products[index].price,
    imageUrl: body.imageUrl || products[index].imageUrl,
    category: body.category || products[index].category
  }

  return NextResponse.json(products[index])
}

// DELETE product
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const index = products.findIndex(p => p.id === parseInt(id))

  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  products = products.filter(p => p.id !== parseInt(id))

  return NextResponse.json({ message: 'Product deleted successfully' })
}
