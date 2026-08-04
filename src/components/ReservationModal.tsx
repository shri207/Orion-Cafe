import React, { useState } from 'react';
import { ReservationData } from '../types';
import { X, Calendar, Clock, Users, MapPin, CheckCircle, Download, Share2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmReservation: (data: ReservationData) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  onConfirmReservation,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: 2,
    seatingArea: 'Velvet Lounge' as ReservationData['seatingArea'],
    occasion: 'Casual Dining',
    specialRequests: '',
  });

  const [confirmedReservation, setConfirmedReservation] = useState<ReservationData | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReservation: ReservationData = {
      id: `ORION-BH-${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      seatingArea: formData.seatingArea,
      occasion: formData.occasion,
      specialRequests: formData.specialRequests,
      status: 'Confirmed',
      createdAt: new Date().toLocaleDateString(),
    };

    setConfirmedReservation(newReservation);
    onConfirmReservation(newReservation);
  };

  const seatingOptions = [
    { name: 'Velvet Lounge', desc: 'Acoustic leather seating with ambient warm illumination.' },
    { name: 'Constellation Courtyard', desc: 'Open-air garden dining under celestial Banjara night skies.' },
    { name: 'Main Dining Room', desc: 'Central grand dining space overlooking our open kitchen.' },
    { name: 'Espresso Bar Barista Seats', desc: 'Direct bar seats watching live coffee and cocktail extractions.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A35]/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-[#FCFBF8] border border-[#D6B24C]/40 max-w-2xl w-full p-6 sm:p-10 relative text-[#1A1A1A] my-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#1A1A1A] hover:text-[#D6B24C] transition-colors p-2"
        >
          <X size={20} />
        </button>

        {!confirmedReservation ? (
          <div>
            <div className="mb-8">
              <span className="text-[10px] font-mono tracking-luxury text-[#D6B24C] uppercase block mb-1">
                ONLINE SEATING RESERVATIONS
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#071A35]">
                Book Your Table at Orion
              </h3>
              <p className="text-xs text-[#5C5C5C] mt-1 font-sans">
                Road No. 12, Banjara Hills, Hyderabad
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Date, Time, Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#071A35] mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-sans bg-[#F7F3EC] border border-[#D6B24C]/30 focus:border-[#071A35] outline-none text-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#071A35] mb-2">
                    Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-sans bg-[#F7F3EC] border border-[#D6B24C]/30 focus:border-[#071A35] outline-none text-[#1A1A1A]"
                  >
                    <option value="08:30">08:30 AM (Breakfast)</option>
                    <option value="10:00">10:00 AM (Brunch)</option>
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="15:30">03:30 PM (High Tea)</option>
                    <option value="18:00">06:00 PM (Sunset Lounge)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="21:00">09:00 PM (Late Night Lounge)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#071A35] mb-2">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs font-sans bg-[#F7F3EC] border border-[#D6B24C]/30 focus:border-[#071A35] outline-none text-[#1A1A1A]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Area Picker */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#071A35] mb-2">
                  Select Seating Area
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {seatingOptions.map((area) => (
                    <div
                      key={area.name}
                      onClick={() => setFormData({ ...formData, seatingArea: area.name as any })}
                      className={`p-3 border cursor-pointer transition-all ${
                        formData.seatingArea === area.name
                          ? 'border-[#071A35] bg-[#071A35] text-[#F7F3EC]'
                          : 'border-[#D6B24C]/30 bg-[#F7F3EC] text-[#1A1A1A] hover:border-[#D6B24C]'
                      }`}
                    >
                      <p className={`text-xs font-semibold ${formData.seatingArea === area.name ? 'text-[#D6B24C]' : 'text-[#071A35]'}`}>
                        {area.name}
                      </p>
                      <p className={`text-[10px] mt-1 ${formData.seatingArea === area.name ? 'text-[#F7F3EC]/80' : 'text-[#5C5C5C]'}`}>
                        {area.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#071A35] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Rao"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-sans bg-[#F7F3EC] border border-[#D6B24C]/30 focus:border-[#071A35] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#071A35] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-sans bg-[#F7F3EC] border border-[#D6B24C]/30 focus:border-[#071A35] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#071A35] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="vikram@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs font-sans bg-[#F7F3EC] border border-[#D6B24C]/30 focus:border-[#071A35] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#071A35] mb-1">
                  Special Notes / Dietary Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Anniversary, allergy notes, quiet booth preference..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-3 py-2 text-xs font-sans bg-[#F7F3EC] border border-[#D6B24C]/30 focus:border-[#071A35] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-xs font-sans font-medium uppercase tracking-widest bg-[#071A35] text-[#D6B24C] border border-[#D6B24C] hover:bg-[#D6B24C] hover:text-[#071A35] transition-colors shadow-lg"
              >
                Confirm Table Reservation
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation Digital Pass */
          <div className="text-center py-4">
            <div className="inline-flex p-3 bg-[#071A35] rounded-full text-[#D6B24C] mb-4">
              <CheckCircle size={32} />
            </div>

            <span className="text-[10px] font-mono tracking-luxury text-[#D6B24C] uppercase block mb-1">
              RESERVATION CONFIRMED
            </span>

            <h3 className="font-serif text-3xl font-normal text-[#071A35] mb-2">
              We Look Forward to Welcoming You
            </h3>

            <p className="text-xs text-[#5C5C5C] mb-6">
              A digital confirmation pass has been issued for your table at Orion Banjara Hills.
            </p>

            {/* Digital Pass Card */}
            <div className="bg-[#071A35] text-[#F7F3EC] border border-[#D6B24C]/40 p-6 text-left relative overflow-hidden mb-6 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6B24C]/5 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-[#D6B24C]/30 pb-4 mb-4">
                <div>
                  <span className="font-serif text-xl text-[#F7F3EC] uppercase tracking-widest font-semibold">
                    ORION
                  </span>
                  <span className="text-[10px] font-mono text-[#D6B24C] block uppercase">
                    Banjara Hills, Hyderabad
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#D6B24C] block">PASS CODE</span>
                  <span className="font-mono text-sm font-bold text-[#F7F3EC]">{confirmedReservation.id}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-sans mb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#D6B24C] uppercase block">Guest Name</span>
                  <p className="font-semibold">{confirmedReservation.name}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#D6B24C] uppercase block">Party Size</span>
                  <p className="font-semibold">{confirmedReservation.guests} Guests</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#D6B24C] uppercase block">Date & Time</span>
                  <p className="font-semibold">{confirmedReservation.date} at {confirmedReservation.time}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#D6B24C] uppercase block">Seating Zone</span>
                  <p className="font-semibold">{confirmedReservation.seatingArea}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#D6B24C]/20 text-[10px] font-mono text-[#F7F3EC]/70 flex justify-between">
                <span>Status: Confirmed</span>
                <span>Road No. 12, Banjara Hills</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setConfirmedReservation(null);
                  onClose();
                }}
                className="w-full py-3 text-xs font-sans uppercase tracking-widest bg-[#071A35] text-[#D6B24C] border border-[#D6B24C]"
              >
                Close & Return
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
