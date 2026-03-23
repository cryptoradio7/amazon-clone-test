import { NextRequest, NextResponse } from 'next/server'

// Mock database - in-memory for POC
let products = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro Max 256 Go - Titane naturel",
    description: "Puce A17 Pro. Titane de qualité aérospatiale. Bouton Action personnalisable. Le smartphone le plus puissant d'Apple.",
    price: 1479.00,
    imageUrl: "/products/iphone15.svg",
    category: "High-Tech",
    createdAt: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    name: "Apple MacBook Air 13 pouces avec puce M3 - Minuit",
    description: "Puce Apple M3 avec CPU 8 coeurs et GPU 10 coeurs. 8 Go de mémoire unifiée. 256 Go de stockage SSD. Écran Liquid Retina.",
    price: 1199.00,
    imageUrl: "/products/macbook-air.svg",
    category: "Informatique",
    createdAt: "2024-02-20T14:45:00Z"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Casque sans fil à réduction de bruit",
    description: "Réduction de bruit leader du marché. Jusqu'à 30h d'autonomie. Audio haute résolution. Appels mains libres cristallins.",
    price: 349.99,
    imageUrl: "/products/sony-xm5.svg",
    category: "High-Tech",
    createdAt: "2024-03-10T09:15:00Z"
  },
  {
    id: 4,
    name: "Samsung Galaxy Tab S9 FE 10.9\" 128 Go WiFi - Gris",
    description: "Écran 10.9 pouces. Processeur Exynos 1380. S Pen inclus. Résistante à l'eau et à la poussière IP68.",
    price: 449.00,
    imageUrl: "/products/galaxy-tab.svg",
    category: "Informatique",
    createdAt: "2024-04-05T11:00:00Z"
  },
  {
    id: 5,
    name: "Logitech MX Master 3S - Souris sans fil ergonomique",
    description: "Clic silencieux. Défilement MagSpeed. Suivi 8K DPI. USB-C. Compatible Mac, Windows, Linux, Chrome OS.",
    price: 99.99,
    imageUrl: "/products/mx-master.svg",
    category: "Informatique",
    createdAt: "2024-05-12T16:30:00Z"
  },
  {
    id: 6,
    name: "Amazon Echo Dot (5e génération) avec horloge - Bleu nuit",
    description: "Notre enceinte connectée Alexa la plus vendue. Son plus puissant et plus riche. Affichage LED amélioré.",
    price: 69.99,
    imageUrl: "/products/echo-dot.svg",
    category: "High-Tech",
    createdAt: "2024-06-01T08:00:00Z"
  },
  {
    id: 7,
    name: "Kindle Paperwhite (16 Go) - Noir",
    description: "Écran 6,8 pouces sans reflets. Température d'éclairage réglable. Autonomie jusqu'à 10 semaines. Résistant à l'eau IPX8.",
    price: 159.99,
    imageUrl: "/products/kindle.svg",
    category: "High-Tech",
    createdAt: "2024-07-20T13:45:00Z"
  },
  {
    id: 8,
    name: "JBL Charge 5 Enceinte portable Bluetooth - Noir",
    description: "Son JBL Pro original. Basses percutantes. Batterie intégrée 20h. Étanche IP67. Powerbank intégré.",
    price: 149.99,
    imageUrl: "/products/jbl-charge.svg",
    category: "High-Tech",
    createdAt: "2024-08-15T10:00:00Z"
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
      imageUrl: body.imageUrl || '',
      category: body.category || 'Autre',
      createdAt: new Date().toISOString()
    }

    products.push(newProduct)
    return NextResponse.json(newProduct, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}
