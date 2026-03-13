"use client";

import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="w-full relative mt-20 bg-white">
            {/* Dark Top Section */}
            <div className="bg-[#003953] w-full pt-28 pb-96 px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Contact Our Friendly Team
                </h2>
                <p className="text-gray-200 text-lg">
                    Let us know how we can help
                </p>
            </div>

            {/* Overlapping Card */}
            <div className="max-w-6xl mx-auto px-4 -mt-70 mb-32 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden border border-none">
                    {/* Left: Form */}
                    <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16">
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="flex flex-col">
                                    <label className="text-gray-500 font-semibold text-sm mb-2">First Name</label>
                                    <input type="text" className="border-b border-gray-400 focus:border-[#053D52] outline-none py-2 text-black bg-transparent transition-colors w-full" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-gray-500 font-semibold text-sm mb-2">Last Name</label>
                                    <input type="text" className="border-b border-gray-400 focus:border-[#053D52] outline-none py-2 text-black bg-transparent transition-colors w-full" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="flex flex-col">
                                    <label className="text-gray-500 font-semibold text-sm mb-2">Email</label>
                                    <input type="email" className="border-b border-gray-400 focus:border-[#053D52] outline-none py-2 text-black bg-transparent transition-colors w-full" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-gray-500 font-semibold text-sm mb-2">Phone Number</label>
                                    <input type="tel" className="border-b border-gray-400 focus:border-[#053D52] outline-none py-2 text-black bg-transparent transition-colors w-full" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-500 font-semibold text-sm mb-2">Message</label>
                                <textarea rows={1} className="border-b border-gray-400 focus:border-[#053D52] outline-none py-2 text-black bg-transparent transition-colors w-full resize-none"></textarea>
                            </div>
                            <div className="flex justify-end pt-4">
                                <button type="submit" className="bg-[#004753] cursor-pointer text-white px-10 py-3 rounded-lg text-sm font-semibold hover:bg-[#032a39] transition-all shadow-md hover:shadow-lg">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Reach Us Gradient Card */}
                    <div className="w-full md:w-2/5 bg-gradient-to-b from-[#2592A4] to-[#004753] p-8 md:p-12 lg:p-16 -mt-10 text-white flex flex-col justify-center">
                        <h3 className="text-3xl font-medium mb-12">Reach Us</h3>
                        <div className="space-y-10">
                            <div className="flex items-center gap-6">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A8B9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </div>
                                <p className="text-base font-medium">support@knitnet.com</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A8B9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <p className="text-base font-medium">+91 - 123 - 411433354</p>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A8B9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div className="text-base font-medium space-y-2">
                                    <p>Knitnet Technologies Pvt. Ltd</p>
                                    <p className="text-gray-200 text-sm leading-relaxed">24, Tech park, Anna nagar , Chennai</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="max-w-6xl mx-auto px-4 pb-20">
                <div className="flex flex-col lg:flex-row justify-between pt-12 gap-12 lg:gap-8">
                    {/* Brand & Socials */}
                    <div className="flex flex-col space-y-6 lg:w-1/4">
                        <h3 className="text-3xl font-semibold text-black">Knitnet</h3>
                        <p className="text-sm font-semibold text-gray-500">
                            &copy; 2026 Knitnet AI. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            {/* Twitter */}
                            <a href="#" className="text-black hover:text-[#1DA1F2] hover:drop-shadow-[0_0_8px_rgba(29,161,242,0.8)] hover:-translate-y-1 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="text-black hover:text-[#0A66C2] hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.8)] hover:-translate-y-1 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="text-black hover:text-[#1877F2] hover:drop-shadow-[0_0_8px_rgba(24,119,242,0.8)] hover:-translate-y-1 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            {/* GitHub */}
                            <a href="#" className="text-black hover:text-[#333333] hover:drop-shadow-[0_0_8px_rgba(51,51,51,0.8)] hover:-translate-y-1 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="text-black hover:text-[#E1306C] hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.8)] hover:-translate-y-1 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-8 lg:justify-items-end">
                        {/* Column 2 - COMPANY */}
                        <div className="flex flex-col space-y-5 lg:pl-10">
                            <h4 className="text-base font-semibold text-black uppercase tracking-wider mb-2">Company</h4>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">About Us</Link>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">Careers</Link>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">Our Goal</Link>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">Privacy Policy</Link>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">Terms of Use</Link>
                        </div>

                        {/* Column 3 - PLATFORM */}
                        <div className="flex flex-col space-y-5">
                            <h4 className="text-base font-semibold text-black uppercase tracking-wider mb-2">Platform</h4>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">AI Interview Practice</Link>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">Mock Interviews</Link>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">Skill Assessment</Link>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">Performance Reports</Link>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">Feedback System</Link>
                        </div>

                        {/* Column 4 - RESOURCES */}
                        <div className="flex flex-col space-y-5">
                            <h4 className="text-base font-semibold text-black uppercase tracking-wider mb-2">Resources</h4>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">User Guide</Link>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">Blog</Link>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">Documentation</Link>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">FAQs</Link>
                            <Link href="#" className="text-base font-medium text-gray-400 hover:text-black transition-colors">Support</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
