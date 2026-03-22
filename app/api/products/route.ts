import { NextRequest, NextResponse } from 'next/server'

// Mock database - in-memory for POC
let products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    description: "Latest Apple smartphone with A17 Pro chip",
    price: 1199.99,
    imageUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch?wid=5120&hei=2880&fmt=webp&qlt=70&.v=1693009279096",
    category: "Electronics",
    createdAt: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    name: "MacBook Air M3",
    description: "Ultra-thin laptop with Apple Silicon",
    price: 1299.99,
    imageUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367618084",
    category: "Electronics",
    createdAt: "2024-02-20T14:45:00Z"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    description: "Noise cancelling wireless headphones",
    price: 399.99,
    imageUrl: "https://m.media-amazon.com/images/I/61vJ6OijDaL._AC_SL1500_.jpg",
    category: "Electronics",
    createdAt: "2024-03-10T09:15:00Z"
  }
]

// GET all products
export async function GET() {
  return NextResponse.json(products)
}

// POST create new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.name || !body.price) {
      return NextResponse.json(
        { error: 'Name and price are required' },
        { status: 400 }
      )
    }

    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      name: body.name,
      description: body.description || '',
      price: parseFloat(body.price),
      imageUrl: body.imageUrl || 'https://via.placeholder.com/300',
      category: body.category || 'Uncategorized',
      createdAt: new Date().toISOString()
    }

    products.push(newProduct)
    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}