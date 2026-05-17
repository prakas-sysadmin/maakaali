export default function Visit() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gold-500">Plan Your Visit</h1>
      <div className="max-w-3xl mx-auto">

        <h2 className="text-2xl font-semibold mb-4 text-gold-400">Opening Hours</h2>
        <ul className="list-disc list-inside mb-6">
          <li><span className="font-semibold"></span>Tuesday and Saturday:   11:00 AM - 2:00 PM (Special Puja for Mental Illness Relief)</li>
          <li><span className="font-semibold"></span>Sunday To Saturday:   10:00 AM - 6:00 PM (Daily Darshan & Rituals) </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-amber-500">Daily Rituals & Aarti Timings</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
          <span className="font-semibold">Morning Nitya Seva:</span> 10:00 AM to 11:00 AM
          </li>
          <li>
          <span className="font-semibold">Evening Sandhya Aarti:</span> 6:00 PM to 7:00 PM
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gold-400">Guidelines for Visitors</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Dress modestly and respectfully</li>
          <li>Remove shoes before entering the main temple area</li>
          <li>Maintain silence and avoid loud conversations</li>
          <li>Photography is not allowed inside the main shrine</li>
        </ul>

        <p className="text-lg mb-12">
          For more Techinal Support information or to schedule a group visit, please contact us at info@sahaspurkalimata.org or call +91 7003069781 (Prakas Rana).
        </p>

        {/* Location + Google Map at the Bottom */}
        <h2 className="text-2xl font-semibold mb-4 text-gold-400">Location</h2>
        <p className="mb-6">
          Sahaspur(Rana Para), Anandapur, Paschim Medinipur, West Bengal, 721122
        </p>

        <div className="mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d664.7530563123248!2d87.41770987054666!3d22.603636923556422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7fd7f205d29a1%3A0x1d7b0ebd56c69b58!2sSahaspur%20Maa%20Kali%20Temple!5e0!3m2!1sen!2sin!4v1742635421535!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
