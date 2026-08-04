import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { SignatureMenu } from './components/SignatureMenu';
import { FeaturedDishes } from './components/FeaturedDishes';
import { CoffeeExperience } from './components/CoffeeExperience';
import { SocialHub } from './components/SocialHub';
import { GallerySection } from './components/GallerySection';
import { Testimonials } from './components/Testimonials';
import { ReservationSection } from './components/ReservationSection';
import { ReservationModal } from './components/ReservationModal';
import { OrderDrawer } from './components/OrderDrawer';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';
import { MenuItem, OrderItem, ReservationData } from './types';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const handleAddToOrder = (menuItem: MenuItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((item) => item.menuItem.id === menuItem.id);
      if (existing) {
        return prev.map((item) =>
          item.menuItem.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { menuItem, quantity: 1 }];
      }
    });
    setIsOrderOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setOrderItems((prev) =>
      prev
        .map((item) => {
          if (item.menuItem.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as OrderItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setOrderItems((prev) => prev.filter((item) => item.menuItem.id !== id));
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  const handleConfirmReservation = (data: ReservationData) => {
    // Reservation created successfully
    console.log('Reservation created:', data);
  };

  const totalOrderCount = orderItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1A1A1A] font-sans antialiased selection:bg-[#D6B24C] selection:text-[#071A35]">
      
      {/* Fixed Luxury Header */}
      <Header
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenOrder={() => setIsOrderOpen(true)}
        orderCount={totalOrderCount}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />
        <Story />
        <SignatureMenu onAddToOrder={handleAddToOrder} />
        <FeaturedDishes
          onAddToOrder={handleAddToOrder}
          onOpenReservation={() => setIsReservationOpen(true)}
        />
        <CoffeeExperience />
        <SocialHub />
        <GallerySection />
        <Testimonials />
        <ReservationSection onOpenReservation={() => setIsReservationOpen(true)} />
        <VisitSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Reservation System Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        onConfirmReservation={handleConfirmReservation}
      />

      {/* Digital Table Service Order Drawer */}
      <OrderDrawer
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        items={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
      />

    </div>
  );
}
