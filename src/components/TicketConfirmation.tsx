
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TicketConfirmationProps {
  formData: {
    name: string;
    email: string;
    avatarUrl: string;
    specialRequest: string;
    ticketType: string;
  };
  onBack: () => void;
}

const TicketConfirmation = ({ formData, onBack }: TicketConfirmationProps) => {
  const [barcode, setBarcode] = useState("");

  useEffect(() => {
    // Generate a random barcode number
    const randomBarcode = Math.random().toString().substring(2, 10);
    setBarcode(randomBarcode);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center lg:p-[8rem] sm:p-[2rem] border-2 border-teal-500/20 rounded-2xl mt-[10rem] z-1"
    >
      <h1 className="text-3xl text-white mb-4">Your Ticket is Booked!</h1>
      <p className=" text-white mb-12">
        Check your email for a copy or you can{" "}
        <button >download</button>
      </p>

      <div className="bg-teal-light backdrop-blur-md rounded-3xl p-8 border border-teal-500/40 ">
        <div className="bg-teal rounded-xl p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl text-white font-bold mb-4">
              Techember Fest '25
            </h2>
            <div className="flex flex-col items-center gap-2 justify-center text-white/60 text-sm mb-8">
              <p>📍 04 Rumens road, Ikoyi, Lagos</p>
              <p>📅March 15, 2025 | 7:00 PM</p>
            </div>

            {formData.avatarUrl && (
              <img
                src={formData.avatarUrl}
                alt="Profile"
                className="h-[9rem] w-[8rem] rounded-xl mx-auto mb-6 object-cover"
              />
            )}

            <div className="grid grid-cols-2 p-3 border-2 rounded-xl  border-teal-500/40 text-left">
              <div className="border-b border-r pl-3 border-teal-500/40">
                <label className="text-white/60 text-sm">Enter your name</label>
                <p className="text-white">{formData.name}</p>
              </div>
              <div className="border-l pl-3 border-b border-teal-500/40">
                <label className="text-white/60 text-sm">Enter your email</label>
                <p className="text-white">{formData.email}</p>
              </div>
              <div  className="border-b pl-3 border-r border-teal-500/40">
                <label className="text-white/60 text-sm">Ticket Type</label>
                <p className="text-white">{formData.ticketType.toUpperCase()}</p>
              </div>
              <div className="border-b pl-3 border-l border-teal-500/40">
                <label className="text-white/60 text-sm">Ticket ID</label>
                <p className="text-white">#1</p>
              </div>
            </div>

            {formData.specialRequest && (
              <div className="text-left mb-6">
                <label className="text-white/60 text-sm block mb-1">
                  Special Request
                </label>
                <p className="text-white">{formData.specialRequest}</p>
              </div>
            )}

            
          </div>
        </div>
      </div>

      <div className="mb-8 border rounded-3xl p-6  border-teal-500/40">
              <img
                src={`https://bwipjs-api.metafloor.com/?bcid=code128&text=${barcode}`}
                alt="Barcode"
                className="mx-auto h-[6rem]"
              />
              <div className="text-white/40 text-sm mt-2">{barcode}</div>
            </div>

      <div className="flex justify-between gap-4">
        <button
          className="w-full py-3 rounded-lg border border-teal-light text-white hover:bg-teal-accent/10 transition-colors"
          onClick={onBack}
        >
          Book Another Ticket
        </button>
        <button className="w-full py-3 rounded-lg bg-teal-accent text-white hover:bg-opacity-90 transition-colors">
          Download Ticket
        </button>
      </div>
    </motion.div>
  );
};

export default TicketConfirmation;
