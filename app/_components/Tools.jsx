import Image from 'next/image'
import SideBarDot from './Shared/SideBarDot'

export default function Tools() {

    const toolsObj = [
        { name: 'VS Code', icon: '/icons/VSCode.svg', bgClass: 'hover:bg-blue-100/30' },
        { name: 'Git', icon: '/icons/Git.svg', bgClass: 'hover:bg-red-100/30' },
        { name: 'GitHub', icon: '/icons/GitHub.svg', bgClass: 'hover:bg-slate-100/30' },
        { name: 'Webpack', icon: '/icons/Webpack.svg', bgClass: 'hover:bg-sky-100/30' },
        { name: 'Vite', icon: '/icons/Vite.js.svg', bgClass: 'hover:bg-yellow-100/30' },
        { name: 'GitHub Actions', icon: '/icons/GitHub Actions.svg', bgClass: 'hover:bg-sky-200/30' },
        { name: 'Jira', icon: '/icons/Jira.svg', bgClass: 'hover:bg-blue-200/30' },
        { name: 'BitBucket', icon: '/icons/BitBucket.svg', bgClass: 'hover:bg-blue-200/30' }
    ]

    return (
        <section className='section-component tools'>
            <SideBarDot />

            {/* Heading */}
            <div className='flex flex-col items-start justify-start gap-1.5' data-aos="fade-up">
                <h4 className='section-heading mb-0'>Tools</h4>
                <p className='section-subheading'>Experience I've in Development</p>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden sm:grid mt-5 lg:mt-6 grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                {toolsObj.map((item, index) => (
                    <ToolCard key={index} item={item} />
                ))}
            </div>

            {/* MOBILE ROW 1 (right → left) */}
            <div className="sm:hidden mt-5 tools-wrapper relative">
                <div className="gradient left-gradient sm:hidden" />
                <div className="tools-track">
                    {[...toolsObj, ...toolsObj, ...toolsObj].map((item, index) => (
                        <ToolCard key={index} item={item} />
                    ))}
                </div>
                <div className="gradient right-gradient sm:hidden" />
            </div>

            {/* MOBILE ROW 2 (left → right) */}
            <div className="sm:hidden mt-4 tools-wrapper relative">
                <div className="gradient left-gradient sm:hidden" />
                <div className="tools-track reverse-track">
                    {[...toolsObj, ...toolsObj, ...toolsObj].map((item, index) => (
                        <ToolCard key={index} item={item} />
                    ))}
                </div>
                <div className="gradient right-gradient sm:hidden" />
            </div>

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
