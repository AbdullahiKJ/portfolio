import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import { useRef } from "react";

interface TabProps {
  tabName?: string;
  hideButton?: boolean;
  draggable?: boolean;
  children?: React.ReactNode;
  onClose?: (tabName: string) => void;  
}

export default function Tab({ tabName, hideButton, draggable, children, onClose }: TabProps) {
    const nodeRef = useRef<HTMLDivElement>(null);

    return (
        <Draggable nodeRef={nodeRef as React.RefObject<HTMLDivElement>} disabled={draggable === false}>
            <div className="flex flex-col rounded-xl text-palette-5 shadow-2xl pointer-events-auto" ref={nodeRef as React.RefObject<HTMLDivElement>}>
                {/* Header */}
                <div className="flex justify-between items-center bg-palette-1 p-2 rounded-t-xl">
                    {tabName ? tabName : "Tab Name"}
                    {hideButton !== true && 
                        <button onClick={() => onClose && tabName && onClose(tabName)}>
                            <FontAwesomeIcon icon={faCircleDot} className="text-palette-3" />
                        </button>
                    }
                </div>
                {/* Main content */}
                <div className="rounded-b-xl border-3 border-palette-2 p-20">
                    {children}
                </div>
            </div>
        </Draggable>
    );
}