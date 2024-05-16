import Image from "next/image";

export default function Page() {
    return (
        <div>
            <div className="rounded-2xl border-2 border-black overflow-hidden shadow-sm">
                <div className="bg-black p-8">
                    <div className="text-2xl text-white leading-6 font-semibold">Klien Kami</div>
                </div>
                <div className="p-0">
                    <div>
                        <Image
                            src="/images/klien-kami.jpg"
                            alt="Klien Kami"
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}