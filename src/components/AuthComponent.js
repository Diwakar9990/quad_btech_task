import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, register } from "../redux/authSlice";

const AuthComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);

    const dispatch = useDispatch();
    const { isAuthenticated, currentUser, error } = useSelector((state) => state.auth);

    const handleAuth = () => {
        if (isRegistering) {
            dispatch(register({ username, password }));
        } else {
            dispatch(login({ username, password }));
        }
        setUsername("");
        setPassword("");
    };

    return (
        <div className="m-3">
            {isAuthenticated ? (
                <div className="flex justify-between p-2">
                    <p className="text-2xl lg:text-6xl md:text-5xl font-semibold text-[#489c4b]">Welcome {currentUser}!</p>
                    <button className="p-2 lg:min-w-24 rounded-lg text-sm lg:text-lg font-semibold bg-[#539e56] text-white" onClick={() => dispatch(logout())}>Logout</button>
                </div>
            ) : (
                <>
                    <h2 className="m-2 text-3xl md:text-5xl lg:text-6xl font-semibold text-[#489c4b]">{isRegistering ? "User Registration" : "User Login"}</h2>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div className="flex flex-col text-xl">
                        <input
                            className="m-2 p-2 sm:max-w-96 border-2 border-grey rounded-lg"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            className="m-2 p-2 sm:max-w-96 border-2 border-grey rounded-lg"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="m-3 p-2 rounded-lg text-xl font-semibold bg-[#539e56] text-white" onClick={handleAuth}>{isRegistering ? "Register" : "Login"}</button>
                    <p className="m-3 text-2xl font-semibold text-[#489c4b]">
                        {isRegistering ? "Already have an account? " : "Don't have an account? "}
                        <button onClick={() => setIsRegistering(!isRegistering)}>
                            {isRegistering ? "Login" : "Register"}
                        </button>
                    </p>
                </>
            )}
        </div>
    );
};

export default AuthComponent;
