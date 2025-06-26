import { useEffect, useState } from "react";
import { useTheme } from '../contexts/ThemeContext';

interface LoadingScreenProps {
    onComplete?: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(true);
    const [displayedText, setDisplayedText] = useState("");
    
    const fullText = "<dweb!/>";
    
    useEffect(() => {
        let typeIndex = 0;
        
        const typeWriter = () => {
            if (typeIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, typeIndex + 1));
                typeIndex++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    setLoading(false);
                    onComplete?.();
                }, 500);
            }
        };
        
        setTimeout(typeWriter, 500);
    }, []);

    if (!loading) {
        return null;
    }

    return (
        <div 
            className="flex flex-col items-center justify-center h-screen transition-colors duration-300"
            style={{ backgroundColor: theme.colors.primary.bg }}
        >
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4" style={{ borderColor: theme.colors.accent.primary }}>
                <img src="/logo.png" alt="Loading..." className="h-full w-full object-cover" />
            </div>
            <p className="mt-4 text-xl font-mono" style={{ color: theme.colors.primary.text }}>
                {displayedText}
            </p>
        </div>
    );
}