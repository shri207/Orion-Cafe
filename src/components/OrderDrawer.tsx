import React, { useState } from 'react';
import { MenuItem, OrderItem } from '../types';
import { X, Trash2, Plus, Minus, Coffee, ShoppingBag, CheckCircle, Utensils } from 'lucide-react';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearOrder: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearOrder,
}) => {
  const [orderType, setOrderType] = useState<'table' | 'takeaway'>('table');
  const [tableNumber, setTableNumber] = useState('04');
  const [guestName, setGuestName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const totalAmount = items.reduce((acc, curr) => acc + curr.menuItem.price * curr.quantity, 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const newId = `ORD-${Math.floor(100 + Math.random() * 900)}`;
    setOrderId(newId);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#071A35]/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FCFBF8] border-l border-[#D6B24C]/40 w-full max-w-md h-full p-6 flex flex-col justify-between text-[#1A1A1A] relative shadow-2xl overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#D6B24C]/30 mb-6">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-[#D6B24C]" />
              <h3 className="font-serif text-2xl font-normal text-[#071A35]">
                Digital Table Service
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-[#1A1A1A] hover:text-[#D6B24C] transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>

          {!isSubmitted ? (
            <>
              {/* Order Mode Switcher */}
              <div className="flex bg-[#F7F3EC] p-1 border border-[#D6B24C]/20 mb-6">
                <button
                  type="button"
                  onClick={() => setOrderType('table')}
                  className={`flex-1 py-2 text-xs font-sans uppercase tracking-widest transition-all ${
                    orderType === 'table'
                      ? 'bg-[#071A35] text-[#D6B24C] font-semibold'
                      : 'text-[#5C5C5C]'
                  }`}
                >
                  Dine-In Table
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('takeaway')}
                  className={`flex-1 py-2 text-xs font-sans uppercase tracking-widest transition-all ${
                    orderType === 'takeaway'
                      ? 'bg-[#071A35] text-[#D6B24C] font-semibold'
                      : 'text-[#5C5C5C]'
                  }`}
                >
                  Gourmet Takeaway
                </button>
              </div>

              {/* Items List */}
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <Utensils size={36} className="text-[#D6B24C] mx-auto mb-3 opacity-60" />
                  <p className="font-serif text-lg text-[#071A35]">Your order list is empty</p>
                  <p className="text-xs text-[#5C5C5C] mt-1">Explore our signature menu to add dishes and drinks.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[42vh] overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div
                      key={item.menuItem.id}
                      className="p-3 bg-[#F7F3EC] border border-[#D6B24C]/20 flex items-center justify-between gap-3"
                    >
                      <img
                        src={item.menuItem.image}
                        alt={item.menuItem.name}
                        className="w-14 h-14 object-cover border border-[#D6B24C]/20"
                        referrerPolicy="no-referrer"
                      />

                      <div className="flex-1">
                        <h4 className="font-serif text-sm font-semibold text-[#071A35]">
                          {item.menuItem.name}
                        </h4>
                        <p className="font-mono text-xs text-[#071A35] font-bold">
                          ₹{item.menuItem.price * item.quantity}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-[#FCFBF8] border border-[#D6B24C]/30 px-2 py-1">
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                          className="text-[#071A35] hover:text-[#D6B24C]"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-mono text-xs font-bold w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                          className="text-[#071A35] hover:text-[#D6B24C]"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.menuItem.id)}
                        className="text-[#5C5C5C] hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            /* Order Submitted Success View */
            <div className="text-center py-8">
              <CheckCircle size={48} className="text-[#D6B24C] mx-auto mb-4" />
              <span className="text-[10px] font-mono tracking-luxury text-[#D6B24C] uppercase block mb-1">
                ORDER RECEIVED BY BARISTAS & CHEFS
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#071A35] mb-2">
                Order #{orderId} Transmitted
              </h3>
              <p className="text-xs text-[#5C5C5C] mb-6">
                {orderType === 'table'
                  ? `Delivering directly to Table ${tableNumber} in ~10-15 minutes.`
                  : 'Preparing for pickup at our main barista counter.'}
              </p>

              <div className="bg-[#071A35] text-[#F7F3EC] p-4 text-xs font-mono mb-6 text-left border border-[#D6B24C]/30 space-y-1">
                <p className="text-[#D6B24C]">ORION TABLE SERVICE PASS</p>
                <p>Location: Banjara Hills, Hyderabad</p>
                <p>Total Paid: ₹{totalAmount}</p>
                <p>Status: Preparing Fresh</p>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClearOrder();
                  onClose();
                }}
                className="w-full py-3 bg-[#071A35] text-[#D6B24C] text-xs font-sans uppercase tracking-widest border border-[#D6B24C]"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Footer Checkout Controls */}
        {!isSubmitted && items.length > 0 && (
          <form onSubmit={handlePlaceOrder} className="pt-4 border-t border-[#D6B24C]/30 space-y-4">
            {orderType === 'table' ? (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#071A35] mb-1">
                    Table Number
                  </label>
                  <input
                    type="text"
                    required
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs font-sans bg-[#F7F3EC] border border-[#D6B24C]/30 outline-none"
                    placeholder="e.g. 04"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#071A35] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs font-sans bg-[#F7F3EC] border border-[#D6B24C]/30 outline-none"
                    placeholder="Guest Name"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-[10px] font-mono uppercase text-[#071A35] mb-1">
                  Your Name for Pickup
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs font-sans bg-[#F7F3EC] border border-[#D6B24C]/30 outline-none"
                  placeholder="Guest Name"
                />
              </div>
            )}

            <div className="flex justify-between items-center text-sm font-mono font-bold text-[#071A35] pt-2">
              <span>Total Bill:</span>
              <span className="text-base text-[#071A35]">₹{totalAmount}</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#071A35] text-[#D6B24C] text-xs font-sans font-medium uppercase tracking-widest border border-[#D6B24C] hover:bg-[#D6B24C] hover:text-[#071A35] transition-colors"
            >
              Send Request to Kitchen & Bar
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
