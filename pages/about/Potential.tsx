import Image from 'next/image'
import React from 'react'

const Potential = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center my-20s'>

            <Image src='/About/pote.svg' width={130} height={100} alt='potential' className='w-full h-full my-20' />
        </div>
    )
}

export default Potential