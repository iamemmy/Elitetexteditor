import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

export default function protectRoute(Component) {
  return function AuthenticatedComponent(props) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/authentication');
        } else {
          setLoading(false); // Set loading to false if authenticated
        }
      });

      return () => {
        unsubscribe();
      };
    }, [router]);

    if (loading) {
      return null; // Render nothing or a spinner/loading component
    }

    return <Component {...props} />;
  };
}
