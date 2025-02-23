import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import TicketSelection from "@/components/TicketSelection";
import AttendeeDetails from "@/components/AttendeeDetails";
import TicketConfirmation from "@/components/TicketConfirmation";

const Index = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ticketType: "",
    quantity: 1,
    name: "",
    email: "",
    avatarUrl: "",
    specialRequest: "",
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="min-h-screen bg-teal flex flex-col items-center py-8 px-4">
      {/* Navbar */}
      <nav className="w-full max-w-5xl flex rounded-xl fixed top-10 justify-between items-center mb-12 p-2 border border-white border-teal-500/40">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-xl">Tiez</span>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-white hover:text-teal-accent transition-colors">Events</a>
          <a href="#" className="text-white hover:text-teal-accent transition-colors">My Tickets</a>
          <a href="#" className="text-white hover:text-teal-accent transition-colors">About Project</a>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-white text-teal px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
          MY TICKETS →
        </button>

        {/* Hamburger Icon (Small Screens) */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-end z-50"
          >
            <div className="w-64 h-full bg-teal p-6 shadow-lg flex flex-col">
              {/* Close Button */}
              <button className="self-end text-white mb-6" onClick={() => setMenuOpen(false)}>
                <X size={28} />
              </button>

              {/* Mobile Nav Links */}
              <a href="#" className="text-white text-lg mb-4 hover:text-teal-accent">Events</a>
              <a href="#" className="text-white text-lg mb-4 hover:text-teal-accent">My Tickets</a>
              <a href="#" className="text-white text-lg mb-4 hover:text-teal-accent">About Project</a>

              {/* Mobile Button */}
              <button className="bg-white text-teal px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors mt-auto">
                MY TICKETS →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Form Steps */}
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl"
          >
            {step === 1 && (
              <TicketSelection formData={formData} updateFormData={updateFormData} onNext={nextStep} />
            )}
            {step === 2 && (
              <AttendeeDetails formData={formData} updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} />
            )}
            {step === 3 && <TicketConfirmation formData={formData} onBack={prevStep} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
