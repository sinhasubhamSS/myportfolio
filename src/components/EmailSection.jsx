'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function EmailSection() {
    const [emailSubmitted, setEmailSubmitted] = useState(false)

   const handleSubmit = async (e) => {
    e.preventDefault()

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
        console.log('API Response:', resData)

        if (resData.message === "success"){ // ✅ Fixed this line
            setEmailSubmitted(true)
            alert("Message sent successfully")
            e.target.reset() // Reset form after success
        } else {
            alert("Message failed to send")
            if (resData.error) { // Only log if error exists
                console.error(resData.error)
            }
        }
    } catch (err) {
        alert("Something went wrong!")
        console.error("Error submitting email:", err)
    }
}

    return (
        <section className='grid md:grid-cols-2 my-12 py-24 gap-4'>
            <div className="text-[#ADB7BE] mb-4 max-w-md">
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4">
                    I&apos;m currently looking for new opportunities. My inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="https://github.com">
                        <Image src='/github.svg' alt='GitHub icon' width={30} height={30} />
                    </Link>
                    <Link href="https://linkedin.com">
                        <Image src='/linkedin.svg' alt='LinkedIn icon' width={30} height={30} />
                    </Link>
                </div>
            </div>

            <div>
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
                        className='mt-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                    >
                        Send Message
                    </button>

                    {emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>Email sent successfully!</p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default EmailSection
