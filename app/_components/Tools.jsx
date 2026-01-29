import Image from 'next/image'
import SideBarDot from './Shared/SideBarDot'
import { ToolsData } from '../assets/tools'

export default function Tools() {

    const { heading, description, toolsObj } = ToolsData

    return (
        <section className='section-component tools'>
            <SideBarDot />

            {/* Heading */}
            <div className='flex flex-col items-start justify-start gap-1.5' data-aos="fade-up">
                {heading && <h4 className="section-heading">{heading}</h4>}
                {description && <p className="text-gray-500 leading-5 text-sm mb-0">{description}</p>}
            </div>

            {/* DESKTOP GRID */}
            {toolsObj && toolsObj.length > 0 &&
                <>
                    <div className="hidden sm:grid mt-5 lg:mt-6 grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                        {toolsObj.map((item, index) => (
                            <ToolCard key={index} item={item} />
                        ))}
                    </div>

                    <div className="sm:hidden mt-5 tools-wrapper relative">
                        <div className="gradient left-gradient sm:hidden" />
                        <div className="tools-track">
                            {[...toolsObj, ...toolsObj, ...toolsObj].map((item, index) => (
                                <ToolCard key={index} item={item} />
                            ))}
                        </div>
                        <div className="gradient right-gradient sm:hidden" />
                    </div>

                    <div className="sm:hidden mt-4 tools-wrapper relative">
                        <div className="gradient left-gradient sm:hidden" />
                        <div className="tools-track reverse-track">
                            {[...toolsObj, ...toolsObj, ...toolsObj].map((item, index) => (
                                <ToolCard key={index} item={item} />
                            ))}
                        </div>
                        <div className="gradient right-gradient sm:hidden" />
                    </div>
                </>}

        </section>
    )
}

function ToolCard({ item }) {
    return (
        <div className="tool-item">
            <div className={`w-full h-full flex flex-col items-center justify-center bg-slate-200 transition-all duration-300 rounded-md p-4 gap-4 ${item.bgClass}`}>
                <div className='relative overflow-hidden size-12'>
                    <Image src={item.icon} alt={item.name} fill className='object-contain' />
                </div>
                <span className='text-xs text-gray-500 text-center'>{item.name}</span>
            </div>
        </div>
    )
}
