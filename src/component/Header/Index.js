import React, { useEffect } from 'react'
import './Style.css'
import { auth} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";



function Header() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user, loading]);

    function handleLogout() {
        try {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
                  toast.success("Sign-out successful.");
                  navigate("/")
              })
              .catch((e) => {
                // An error happened.
                  toast.error(e.message);
              });
            
        } catch (e) {
            toast.error(e.message);
        }
    }

    return (
      <div className="navbar">
        <p className="logo">Today's News.</p>
        {user && (
            <p className="logo link" onClick={handleLogout}>
              Logout
         </p>
        )}
      </div>
    );
}

export default Header;