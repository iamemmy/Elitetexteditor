import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

export default function protectRoute(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/authentication'); // Redirect to login page if not authenticated
        }
      });

      return () => {
        unsubscribe();
      };
    }, [router]);

    return <Component {...props} />;
  };
}
