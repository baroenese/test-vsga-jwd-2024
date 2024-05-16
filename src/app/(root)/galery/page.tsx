import Image from "next/image"

const lists = [
    {
        id: 2,
        title: "",
        image: "/images/galeri/touring-hog-cccar.jpg",
    },
    {
        id: 1,
        title: "",
        image: "/images/galeri/touring-event-cccar.jpg",
    },
    {
        id: 3,
        title: "",
        image: "/images/galeri/touring-ltr-cccar.jpg",
    },
    {
        id: 4,
        title: "",
        image: "/images/galeri/sport-rent-cccar.jpg",
    },
    {
        id: 5,
        title: "",
        image: "/images/galeri/touring-rent-cccar.jpg",
    },
]

export default function Page() {
    return (
        <div>
            <div className="text-xl text-black leading-6 font-semibold px-5 py-4">Galery</div>

            <div className="relative rounded-xl overflow-auto p-8">
                <div className="flex flex-nowrap gap-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-sky rounded-lg">
                    {lists.map((item) => {
                        return (
                            <div key={item.id} className="w-3/5 flex-none border-2 border-black hover:border-pink-500 rounded-2xl shadow hover:shadow-sm overflow-hidden">
                                <Image
                                    src={`${item.image}`}
                                    alt={item.id.toString()}
                                    width={500}
                                    height={500}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}