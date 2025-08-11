import React from 'react'

const NotLast = () => {
    return (
        <section className="bg-[#161c2d] flex items-center text-white/90 min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] py-12 sm:py-16 md:py-20 font-sans my-4 sm:my-6">
            <div className='flex flex-col items-center w-full gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-12'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-tight'>
                    The End of the Page,<br />
                    but the Start of Your Transformation.
                </h1>
                <p className='text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl sm:max-w-4xl text-center leading-relaxed text-white/80'>
                    If you've made it this far, you're clearly invested in growth and that's our favorite kind of person. Let's put your ambition to work with solutions that truly make a difference.
                </p>

                <button className='px-6 sm:px-8 py-3 sm:py-4 mt-4 sm:mt-6 border-2 border-white rounded-xl cursor-pointer hover:bg-white hover:text-[#161c2d] transition-all duration-300 font-semibold text-sm sm:text-base'>
                    Let's Make it Happen
                </button>
            </div>
        </section>
    )
}

export default NotLast
