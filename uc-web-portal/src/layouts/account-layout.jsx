import React, { useState, useEffect, createContext } from "react";
import { Register, Login } from "../pages/account-page";

export const AccountContext = createContext();

const slides = [
  {
    id: 1,
    image:
      "https://images.gmanews.tv/regionaltv2023/content_images/article/UC1_2024_03_18_17_52_58.jpg",
    title: "UNIVERSITY OF CEBU LAPU-LAPU AND MANDAUE",
    description: "Democratizing quality education for all.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    title: "ENROLLMENT IS NOW OPEN",
    description: "Be part of our growing community. Secure your future today.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
    title: "STUDENT LIFE & EVENTS",
    description:
      "Join upcoming seminars, sports meets, and cultural activities.",
  },
];

function AccountManagement() {
  const [isRegistering, setIsRegistering] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AccountContext.Provider value={setIsRegistering}>
      <main className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] bg-blue-900">
        <div className="hidden lg:block h-full relative overflow-hidden w-[55vw]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover brightness-75"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-black/30">
                <h1 className="text-4xl font-bold text-white tracking-widest drop-shadow-lg mb-4">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-lg font-light tracking-wide max-w-lg">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}

          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center lg:rounded-l-[50px] shadow-2xl relative z-30 bg-white">
          <div className="w-full h-full gap-6 p-20  rounded-l-4xl">
            {isRegistering ? <Register /> : <Login />}
          </div>
        </div>
      </main>
    </AccountContext.Provider>
  );
}

export default AccountManagement;
