'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'
import { FaEnvelope } from 'react-icons/fa'

const Heartbeat = () => {
    return (
        <section id="heartbeat" className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                <div className="space-y-16 md:space-y-32">
                    <div className="text-center space-y-4 md:space-y-6">
                        <h3 className="text-3xl md:text-7xl font-serif text-[#1A1A1A]">Our Heartbeat</h3>
                        <p className="text-[#6A6A6A] font-serif italic text-base md:text-2xl tracking-wide max-w-2xl mx-auto">
                            The people driving the <span className="text-[#8A9A84] font-normal">vision</span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 max-w-7xl mx-auto">
                        {/* Founder Profile - Rachel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="group bg-white p-6 md:p-12 lg:p-20 rounded-[2.5rem] md:rounded-[4rem] border border-[#E8E8E8] shadow-[0_40px_100px_-20px_rgba(200,90,74,0.05)] hover:shadow-2xl transition-all duration-700"
                        >
                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
                                <div className="relative">
                                    <div className="w-20 h-20 md:w-40 md:h-40 rounded-full bg-[#C85A4A]/5 flex items-center justify-center text-[#C85A4A] font-serif text-3xl md:text-7xl font-bold shadow-inner group-hover:scale-105 transition-transform duration-700 ring-2 md:ring-4 ring-white">
                                        R
                                    </div>
                                </div>
                                <div className="flex-1 space-y-4 md:space-y-6">
                                    <div>
                                        <h4 className="text-2xl md:text-5xl font-serif text-[#1A1A1A]">Rachel Macharia</h4>
                                        <p className="text-[#C85A4A] font-semibold uppercase tracking-[0.2em] text-[10px] md:text-xs pt-2" style={{ fontFamily: 'Sora, sans-serif' }}>Founder & Director</p>
                                    </div>
                                    <p className="text-sm md:text-xl text-[#4A4A4A] leading-relaxed font-light">
                                        Rachel leads with a fierce compassion, ensuring every child feels the warmth of being truly seen and loved. Her drive comes from the belief that no one should be left behind.
                                    </p>
                                    <a href="mailto:rachelmacharia80@gmail.com" className="btn-secondary px-8 py-3 text-[10px] md:text-xs flex items-center justify-center md:justify-start gap-3 w-fit mx-auto md:mx-0">
                                        <FaEnvelope /> Email Rachel
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Founder Profile - Stella */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="group bg-white p-6 md:p-12 lg:p-20 rounded-[2.5rem] md:rounded-[4rem] border border-[#E8E8E8] shadow-[0_40px_100px_-20px_rgba(138,154,132,0.05)] hover:shadow-2xl transition-all duration-700"
                        >
                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
                                <div className="relative">
                                    <div className="w-20 h-20 md:w-40 md:h-40 rounded-full bg-[#8A9A84]/5 flex items-center justify-center text-[#8A9A84] font-serif text-3xl md:text-7xl font-bold shadow-inner group-hover:scale-105 transition-transform duration-700 ring-2 md:ring-4 ring-white">
                                        S
                                    </div>
                                </div>
                                <div className="flex-1 space-y-4 md:space-y-6">
                                    <div>
                                        <h4 className="text-2xl md:text-5xl font-serif text-[#1A1A1A]">Stella Wanjiru</h4>
                                        <p className="text-[#8A9A84] font-semibold uppercase tracking-[0.2em] text-[10px] md:text-xs pt-2" style={{ fontFamily: 'Sora, sans-serif' }}>Co-Founder</p>
                                    </div>
                                    <p className="text-sm md:text-xl text-[#4A4A4A] leading-relaxed font-light">
                                        Stella brings coordinate care and strategic warmth to our outreach, helping us expand our reach to more families and ensuring excellence in our programs.
                                    </p>
                                    <a href="mailto:stella_wanjiru@gmail.com" className="btn-secondary px-8 py-3 text-xs flex items-center justify-center md:justify-start gap-3 w-fit mx-auto md:mx-0">
                                        <FaEnvelope /> Email Stella
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Heartbeat)
