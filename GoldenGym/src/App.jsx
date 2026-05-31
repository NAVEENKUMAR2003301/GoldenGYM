



import { useState, useEffect } from "react";

// ====================== LOADING ANIMATION (Enhanced Dumbbell) ======================
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <svg
        className="w-28 h-28 animate-bounce drop-shadow-[0_0_20px_#D4AF37]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="8" y="26" width="12" height="12" rx="2" fill="#D4AF37" />
        <rect x="44" y="26" width="12" height="12" rx="2" fill="#D4AF37" />
        <rect x="20" y="29" width="24" height="6" rx="2" fill="#D4AF37" />
        <rect x="6" y="24" width="4" height="16" rx="1" fill="#D4AF37" />
        <rect x="54" y="24" width="4" height="16" rx="1" fill="#D4AF37" />
      </svg>
      <p className="mt-6 text-[#D4AF37] text-xl font-heading tracking-[0.3em] animate-pulse">
        LOADING
      </p>
      <div className="mt-4 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-[#D4AF37] animate-loading-bar" />
      </div>
    </div>
  );
};

// ====================== HEADER ======================
const Header = () => {
  return (
    <header className="bg-black/95 backdrop-blur-sm text-white sticky top-0 z-40 border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-[#D4AF37] font-heading text-3xl tracking-wider">
          <svg className="w-10 h-10 drop-shadow-[0_0_6px_#D4AF37]" viewBox="0 0 64 64" fill="currentColor">
            <rect x="8" y="26" width="12" height="12" rx="2" />
            <rect x="44" y="26" width="12" height="12" rx="2" />
            <rect x="20" y="29" width="24" height="6" rx="2" />
            <rect x="6" y="24" width="4" height="16" rx="1" />
            <rect x="54" y="24" width="4" height="16" rx="1" />
          </svg>
          <span>Golden Gym </span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-subheading uppercase tracking-[0.15em]">
          {["Home", "Services", "Pricing", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${ item.toLowerCase() } `}
              className="relative py-2 group transition-colors hover:text-[#D4AF37]"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <button className="md:hidden text-[#D4AF37] p-2">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

// ====================== HERO SECTION ======================
const Hero = () => {
  return (
    <section id="home" className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAgTSAwIDIwIEwgNjAgMjAgTSAyMCAwIEwgMjAgNjAgTSAwIDMwIEwgNjAgMzAgTSAzMCAwIEwgMzAgNjAgTSAwIDQwIEwgNjAgNDAgTSA0MCAwIEwgNDAgNjAgTSAwIDUwIEwgNjAgNTAgTSA1MCAwIEwgNTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q0YWYzNyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4zIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading leading-none">
            <span className="text-[#D4AF37] drop-shadow-[0_0_15px_#D4AF37]">TRANSFORM</span> YOUR
            <br />
            <span className="text-white">BODY & MIND</span>
          </h1>
          <p className="mt-8 text-gray-300 text-lg sm:text-xl max-w-xl font-body">
            Join the . World‑class equipment, certified coaches, and a community forged in Golden Gym.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a
              href="#pricing"
              className="bg-[#D4AF37] text-black font-subheading font-bold px-10 py-4 rounded-full text-lg uppercase tracking-wider hover:bg-yellow-400 transition-all shadow-[0_0_25px_#D4AF37] hover:shadow-[0_0_35px_#D4AF37] transform hover:-translate-y-1"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="relative border-2 border-[#D4AF37] text-[#D4AF37] font-subheading font-bold px-10 py-4 rounded-full text-lg uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black transition-all hover:shadow-[0_0_25px_#D4AF37] transform hover:-translate-y-1 overflow-hidden group"
            >
              <span className="relative z-10">Explore</span>
              <span className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative group rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.3)] border-2 border-[#D4AF37]/50">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Gym workout"
              className="w-full object-cover max-h-[500px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white font-heading text-2xl tracking-widest"></span>
            </div>
            {/* Animated border gradient */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-black to-[#D4AF37] opacity-30 blur-md animate-border-pulse -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

// ====================== SERVICES SECTION ======================
const servicesData = [
  { icon: "🏋️", title: "Weight Lifting", desc: "Olympic platforms, squat racks, and a massive free weights zone." },
  { icon: "🔥", title: "Six Pack Abs", desc: "HIIT, core circuits, and nutrition plans for a chiseled midsection." },
  { icon: "💪", title: "Fitness Training", desc: "Custom programs from fat loss to muscle gain with expert coaches." },
  { icon: "🏃", title: "Cardio Zone", desc: "Treadmills, bikes, rowing machines – everything for peak endurance." },
  { icon: "🧘", title: "Yoga & Flexibility", desc: "Mobility, stress relief, injury prevention with guided sessions." },
  { icon: "🥗", title: "Nutrition Plans", desc: "Personalized meal plans to fuel performance and accelerate results." },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-[#f5f5f5] py-24 overflow-hidden">
      {/* Background hexagons */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#D4AF37] rotate-45 transform" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-black rotate-12 transform" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-5xl font-heading text-center text-black mb-6">
          OUR <span className="text-[#D4AF37]">SERVICES</span>
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16 font-body">
          Everything you need under one Golden Gym roof.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-t-4 border-[#D4AF37] hover:border-black"
            >
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-bl-2xl" />
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-heading text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 font-body">{service.desc}</p>
              {/* Animated border on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ====================== PRICING SECTION ======================
const pricingPlans = [
  { name: "Monthly", price: "1000", period: "/month", color: "border-gray-400", features: ["Full gym access", "Locker room", "1 group class/week"] },
  { name: "3 Months", price: "2500", period: "/3 months", color: "border-[#D4AF37]", popular: true, features: ["Everything in Monthly", "Free PT session", "Nutrition guide", "Priority support"] },
  { name: "Yearly", price: "5000", period: "/year", color: "border-black", features: ["All 3‑Month perks", "Unlimited classes", "Free merch", "Exclusive events"] },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-black text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,#D4AF37_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-5xl font-heading text-center mb-6">
          MEMBERSHIP <span className="text-[#D4AF37]">PLANS</span>
        </h2>
        <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto mb-16 font-body">
          Choose your Golden Gym path. All plans include a free trial day.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${ idx * 200 } ms` }}
            >
              {/* Animated border wrapper */}
              <div className={`absolute inset - 0 rounded - 2xl bg - gradient - to - br from - [#D4AF37] via - transparent to - black p - [2px] opacity - 0 group - hover: opacity - 100 transition - all duration - 500 blur - [2px]`} />
              <div className="relative bg-white text-black rounded-2xl p-8 shadow-xl border-t-4 border-transparent hover:border-[#D4AF37] transition-all duration-500 h-full flex flex-col">
                {plan.popular && (
                  <span className="absolute -top-5 right-6 bg-[#D4AF37] text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg animate-pulse">
                    POPULAR
                  </span>
                )}
                <h3 className="text-3xl font-heading mb-4">{plan.name}</h3>
                <div className="text-6xl font-heading text-[#D4AF37] my-6 flex items-baseline">
                  ₹{plan.price}
                  <span className="text-lg font-body text-gray-500 ml-2">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-4 text-gray-700 flex-grow font-body">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-black text-[#D4AF37] font-subheading font-bold py-4 rounded-full uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black transition-all shadow-lg hover:shadow-[#D4AF37]/50 transform hover:-translate-y-1">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ====================== GALLERY SECTION ======================
const galleryImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600", // Interior
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600", // Equipment
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600", // Dumbbells
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600", // Cardio
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600", // Weight rack
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600", // Yoga area
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative bg-[#f5f5f5] py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-5xl font-heading text-center text-black mb-6">
          OUR <span className="text-[#D4AF37]">SPACE</span>
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16 font-body">
          Witness the grind. State‑of‑the‑art envGolden Gymment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src={img} alt={`Gallery ${ idx + 1 } `} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-heading text-xl tracking-widest uppercase">View</span>
              </div>
              {/* Animated golden frame */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37] transition-all duration-500 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ====================== CONTACT / CTA SECTION (Enhanced) ======================
// ====================== CONTACT SECTION (Call & WhatsApp Only) ======================
const Contact = () => {
  return (
    <section id="contact" className="relative bg-black text-white py-24 overflow-hidden">
      {/* Background gym image overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200')] bg-cover bg-center opacity-20 blur-sm" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-5xl font-heading mb-6">
          READY TO <span className="text-[#D4AF37] drop-shadow-[0_0_10px_#D4AF37]">JOIN?</span>
        </h2>
        <p className="text-gray-300 text-xl mb-12 font-body">
          Call or WhatsApp us now – your first trial is free.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          {/* Call Button */}
          <a
            href="tel:+91 8095028005"
            className="relative group bg-[#D4AF37] text-black font-subheading font-bold px-12 py-5 rounded-full text-xl uppercase tracking-wider overflow-hidden shadow-[0_0_25px_#D4AF37] hover:shadow-[0_0_45px_#D4AF37] transition-all transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/91 8095028005?text=Hi%20Golden Gym%20%20Gym%2C%20I%20want%20a%20free%20trial%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="relative group border-2 border-[#D4AF37] text-[#D4AF37] font-subheading font-bold px-12 py-5 rounded-full text-xl uppercase tracking-wider overflow-hidden hover:text-black transition-all shadow-[0_0_20px_#D4AF37] hover:shadow-[0_0_40px_#D4AF37] transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </span>
            <span className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>
        </div>

        {/* Phone Number Display */}
        <div className="text-3xl font-heading text-[#D4AF37] tracking-widest mb-6 drop-shadow-[0_0_10px_#D4AF37]">
           8095028005
        </div>

        {/* Address */}
        <div className="flex justify-center gap-6 text-gray-400 font-body text-lg">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Golden Gym  Gym, Fitness Street
          </div>
        </div>
      </div>
    </section>
  );
};

// ====================== FOOTER ======================
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-500 py-10 text-center text-sm font-body border-t border-[#D4AF37]/30">
      <p>© {new Date().getFullYear()} Golden Gym  Gym. All rights reserved. | Designed with 🔥</p>
    </footer>
  );
};

// ====================== MAIN APP COMPONENT ======================
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
      {/* Font import and animations */}
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;600;700&family=Poppins:wght@400;600&display=swap');
        .font - heading { font - family: 'Bebas Neue', sans - serif; }
        .font - subheading { font - family: 'Oswald', sans - serif; }
        .font - body { font - family: 'Poppins', sans - serif; }

@keyframes loading - bar {
  0 % { width: 0 %; }
  50 % { width: 70 %; }
  100 % { width: 100 %; }
}
        .animate - loading - bar {
  animation: loading - bar 2s ease -in -out;
}
@keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
}
        .animate - fade -in {
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
}
@keyframes border - pulse {
  0 %, 100 % { opacity: 0.3; }
  50 % { opacity: 0.6; }
}
        .animate - border - pulse {
  animation: border - pulse 3s infinite;
}
`}</style>

      <div className="font-sans">
        <Header />
        <main>
          <Hero />
          <Services />
          <Pricing />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
