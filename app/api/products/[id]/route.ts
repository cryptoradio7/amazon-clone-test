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

// GET single product
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const product = products.find(p => p.id === parseInt(params.id))

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}

// PUT update product
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const index = products.findIndex(p => p.id === parseInt(params.id))
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
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
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    )
  }
}

// DELETE product
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const index = products.findIndex(p => p.id === parseInt(params.id))
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    products = products.filter(p => p.id !== parseInt(params.id))

    return NextResponse.json(
      { message: 'Product deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    )
  }
}