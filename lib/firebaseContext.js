import { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import db, { auth } from './firebase';

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [userToken, setUserToken] = useState(null);
    const [inactivity, setInactivity] = useState(false);

    useEffect(() => {
        const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const token = await user.getIdToken();
                    setUserId(user.uid);
                    setUserToken(token);
                } catch (error) {
                    console.error("Error getting user token:", error);
                    setUserId(null);
                }
            } else {
                setUserId(null);
                console.log("No authenticated user");
            }
        });

        
        let logoutTimer;

        const startLogoutTimer = () => {
            logoutTimer = setTimeout(() => {
                // Log out the user after 30 minutes of inactivity
                logoutUser();
            }, 30 * 60 * 1000); // 30 minutes in milliseconds
        };

        const resetLogoutTimer = () => {
            clearTimeout(logoutTimer);
            startLogoutTimer();
        };

        if (userId) {
            startLogoutTimer();
        }

        // Add event listeners for user activity
        const handleUserActivity = () => {
            resetLogoutTimer();
        };

        // Listen for mouse movement and keypress events
        document.addEventListener('mousemove', handleUserActivity);
        document.addEventListener('keydown', handleUserActivity);

        return () => {
            clearTimeout(logoutTimer);
            unsubscribeAuth();
            // Remove event listeners on component unmount
            document.removeEventListener('mousemove', handleUserActivity);
            document.removeEventListener('keydown', handleUserActivity);
        };

        // return () => unsubscribeAuth();
    }, [userId]);

    const logoutUser = () => {
        auth.signOut().then(() => {
            console.log("User logged out due to inactivity");
            setInactivity(true);
            setTimeout(() => {
                setInactivity(false);
            }, 3000);
        }).catch((error) => {
            console.error("Error logging out:", error);
        });
    };

    useEffect(() => {
        
        if (userId) {

            // Fetch data

            return () => {
                // unsubscribe();
            };
        }

    }, [userId]);

    return (
        <FirebaseContext.Provider value={{ userToken, inactivity }}>
            {children}
        </FirebaseContext.Provider>
    );
};
