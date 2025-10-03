// src/context/ProgressContext.jsx
import { createContext, useState } from "react";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
    const [progress, setProgress] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const startProgress = () => {
        setProgress(0);
        setIsActive(true);

        const interval = setInterval(() => {
            setProgress((prev) => Math.min(prev + Math.random() * 10, 90));
        }, 100);

        return interval;
    };

    const completeProgress = (interval) => {
        if (interval) clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
            setProgress(0);
            setIsActive(false);
        }, 300);
    };

    return (
        <ProgressContext.Provider
            value={{ progress, isActive, startProgress, completeProgress }}
        >
            {children}
        </ProgressContext.Provider>
    );
};

export default ProgressContext;
