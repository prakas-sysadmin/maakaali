export default function Visit() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gold-500">Plan Your Visit</h1>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gold-400">Location</h2>
        <p className="mb-6">123 Temple Street, Spiritual City, Divine State, 12345</p>

        <h2 className="text-2xl font-semibold mb-4 text-gold-400">Opening Hours</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Monday - Friday: 6:00 AM - 9:00 PM</li>
          <li>Saturday - Sunday: 5:00 AM - 10:00 PM</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gold-400">Aarti Timings</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Morning Aarti: 7:00 AM</li>
          <li>Evening Aarti: 7:00 PM</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gold-400">Guidelines for Visitors</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Dress modestly and respectfully</li>
          <li>Remove shoes before entering the main temple area</li>
          <li>Maintain silence and avoid loud conversations</li>
          <li>Photography is not allowed inside the main shrine</li>
        </ul>

        <p className="text-lg">
          For more information or to schedule a group visit, please contact us at info@maakaalitemple.com or call +1
          (123) 456-7890.
        </p>
      </div>
    </div>
  )
}

