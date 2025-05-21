'use client';

import { useEffect, useState } from 'react';

export default function ApiTest() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`);
        const data = await response.json();
        setData(data);
        setStatus('success');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to connect to backend');
        setStatus('error');
      }
    };

    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">API Connection Test</h1>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Status:</h2>
              <p className={`mt-1 ${
                status === 'loading' ? 'text-yellow-600' :
                status === 'success' ? 'text-green-600' :
                'text-red-600'
              }`}>
                {status.toUpperCase()}
              </p>
            </div>

            {data && (
              <div>
                <h2 className="text-lg font-medium text-gray-900">Response Data:</h2>
                <pre className="mt-1 bg-gray-50 p-4 rounded-md overflow-auto">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            )}

            {error && (
              <div>
                <h2 className="text-lg font-medium text-gray-900">Error:</h2>
                <p className="mt-1 text-red-600">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 