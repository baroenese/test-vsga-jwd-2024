import Image from "next/image"

const lists = [
    {
        id: 1,
        title: "",
        image: "/images/Flight_3_Website_Desktop_2_8cd1983689.jpg",
    },
    {
        id: 2,
        title: "",
        image: "/images/Star6_56_050824_DSC_7676_desktop_87ce5724b4.jpg",
    },
    {
        id: 3,
        title: "",
        image: "/images/Star6_58_051224_DSC_7753_desktop_f36291e0da.jpg",
    },
    {
        id: 4,
        title: "",
        image: "/images/Starlink_G8_2_OS_56_Streak_0222_Full_b590814e5c.jpg",
    },
    {
        id: 5,
        title: "",
        image: "/images/Starlink_G8_7_SW_Hill_Horiz_9864_Desktop_a85ed2f242.jpg",
    },
    {
        id: 6,
        title: "",
        image: "/images/Star6_58_051224_DSC_7753_desktop_f36291e0da.jpg",
    },
    {
        id: 7,
        title: "",
        image: "/images/Eutelsat_36_D_ramph_IMG_9866_desktop_bbf70d45e4.jpg",
    }
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