// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-200 text-center py-8 text-sm text-gray-700 ">
      &copy; {new Date().getFullYear()} Living Things. All rights reserved.
    </footer>
  );
}
