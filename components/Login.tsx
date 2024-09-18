import React, { useState } from 'react';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setloading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful!');
      setloading(false);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
      setloading(false);
    }
  };

  return (
    <div className="w-full max-w-[85vw] lg:max-w-md p-8 space-y-4 bg-white rounded shadow-lg">
      <h2 className="text-lg lg:text-2xl font-bold text-center text-indigo-600">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4 lg:space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {error && <p className="text-sm text-red-600">Invalid credentials</p>}
        <button
          type="submit"
          className="w-full px-4 py-2 flex justify-center font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          { loading ? (
              <div className="border-2 border-gray-300 border-t-2 border-t-indigo-600 rounded-full w-5 h-5 spinner"></div>
          ) : (
              <div className="text-white text-center h-5">Login</div>
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
