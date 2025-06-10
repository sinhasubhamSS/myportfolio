'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function EmailSection() {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSending(true)
        setError(null)

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const resData = await response.json()

            if (resData.message === "success") {
                setEmailSubmitted(true)
                e.target.reset()
            } else {
                setError(resData.error || "Message failed to send")
            }
        } catch (err) {
            setError("Something went wrong! Please try again.")
            console.error("Error submitting email:", err)
        } finally {
            setIsSending(false)
        }
    }

    const handleReset = () => {
        setEmailSubmitted(false)
        setError(null)
    }

    return (
        <section id="contact" className='grid md:grid-cols-2 my-12 py-24 gap-4'>
            <div className="text-[#ADB7BE] mb-4 max-w-md">
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4">
                    I&apos;m currently looking for new opportunities. My inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="https://github.com">
                        <Image src='/github.svg' alt='GitHub icon' width={30} height={30} className='' />
                    </Link>
                    <Link href="https://linkedin.com">
                        <Image src='/linkedin.svg' alt='LinkedIn icon' width={30} height={30} />
                    </Link>
                </div>
            </div>

            <div>
                {emailSubmitted ? (
                    <div className="bg-green-600 text-white rounded-lg p-6 text-center">
                        <h2 className="text-2xl font-semibold mb-4">Message Sent Successfully!</h2>
                        <p className="mb-6">Thank you for reaching out. I will get back to you soon.</p>
                        <button
                            onClick={handleReset}
                            className="bg-white text-green-600 font-semibold py-2 px-5 rounded-lg hover:bg-gray-200 transition"
                        >
                            Send Another Message
                        </button>
                    </div>
                ) : (
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="text-white mb-1 block text-sm font-medium">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="example@gmail.com"
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        />

                        <label htmlFor="subject" className="text-white mb-1 block text-sm font-medium">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            placeholder="Just Saying Hi"
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        />

                        <label htmlFor="message" className="text-white mb-1 block text-sm font-medium">Message</label>
                        <input
                            type="text"
                            id="message"
                            name="message"
                            required
                            placeholder="Let's talk about..."
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        />

                        <button
                            type="submit"
                            disabled={isSending}
                            className={`mt-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-5 rounded-lg w-full cursor-pointer ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>

                        {error && (
                            <p className='text-red-500 text-sm mt-2'>{error}</p>
                        )}
                    </form>
                )}
            </div>
        </section>
    )
}

export default EmailSection
