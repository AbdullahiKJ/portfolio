'use client';

import Image from "next/image";
import { act, useState } from "react";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faAddressCard, faFolderOpen, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons/faVolumeHigh";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons/faVolumeMute";

// Components
import Tab from "@/app/components/tab";
import TabButton from "@/app/components/tabButton";

function updateTabsList(activeTabs: string[], tabName: string, removeTab?: boolean) {
  // Check if the tabName is already in the activeTabs array
  if(!activeTabs.includes(tabName)) {
    // Add the new tabName to the array
    activeTabs = [...activeTabs, tabName]; 
  }
  else if(removeTab === true) {
    // Remove the tabName from the array
    activeTabs = activeTabs.filter((tab) => tab !== tabName);
  }
  return activeTabs;
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTabs, setActiveTabs] = useState<string[]>(["Home"]); // State to track the active tab

  return (
    // DEBUG: SWITCHED FROM PALETTE TO WHITE
    <div className="bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Change the rooot text colour in the style sheet when implementing dark mode */}
      <header className="text-palette-5">
        <button><FontAwesomeIcon icon={faSun}/></button>
        <button><FontAwesomeIcon icon={faMoon}/></button>
        <button><FontAwesomeIcon icon={faVolumeHigh}/></button>
        <button><FontAwesomeIcon icon={faVolumeMute}/></button>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Place the Tab at the centre of the page */}
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Tab tabName={"Home"} draggable={false} hideButton={true}>
            <div className="flex flex-col items-center gap-2 p-10">
                <h1 className="text-5xl">Abdullahi Ja'afar</h1>
                <p>Web developer, Unity developer</p>
            </div>
            {/* DEBUG: BORDER */}
            <div className="grid grid-flow-col px-10 pb-5 justify-items-center border-2">
                <TabButton buttonName="About Me" onClick={() => setActiveTabs(updateTabsList(activeTabs, "About Me"))}>
                  <FontAwesomeIcon icon={faAddressCard} size="3x"/>
                </TabButton>
                <TabButton buttonName="Projects" onClick={() => setActiveTabs(updateTabsList(activeTabs, "Projects"))}>
                  <FontAwesomeIcon icon={faFolderOpen} size="3x"/>
                </TabButton>
                <TabButton buttonName="Contact" onClick={() => setActiveTabs(updateTabsList(activeTabs, "Contact"))}>
                  <FontAwesomeIcon icon={faEnvelope} size="3x"/>
                </TabButton>
            </div>
          </Tab>
        </div>

        {/* Individual tab content placed at the centre of the page*/}
        <div className="mt-8">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {activeTabs.includes("About Me") && (
                <Tab 
                  tabName="About Me"
                  onClose={(tabName) => setActiveTabs(updateTabsList(activeTabs, tabName, true))}
                >
                    <p>This is the About Me tab content.</p>
                </Tab>
            )}
          </div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {activeTabs.includes("Projects") && (
                <Tab 
                  tabName="Projects"
                  onClose={(tabName) => setActiveTabs(updateTabsList(activeTabs, tabName, true))}
                >
                    <p>This is the Projects tab content.</p>
                </Tab>
            )}
          </div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {activeTabs.includes("Contact") && (
                <Tab 
                  tabName="Contact"
                  onClose={(tabName) => setActiveTabs(updateTabsList(activeTabs, tabName, true))}
>
                    <p>This is the Contact tab content.</p>
                </Tab>
            )}
          </div>
        </div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-black">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
