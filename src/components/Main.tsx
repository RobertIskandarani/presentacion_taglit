import { FaCloud } from "react-icons/fa";
import Card from "./Card";
import type { CardProps } from "../types/types";
import '../styles/index.css'
import { MdSunny } from "react-icons/md";
import { WiMoonFull, WiMoonWaningCrescent3 } from "react-icons/wi";
import { IoEarth, IoPlanetOutline } from "react-icons/io5";
import { FaSpaceShuttle } from "react-icons/fa";

import { useState } from "react";
import DescriptionCard from "./DescriptionCard";

const sectionsCards: CardProps[] = [
    {
        id: 1,
        title: 'Formal',
        icon: 'sun'
    },
    {
        id: 2,
        title: 'No formal',
        icon: 'moon'
    },
    {
        id: 3,
        title: 'Random',
        icon: 'stars'
    }
]

const sectionsInfo = [
    {
        backgroundColor: 'bg-[var(--bg-cloudy)]',
        title: 'Roberto\nEzequiel\nIskandarani',
    },
    {
        backgroundColor: 'bg-[var(--bg-sun)]',
        title: 'Formal',
        color: 'text-black'
    },
    {
        backgroundColor: 'bg-[var(--bg-moon)]',
        title: 'No formal',
        color: 'text-white'
    },
    {
        backgroundColor: 'bg-[var(--bg-planets)]',
        title: 'Random',
        color: 'text-white'
    },
]

const subSectionsInfo = [
    [
        {
            src: '/assets/formal1.png',
            title: 'Construcciones'
        },
        {
            src: '/assets/formal2.png',
            title: 'Ingeniería en Informática'
        },
        {
            src: '/assets/formal3.png',
            title: 'Ingeniero Informático'
        }
    ],
    [
        {
            src: '/assets/noformal1.png',
            title: 'Madrij - 4 años'
        },
        {
            src: '/assets/noformal2.png',
            title: 'Mejanej - 2 años'
        },
        {
            src: '/assets/noformal3.png',
            title: 'Coordinador'
        }
    ],
    [
        {
            src: '/assets/random1.png',
            title: 'Juegos'
        },
        {
            src: '/assets/random2.png',
            title: 'Cubo de Rubik'
        },
        {
            src: '/assets/random3.png',
            title: 'Diseño y Edición'
        }
    ]
];

export default function Main() {
    const [section, setSection] = useState(0);
    const [subSection, setSubSection] = useState(1);

    const handleClick = (id: number) => {
        setSubSection(1);
        setSection(id);
    }

    const nextSubSection = () => {
        if (subSection === 3) {
            setSection(0)
            return;
        }
        setSubSection(prevSubSection => prevSubSection + 1);
    }

    return (
        <main className={`w-full h-screen ${sectionsInfo[section].backgroundColor}`}>
            <header className="w-full p-5">
                <h1 className="rubik-doodle-shadow-regular text-5xl whitespace-pre-line">{sectionsInfo[section].title}</h1>
            </header>
            <section className="w-full flex flex-col gap-10 p-5">
                {section === 0 && <h2 className=" text-2xl">Conoceme</h2>}
                {section === 0 ? 
                    <section className="w-full h-40 flex justify-between items-center">
                        { 
                            sectionsCards.map(card =>
                                <Card key={card.id} icon={card.icon} backgroundColor={sectionsInfo[section].backgroundColor} title={card.title} onClick={() => handleClick(card.id!)} />
                            )
                        }
                    </section> :
                    <section className="w-full h-96 flex justify-between items-center">
                        <DescriptionCard src={subSectionsInfo[section - 1][subSection - 1].src} title={subSectionsInfo[section - 1][subSection - 1].title} backgroundColor={sectionsInfo[section].backgroundColor}/>
                    </section>
                }
            </section>
            <footer className="fixed bottom-0 left-0 w-full">
                <span className={`${section !== 0 ? 'translate-x-[-500px]' : ''} cloud transition-all duration-500 absolute -bottom-1 -left-16 drop-shadow-[4px_4px_16px_rgba(0,0,0,.25)]`}>
                    <FaCloud color='white' size={350} />
                </span>
                <span className={`${section !== 0 ? 'translate-x-[500px]' : ''} cloud transition-all duration-[750ms] absolute -bottom-14 -right-16 drop-shadow-[-4px_-4px_16px_rgba(0,0,0,.25)]`}>
                    <FaCloud color='white' size={350} />
                </span>
                <span className={`${section !== 0 ? 'translate-x-[-500px]' : ''} cloud transition-all duration-1000 absolute -bottom-28 -left-24 drop-shadow-[4px_4px_16px_rgba(0,0,0,.25)]`}>
                    <FaCloud color='white' size={350} />
                </span>
                <span className={`${section !== 1 ? 'translate-y-[500px]' : subSection === 1 ? '' : subSection === 2 ? 'rotate-90' : 'rotate-180'} transition-all duration-[750ms] w-full absolute -bottom-[195px]`}>
                    <MdSunny size={390} color="#FFC800" />
                </span>
                <span className={`${section !== 2 || subSection !== 1 ? 'translate-y-[500px]' : ''} transition-all duration-[750ms] w-full absolute -bottom-[195px]`}>
                    <WiMoonWaningCrescent3 size={390} color="white" />
                </span>
                <span className={`${section !== 2 || subSection !== 2 ? 'translate-y-[500px]' : ''} transition-all duration-[750ms] w-full absolute -bottom-[195px]`}>
                    <WiMoonFull size={390} color="white" />
                </span>
                <span className={`${section !== 2 || subSection !== 3 ? 'translate-y-[500px]' : ''} transition-all duration-[750ms] rotate-180 w-full absolute -bottom-[195px]`}>
                    <WiMoonWaningCrescent3 size={390} color="white" />
                </span>
                <div className={`${section !== 3 ? 'translate-y-[500px]' : ''} ${subSection === 1 ? '-rotate-[45deg]' : subSection === 2 ? 'rotate-[45deg]' : 'rotate-[360deg]'} orbit-1 transition-transform duration-[750ms] w-full absolute bottom-0`}>
                    <span className="w-12 h-12 bg-[var(--bg-planets)] flex items-center justify-center p-1 absolute bottom-[160px] left-1/2 z-10">
                        <IoPlanetOutline size={48} color="white" />
                    </span>
                </div>
                <div className={`${section !== 3 ? 'translate-y-[500px]' : ''} ${subSection === 1 ? '' : subSection === 2 ? 'rotate-[390deg]' : 'rotate-[690deg]'} orbit-2 transition-transform duration-[750ms] w-full absolute bottom-0`}>
                    <span className="w-10 h-10 bg-[var(--bg-planets)] flex items-center justify-center p-1 absolute bottom-[120px] right-1/2 z-10">
                        <IoEarth size={40} color="white" />
                    </span>
                </div>
                <div className={`${section !== 3 ? 'translate-y-[500px]' : ''} ${subSection === 1 ? 'rotate-[45deg]' : subSection === 2 ? 'rotate-[280deg]' : 'rotate-[340deg]'} orbit-3 transition-transform duration-[750ms] w-full absolute bottom-0`}>
                    <span className="w-8 h-8 bg-[var(--bg-planets)] flex items-center justify-center p-1 absolute bottom-[80px] left-1/2 z-10">
                        <FaSpaceShuttle size={32} color="white" />
                    </span>
                </div>

                <button onClick={nextSubSection} className={`${section === 0 ? 'translate-y-[500px]' : 'translate-y-0'} ${section === 2 && subSection === 2 ? 'text-black' : sectionsInfo[section].color} transition-all duration-[750ms] absolute bottom-5 left-1/2 -translate-x-1/2 text-3xl`}>{subSection === 3 ? 'RESET' : 'NEXT'}</button>
            </footer>
        </main>
    )
}