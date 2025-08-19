import Image from 'next/image'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('./contactForm'), { ssr: false })

const TalkAndSend = () => {
    const [showForm, setShowForm] = useState(false)
    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-center h-auto md:h-[70vh] bg-blue-50 gap-10 md:gap-20 p-6'>
                <Image src='/contact/talk.svg' width={100} height={100} alt='Talk' className='w-84 md:w-96 h-auto' />
                <button
                    aria-label="Send us an enquiry"
                    className="focus:outline-none group"
                    onClick={() => setShowForm(true)}
                    style={{ background: 'none', border: 'none', padding: 0 }}
                >
                    <Image
                        src='/contact/send.svg'
                        width={100}
                        height={100}
                        alt='Send'
                        className='w-84 md:w-96 h-auto group-hover:scale-105 transition-transform duration-200 drop-shadow-lg'
                    />
                </button>
            </div>
            {showForm && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
                        onClick={() => setShowForm(false)}
                        aria-label="Close contact form"
                    />
                    {/* Slide-in panel */}
                    <div className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white/80 backdrop-blur-xl shadow-2xl z-50 transition-transform duration-300 animate-slideIn flex flex-col rounded-l-3xl overflow-hidden border-l border-white/30">
                        {/* Accent bar */}
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/70 hover:bg-white/90 shadow flex items-center justify-center text-xl text-gray-600 hover:text-black focus:outline-none border border-gray-200"
                            onClick={() => setShowForm(false)}
                            aria-label="Close contact form"
                        >
                            <span aria-hidden>×</span>
                        </button>
                        <div className="pt-10 px-6 pb-6 overflow-y-auto flex-1 flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">Send Us an Enquiry</h2>
                            <p className="text-gray-600 mb-6 text-sm">We’ll get back to you ASAP.</p>    
                            <ContactForm />
                        </div>
                    </div>
                    <style jsx global>{`
                        @keyframes slideIn {
                            from { transform: translateX(100%); }
                            to { transform: translateX(0); }
                        }
                        .animate-slideIn {
                            animation: slideIn 0.3s cubic-bezier(.4,2,.6,1);
                        }
                    `}</style>
                </>
            )}
        </>
    )
}

export default TalkAndSend
