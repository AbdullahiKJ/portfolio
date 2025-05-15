
interface TabProps {
    buttonName?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function TabButton({buttonName, children, onClick}: TabProps) {
    return (
        <button 
            className="flex flex-col items-center hover:scale-125 transition-transform duration-300 ease-in-out"
            onClick={onClick}
        
        >
            {children}
            <div className="text-center">{buttonName ? buttonName : "Tab Button Name"}</div>
        </button>
    )
}