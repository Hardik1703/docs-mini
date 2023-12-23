import React from 'react'
import Card from './Card'

const Foreground = () => {
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isopen: true, tagTitle: "Download Now" },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet.",
            filesize: ".1mb",
            close: false,
            tag: { isopen: false, tagTitle: "Download Now" },
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: { isopen: true, tagTitle: "Download Now" },
        },
    ];
    return (
        <>
            <div className='fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-5'>
                {data.map((items, index) => (
                    <Card data={items} />
                ))}
            </div>
        </>
    )
}

export default Foreground