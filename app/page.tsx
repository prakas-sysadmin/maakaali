import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold text-center mb-8 text-gold-500">Welcome to Maa Kali Temple</h1>
      <div className="flex flex-col items-center justify-between">
        <div className="w-full max-w-4xl mb-8">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maa_kali.jpg-goWl5SIvzuKNXgJ8gttR2fjCcAz0Hx.jpeg"
              alt="Decorated shrine of Maa Kali with vibrant red and yellow ornaments"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-center text-sm text-gray-400 mt-2">
            The divine shrine of Maa Kali adorned with traditional decorations
          </p>
        </div>
        <div className="max-w-2xl text-center">
          <p className="text-xl mb-6">
            Experience the divine power and spiritual significance of Maa Kali, the fierce and compassionate goddess of
            time, creation, destruction, and power.
          </p>
          <Link
            href="/about"
            className="inline-block bg-gold-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gold-400 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

