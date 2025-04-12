import Image from "next/image"

export default function AboutHero() {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"
                    alt="Construction company headquarters"
                    fill
                    priority
                    className="object-cover brightness-[0.4]"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-0"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Crafting Excellence <br />
                        Since <span className="text-yellow-400">1998</span>
                    </h1>
                    <div className="w-20 h-1 bg-yellow-500 mb-8"></div>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        For over two decades, we have been building more than structures – we&apos;ve been building trust,
                        reputation, and a legacy of excellence in the construction industry.
                    </p>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-0"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 border border-yellow-500/30 z-0"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 border border-yellow-500/20 z-0"></div>
        </section>
    )
}
