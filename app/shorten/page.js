"use client"
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const [loading, setLoading] = useState(false)

    const generate = async () => {
        if (!url || !shorturl) {
            alert("Please fill in both URL and custom text")
            return
        }

        // Validate URL format
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            alert("Please include http:// or https:// in your URL")
            return
        }

        // Validate short URL (only letters, numbers, hyphens)
        if (!/^[a-zA-Z0-9-]+$/.test(shorturl)) {
            alert("Short URL can only contain letters, numbers, and hyphens")
            return
        }

        setLoading(true)

        try {
            console.log("🔄 Sending request to API...")
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url: url,
                    shorturl: shorturl  // This should be your custom text like "cwhhi"
                })
            })

            console.log("📨 API Response status:", response.status)
            const result = await response.json()
            console.log("📨 API Response data:", result)

            if (result.success) {
                // FIX: Use the shorturl variable, not the full URL
                const host = process.env.NEXT_PUBLIC_HOST || window.location.origin
                const generatedUrl = `${host}/${shorturl}`
                setGenerated(generatedUrl)
                seturl("")
                setshorturl("")
                alert("URL Generated Successfully!")
            } else {
                alert("Error: " + result.message)
            }
        } catch (error) {
            console.error("💥 Fetch error:", error)
            alert("Network error: " + error.message)
        } finally {
            setLoading(false)
        }
    }

    const openInNewTab = () => {
        if (generated) {
            window.open(generated, '_blank', 'noopener,noreferrer')
        }
    }

    const copyToClipboard = () => {
        if (generated) {
            navigator.clipboard.writeText(generated)
            alert("Copied to clipboard!")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 p-6">
            <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className='text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                        Shorten Your URL
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Create custom short links instantly
                    </p>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    {/* Long URL Input */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Long URL (include http:// or https://)
                        </label>
                        <input
                            type="text"
                            value={url}
                            className='w-full px-4 py-3 rounded-xl border-2 border-purple-100 bg-white/50 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 placeholder-gray-400'
                            placeholder='https://example.com/very-long-url'
                            onChange={e => { seturl(e.target.value) }}
                        />
                    </div>

                    {/* Custom Short URL Input */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Custom Short URL (letters, numbers, hyphens only)
                        </label>
                        <div className="flex items-center">
                            <span className="px-4 py-3 bg-purple-100 text-purple-700 rounded-l-xl border-2 border-r-0 border-purple-100 font-medium text-sm">
                                {process.env.NEXT_PUBLIC_HOST || window.location.origin}/
                            </span>
                            <input
                                type="text"
                                value={shorturl}
                                className='flex-1 px-4 py-3 rounded-r-xl border-2 border-purple-100 bg-white/50 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 placeholder-gray-400'
                                placeholder='my-custom-link'
                                onChange={e => { setshorturl(e.target.value) }}
                            />
                        </div>
                    </div>

                    {/* Generate Button */}
                    <button
                        onClick={generate}
                        disabled={loading}
                        className='w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-purple-300 disabled:to-pink-300 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 disabled:scale-100 transition-all duration-300 flex items-center justify-center gap-2'
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Generating...
                            </>
                        ) : (
                            <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Generate Short URL
                            </>
                        )}
                    </button>
                </div>

                {/* Generated Link */}
                {generated && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-100 space-y-3">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className='font-semibold text-purple-700'>Your Short Link is Ready!</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <code className="flex-1 p-3 bg-white rounded-lg border border-purple-200 text-purple-800 text-sm break-all">
                                {generated}
                            </code>
                            <button
                                onClick={copyToClipboard}
                                className="px-3 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-1"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copy
                            </button>
                        </div>

                        <button
                            onClick={openInNewTab}
                            className="w-full py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Open in New Tab
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Shorten