export default function Page() {
    return (
        <div>
            <div className="rounded-2xl border-2 border-black overflow-hidden shadow-sm">
                <div className="bg-black p-8">
                    <div className="text-2xl text-white leading-6 font-semibold">Visi dan Misi</div>
                </div>
                <div className="p-12">
                    <div className="w-full max-w-2xl mx-auto">
                        <div className="text-3xl text-black leading-6 font-semibold text-center mb-4">Visi</div>
                        <p className="text-2xl text-black leading-8 font-normal mb-2 text-center">
                            {`Building our legend and leading through innovation, evolution and emotion.`}
                        </p>

                        <div className="mb-12"></div>

                        <div className="text-3xl text-black leading-6 font-semibold text-center mb-4">Misi</div>
                        <p className="text-2xl text-black leading-8 font-normal mb-2 text-center">
                            {`More than building machines, we stand for the timeless pursuit of adventure. Freedom for the soul.`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}