import Image from 'next/image'
import React from 'react'

const TalkAndSend = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center h-auto md:h-[70vh] bg-blue-50 gap-10 md:gap-20 p-6'>
            <Image src='/contact/talk.svg' width={100} height={100} alt='Talk' className='w-84 md:w-96 h-auto' />
            <Image src='/contact/send.svg' width={100} height={100} alt='Send' className='w-84 md:w-96 h-auto' />
        </div>
    )
}

export default TalkAndSend
