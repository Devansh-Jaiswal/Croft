import React from 'react';
import { motion } from 'framer-motion';
import { GlassNavbar } from '../components/ui/GlassNavbar';
import { GlassButton } from '../components/ui/GlassButton';
import { GlassCard } from '../components/ui/GlassCard';

const GlassDemo: React.FC = () => {
    return (
        <div className="min-h-screen relative overflow-hidden bg-neutral-50 selection:bg-rose-500/30">
            <GlassNavbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
                <div className="container mx-auto text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 relative inline-block"
                    >
                        <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full mix-blend-multiply filter opacity-50 animate-pulse-slow"></div>
                        <span className="relative py-1 px-4 rounded-full border border-neutral-200/50 bg-white/40 backdrop-blur-sm text-sm font-medium text-neutral-600">
                            New: Glassmorphism Design System 2.0
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 mb-6 text-balance"
                    >
                        Crafted with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500">
                            Organic Transparency
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Experience a user interface that feels alive. Deep layers, soft shadows,
                        and a touch of human imperfection make this digital space feel tangible.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <GlassButton size="lg" variant="primary">Explore Collection</GlassButton>
                        <GlassButton size="lg" variant="glass">View Documentation</GlassButton>
                    </motion.div>
                </div>

                {/* Background Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <GlassCard>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 mb-6 flex items-center justify-center text-2xl shadow-sm">
                                ✨
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Natural Feel</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Elements mimic real-world materials with frosted glass textures and organic light interactions.
                            </p>
                        </GlassCard>

                        <GlassCard variant="featured">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 mb-6 flex items-center justify-center text-2xl shadow-sm">
                                🌊
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Fluid Motion</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Every interaction is accompanied by smooth, physics-based animations that delight the user.
                            </p>
                        </GlassCard>

                        <GlassCard>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 mb-6 flex items-center justify-center text-2xl shadow-sm">
                                🌿
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Eco-friendly</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Designed with a light footprint and calming aesthetics that reduce digital fatigue.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GlassDemo;
