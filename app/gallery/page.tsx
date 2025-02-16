import Image from "next/image"

const images = [
  { src: "/placeholder.svg?height=300&width=400", alt: "Maa Kali Idol" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Temple Exterior" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Temple Interior" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Devotees Praying" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Aarti Ceremony" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Temple at Night" },
]

export default function Gallery() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gold-500">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative h-64 rounded-lg overflow-hidden">
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

