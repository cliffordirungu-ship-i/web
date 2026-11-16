
import React from "react";
import {
  Sprout,
  ShoppingBasket,
  Tractor,
  TrendingUp,
  CloudSun,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Menu,
  Users,
  Handshake,
  Wheat,
} from "lucide-react";

const LandingPage = () => {
  const services = [
    {
      icon: <ShoppingBasket size={30} />,
      title: "Farm Inputs",
      description:
        "Access quality seeds, fertilizers, pesticides and other farming supplies.",
    },
    {
      icon: <Tractor size={30} />,
      title: "Farm Equipment",
      description:
        "Find modern farming tools and machinery to make farming easier.",
    },
    {
      icon: <TrendingUp size={30} />,
      title: "Market Access",
      description:
        "Connect directly with buyers and get better prices for your produce.",
    },
    {
      icon: <CloudSun size={30} />,
      title: "Farming Insights",
      description:
        "Get useful agricultural information, weather updates and farming tips.",
    },
  ];

  const products = [
    {
      name: "Quality Maize Seeds",
      category: "Seeds",
      price: "KSh 850",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600",
    },
    {
      name: "Organic Fertilizer",
      category: "Fertilizers",
      price: "KSh 1,200",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600",
    },
    {
      name: "Fresh Farm Produce",
      category: "Produce",
      price: "KSh 500",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-green-700 p-2 rounded-xl text-white">
            <Sprout size={27} />
          </div>
          <h1 className="text-2xl font-bold text-green-800">
            Mkulima<span className="text-green-500">.</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#home" className="hover:text-green-600">Home</a>
          <a href="#services" className="hover:text-green-600">Services</a>
          <a href="#products" className="hover:text-green-600">Products</a>
          <a href="#about" className="hover:text-green-600">About Us</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </div>

        <div className="hidden md:flex gap-3">
          <button className="px-5 py-2 text-green-700 font-semibold">
            Login
          </button>
          <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-green-800">
          <Menu size={28} />
        </button>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[570px] flex items-center px-6 md:px-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.58), rgba(0,0,0,.48)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800')",
        }}
      >
        <div className="max-w-3xl text-white py-24">
          <span className="inline-flex items-center gap-2 bg-green-600/90 px-4 py-2 rounded-full text-sm mb-6">
            <Leaf size={17} /> Empowering Kenyan Farmers
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Growing Together,
            <span className="text-green-400"> Harvesting Better.</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Welcome to Mkulima, your trusted agricultural partner.
            Discover quality farm inputs, connect with markets,
            and access the tools you need to grow your farming business.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-green-600 hover:bg-green-700 px-7 py-4 rounded-lg font-semibold flex items-center gap-2"
            >
              Explore Services <ArrowRight size={20} />
            </a>

            <a
              href="#about"
              className="border border-white hover:bg-white hover:text-green-800 px-7 py-4 rounded-lg font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-16 py-12 bg-green-50">
        {[
          ["5,000+", "Farmers Empowered"],
          ["1,200+", "Products Available"],
          ["300+", "Agricultural Partners"],
          ["47", "Counties Reached"],
        ].map(([number, label]) => (
          <div key={label} className="text-center">
            <h3 className="text-3xl font-extrabold text-green-700">
              {number}
            </h3>
            <p className="text-gray-600 mt-2">{label}</p>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 md:px-16 py-20">
        <div className="text-center mb-12">
          <p className="text-green-600 font-bold uppercase tracking-wider">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Everything Farmers Need
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We provide practical agricultural solutions to help farmers
            increase productivity and improve their livelihoods.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="bg-green-100 text-green-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-green-700 font-semibold">
                Learn More <ArrowRight size={17} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-green-50 px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1592982537447-6f2a6a0f7f4e?w=900"
              alt="Farmer working in a green farm"
              className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
            />
          </div>

          <div>
            <p className="text-green-700 font-bold uppercase tracking-wider">
              About Mkulima
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Transforming Agriculture Through Innovation
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Mkulima is dedicated to empowering farmers by connecting
              them with agricultural resources, reliable suppliers,
              market opportunities and modern farming knowledge.
            </p>

            <div className="space-y-4">
              {[
                "Access affordable and quality farm inputs",
                "Connect farmers directly to buyers",
                "Improve agricultural productivity",
                "Promote sustainable farming practices",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex mt-8 bg-green-700 text-white px-7 py-3 rounded-lg hover:bg-green-800"
            >
              Discover Mkulima
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 md:px-16 py-20">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
          <div>
            <p className="text-green-600 font-bold uppercase">
              Our Marketplace
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Featured Farm Products
            </h2>
          </div>

          <a href="#contact" className="text-green-700 font-semibold flex gap-2 items-center">
            View All Products <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <span className="text-sm text-green-600 font-semibold">
                  {product.category}
                </span>

                <h3 className="text-xl font-bold mt-2">
                  {product.name}
                </h3>

                <div className="flex justify-between items-center mt-5">
                  <span className="text-green-700 font-bold text-lg">
                    {product.price}
                  </span>

                  <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-green-800 text-white px-6 md:px-16 py-20">
        <div className="text-center mb-12">
          <p className="text-green-300 font-bold uppercase">
            Why Mkulima?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Your Growth Is Our Priority
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Users size={38} />,
              title: "Farmer Focused",
              text: "Solutions designed around the needs of local farmers.",
            },
            {
              icon: <Handshake size={38} />,
              title: "Trusted Connections",
              text: "Build relationships with suppliers, buyers and partners.",
            },
            {
              icon: <Wheat size={38} />,
              title: "Better Harvests",
              text: "Access resources and knowledge that support better yields.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="flex justify-center text-green-300 mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-green-100">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 md:px-16 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Sprout size={48} className="text-green-600 mx-auto mb-5" />

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Ready to Grow With Mkulima?
          </h2>

          <p className="text-gray-500 mb-8">
            Join a growing community of farmers embracing smarter
            agriculture and better market opportunities.
          </p>

          <a
            href="mailto:info@mkulima.co.ke"
            className="inline-flex items-center gap-2 bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 font-semibold"
          >
            Get Started Today <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-300 px-6 md:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Mkulima<span className="text-green-500">.</span>
            </h2>
            <p className="text-gray-400">
              Growing agriculture, empowering farmers and connecting
              communities for a better tomorrow.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="space-y-3 flex flex-col">
              <a href="#home" className="hover:text-green-400">Home</a>
              <a href="#services" className="hover:text-green-400">Services</a>
              <a href="#products" className="hover:text-green-400">Products</a>
              <a href="#about" className="hover:text-green-400">About Us</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Email: info@mkulima.co.ke</p>
            <p>Location: Nairobi, Kenya</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mkulima. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
