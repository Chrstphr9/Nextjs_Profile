'use client';
import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

export default function ConnectForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('NG');

  const countries = [
    { code: 'NG', flag: '🇳🇬', name: 'Nigeria', dialCode: '+234' },
    { code: 'US', flag: '🇺🇸', name: 'United States', dialCode: '+1' },
    { code: 'GB', flag: '🇬🇧', name: 'United Kingdom', dialCode: '+44' },
    { code: 'CA', flag: '🇨🇦', name: 'Canada', dialCode: '+1' },
    { code: 'FR', flag: '🇫🇷', name: 'France', dialCode: '+33' },
    { code: 'DE', flag: '🇩🇪', name: 'Germany', dialCode: '+49' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Connect With Me</h1>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              Your Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-0 py-3 text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
                placeholder="Enter your email"
              />
              {email && (
                <div className="absolute right-0 top-3">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-0 py-3 text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
              Phone Number
            </label>
            <div className="flex items-center border-b-2 border-gray-200 focus-within:border-gray-400 transition-colors">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 py-3 pr-3 focus:outline-none"
                >
                  <span className="text-lg">
                    {countries.find(c => c.code === selectedCountry)?.flag}
                  </span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[200px]">
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => {
                          setSelectedCountry(country.code);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-3 first:rounded-t-lg last:rounded-b-lg"
                      >
                        <span className="text-lg">{country.flag}</span>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-700">{country.name}</span>
                          <span className="text-xs text-gray-500">{country.dialCode}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 px-3 py-3 text-gray-900 bg-transparent border-0 focus:outline-none"
                placeholder={`${countries.find(c => c.code === selectedCountry)?.dialCode} Enter phone number`}
              />
            </div>
          </div>

          {/* Terms and Privacy */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              By connecting you agree to our{' '}
              <a href="#" className="font-medium text-gray-700 hover:underline">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-gray-700 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Connect Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Connect Now
          </button>
        </div>

        {/* Create Account Link */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            New here?{' '}
            <a href="#" className="font-medium text-gray-900 hover:underline">
              Create an Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}