import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We collect information that you provide directly to us, including your name,
              email address, and any other information you choose to provide. We also
              automatically collect certain information about your device when you use our
              platform.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">How We Protect Your Data</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational security measures to
              protect your personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <UserCheck className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Your Rights</h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure of your data</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            If you have any questions about this Privacy Policy, please contact us at:
            <a href="mailto:privacy@example.com" className="text-blue-600 hover:text-blue-800">
              {' '}
              privacy@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;