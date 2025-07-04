import React from 'react';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export const ContactContent: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
