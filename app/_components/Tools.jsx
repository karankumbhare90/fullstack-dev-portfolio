import Image from 'next/image'

export default function Tools() {

    const toolsObj = [
        {
            name: 'VS Code',
            icon: '/icons/VSCode.svg',
            bgClass: 'hover:bg-blue-100',
        },
        {
            name: 'Git',
            icon: '/icons/Git.svg',
            bgClass: 'hover:bg-red-100',
        },
        {
            name: 'GitHub',
            icon: '/icons/GitHub.svg',
            bgClass: 'hover:bg-slate-100',
        },
        {
            name: 'Webpack',
            icon: '/icons/Webpack.svg',
            bgClass: 'hover:bg-sky-100',
        },
        {
            name: 'Vite',
            icon: '/icons/Vite.js.svg',
            bgClass: 'hover:bg-yellow-100',
        },
        {
            name: 'GitHub Actions',
            icon: '/icons/GitHub Actions.svg',
            bgClass: 'hover:bg-sky-200',
        },
        {
            name: 'Jira',
            icon: '/icons/Jira.svg',
            bgClass: 'hover:bg-blue-200',
        },
        {
            name: 'BitBucket',
            icon: '/icons/BitBucket.svg',
            bgClass: 'hover:bg-blue-200',
        }
    ]


    return (
        <div className='lg:pl-10 lg:border-l border-[var(--gray-color-2)] relative tools pb-10'>
            <div className='absolute h-7 w-7 rounded-full -left-4 top-0 hidden lg:flex items-center justify-center shadow-1 bg-[var(--gray-color-1)]'>
                <span className='h-3 w-3 rounded-full bg-[var(--secondary-color-6)]'></span>
            </div>
            <h4 className='relative'>Tools</h4>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {toolsObj.map((item, index) => (
                    <div key={index} className={`relative`}>
                        <div className={`w-full flex flex-col items-center justify-center bg-[var(--gray-color-1)] transition-all duration-300 rounded-md p-5 gap-4 ${item.bgClass}`}>
                            <div className='relative overflow-hidden size-16'>
                                <Image src={item.icon} alt={item.name} fill className='object-contain' />
                            </div>
                            <span className='text-sm text-[var(--gray-color-5)]'>{item.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
