import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <>
      <motion.div dragConstraints={reference} drag
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 px-5 py-10 text-white overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm font-semibold mt-5 leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full'>
          <div className='flex items-center justify-between mb-3 py-3 px-8'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close ? <IoClose /> : <GoDownload size=".9em" color="#fff" />}
            </span>
          </div>
          {data.tag.isopen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor} flex items-center justify-center`}>
              <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  )
}

export default Card