import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const MobileChangeForm: React.FC = () => {
  const [mobile, setMobile] = useState('+1 234 567 8900');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'mobile' | 'otp'>('mobile');

  const handleSendOTP = () => {
    alert('OTP sent to your mobile number');
    setStep('otp');
  };

  const handleVerify = () => {
    alert('Mobile number updated successfully!');
    setStep('mobile');
  };

  return (
    <div className="max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Change Mobile Number</h2>

      {step === 'mobile' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Mobile Number
            </label>
            <div className="relative">
              <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>
          <button
            onClick={handleSendOTP}
            className="w-full px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Send OTP
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter OTP sent to {mobile}
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg tracking-widest"
              placeholder="000000"
              maxLength={6}
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleVerify}
              className="flex-1 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Verify & Update
            </button>
            <button
              onClick={() => setStep('mobile')}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileChangeForm;
