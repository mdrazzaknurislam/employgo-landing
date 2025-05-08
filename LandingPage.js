export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-blue-600 text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">বিদেশে চাকরি, নিশ্চিন্তে – আমরাই আছি আপনার পাশে</h1>
        <p className="mt-2 text-lg">EmployGo Agency</p>
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        {/* Intro */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">আমাদের সম্পর্কে</h2>
          <p className="text-md">আমরা দক্ষ লোকজন পাঠাই দুবাই, সৌদি, কাতার – ভিসা প্রসেস সহজ, দ্রুত। <br/>
            <span className="font-semibold">Our main goal is to create Overseas Employment for People.</span>
          </p>
        </section>

        {/* Job Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">চাকরির বিবরণ</h2>
          <div className="bg-gray-100 p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">ক্লিনার – সৌদি</h3>
            <p>📆 ২ বছরের চুক্তি</p>
            <p>💰 বেতন: ১২০০ রিয়াল</p>
            <p>🕒 ডিউটি: ১২ ঘন্টা</p>
          </div>
        </section>

        {/* Success Story */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">সফল প্রার্থী</h2>
          <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl shadow-md">
            <img 
              src="/mnt/data/IMG_041.jpg" 
              alt="Successful Candidate" 
              className="w-24 h-24 object-cover rounded-full border-2 border-green-400"
            />
            <p className="text-md">এই প্রার্থী EmployGo Agency এর মাধ্যমে সফলভাবে সৌদি আরবে গেছেন।</p>
          </div>
        </section>

        {/* Apply Now */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">আবেদন করুন</h2>
          <form className="bg-gray-50 p-4 rounded-xl shadow-md">
            <input type="text" placeholder="আপনার নাম" className="w-full p-2 mb-2 border rounded" />
            <input type="tel" placeholder="মোবাইল নম্বর" className="w-full p-2 mb-2 border rounded" />
            <textarea placeholder="অতিরিক্ত তথ্য (যদি থাকে)" className="w-full p-2 mb-2 border rounded"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">সাবমিট করুন</button>
          </form>
        </section>

        {/* Contact Button */}
        <section className="text-center mt-10">
          <a href="https://wa.me/8801888465555" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600">
              WhatsApp এ যোগাযোগ করুন
            </button>
          </a>
        </section>
      </main>
    </div>
  );
}