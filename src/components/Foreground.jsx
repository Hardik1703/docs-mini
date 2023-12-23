import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef();
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isopen: true, tagTitle: "Download Now", tagColor: "bg-green-600" },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet.",
            filesize: ".1mb",
            close: false,
            tag: { isopen: false, tagTitle: "Download Now", tagColor: "bg-green-600" },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isopen: true, tagTitle: "Download Now", tagColor: "bg-blue-600" },
        },
    ];
    return (
        <>
            <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-7'>
                {data.map((items, index) => (
                    <Card data={items} reference={ref} />
                ))}
            </div>
        </>
    )
}

export default Foreground