
import { motion } from "framer-motion";

interface TicketSelectionProps {
  formData: {
    ticketType: string;
    quantity: number;
  };
  updateFormData: (data: Partial<typeof formData>) => void;
  onNext: () => void;
}

const TicketSelection = ({ formData, updateFormData, onNext }: TicketSelectionProps) => {
  const ticketTypes = [
    { id: "regular", name: "REGULAR ACCESS", price: "Free", available: "20/52" },
    { id: "vip", name: "VIP ACCESS", price: "$150", available: "20/52" },
    { id: "vvip", name: "VVIP ACCESS", price: "$150", available: "20/52" },
  ];

  return (
    <div className="bg-teal-light backdrop-blur-md rounded-3xl p-8  border-2 border-teal-accent/40 mt-[10rem] z-1">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl text-white font-light">Ticket Selection</h1>
        <span className="text-white/60">Step 1/3</span>
      </div>

      <div className="flex flex-col border-2 border-teal-accent/40 rounded-2xl p-4">
      <div className="bg-teal-light border  border-teal-accent/20 rounded-xl p-6 mb-8 text-center">
        <h2 className="text-3xl text-white font-bold mb-4">Techember Fest '25</h2>
        <p className="text-white/80 mb-2">
          Join us for an unforgettable experience at<br />
          [Event Name] Secure your spot now.
        </p>
        <p className="text-white/60">
          📍 [Event Location] || March 15, 2025 | 7:00 PM
        </p>
      </div>

       <div className="w-full h-[2px] bg-teal-500/40 mb-4"></div>
        
      <div className="mb-8">
        <label className="text-white mb-4 block">Select Ticket Type:</label>
        <div className="grid grid-cols-3 gap-4 border  border-teal-accent/40 bg:hover-teal-accent-10 rounded-2xl p-3">
          {ticketTypes.map((type) => (
            <motion.button
              key={type.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl border-2 transition-all lg:text-base sm:text-sm ${
                formData.ticketType === type.id
                  ? "border-teal-accent bg-teal-accent/10 bg:hover-teal-accent-40"
                  : "border-teal-accent/20 hover:border-teal-accent/40"
              }`}
              onClick={() => updateFormData({ ticketType: type.id })}
            >
              <div className="text-xl text-white mb-2">{type.price}</div>
              <div className="text-white/80 text-sm">{type.name}</div>
              <div className="text-white/60 text-xs mt-1">{type.available}</div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label className="text-white mb-4 block">Number of Tickets</label>
        <select
          className="w-full bg-teal border border-teal-accent/20 rounded-lg p-3 text-white"
          value={formData.quantity}
          onChange={(e) => updateFormData({ quantity: Number(e.target.value) })}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-between gap-4">
        <button className="w-full py-3 rounded-lg border-2 border-teal-accent/20 text-teal-accent hover:bg-teal-accent/10 transition-colors">
          Cancel
        </button>
        <button
          className="w-full py-3 rounded-lg bg-teal-accent text-teal hover:bg-opacity-90 transition-colors"
          onClick={onNext}
          disabled={!formData.ticketType}
        >
          Next
        </button>
      </div>
      </div>
    </div>
  );
};

export default TicketSelection;
