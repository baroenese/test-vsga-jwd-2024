import Image from "next/image"

const lists = {
    "galery": [
        {
            "id": 1,
            "title": "STARLINK MISSION",
            "description": `<p class="text-sm leading-6 mb-2 text-slate-700">On Friday, April 5 at 5:12 a.m. ET, Falcon 9 launched 23 Starlink satellites to low-Earth orbit from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station in Florida.</p>`,
            "date": "APRIL 5, 2024",
            "image_url": "/images/artikel/Star6_47_040524_sterak2_desktop_22aa01b011.jpg"
        },
        {
            "id": 3,
            "title": "EUTELSAT 36D MISSION",
            "description": `<p class="text-sm leading-6 mb-2 text-slate-700">On Saturday, March 30 at 5:52 p.m. ET, Falcon 9 launched the EUTELSAT 36D mission to a geosynchronous transfer orbit from Launch Complex 39A (LC-39A) at the Kennedy Space Center in Florida.</p>`,
            "date": "MARCH 30, 2024",
            "image_url": "/images/artikel/Eutelsat_36_D_ramph_IMG_9866_desktop_bbf70d45e4.jpg"
        },
        {
            "id": 2,
            "title": "STARLINK MISSION",
            "description": `<p class="text-sm leading-6 mb-2 text-slate-700">On Monday, March 18 at 7:28 p.m. PT, Falcon 9 launched Starlink satellites to low-Earth orbit from Space Launch Complex 4 East (SLC-4E) at Vandenberg Space Force Base in California.</p>`,
            "date": "MARCH 18, 2024",
            "image_url": "/images/artikel/2_Desktop_182ba4f49c.jpg"
        },
        {
            "id": 4,
            "title": "STARSHIP'S THIRD FLIGHT TEST",
            "description": `<p class="text-sm leading-6 mb-2 text-slate-700">Starship returned to integrated flight testing with its third launch from Starbase in Texas. While it didn’t happen in a lab or on a test stand, it was absolutely a test. What we achieved on this flight will provide invaluable data to continue rapidly developing Starship.</p>`,
            "date": "MARCH 14, 2024",
            "image_url": "/images/artikel/Flight_3_Website_Desktop_2_8cd1983689.jpg"
        },
    ]

}

export default function Page() {
    return (
        <div>
            <div className="text-xl text-black leading-6 font-semibold px-5 py-4">Artikel</div>

            <div className="grid grid-cols-3 gap-6">
                {lists.galery.map((item) => {
                    return (
                        <div key={item.id} className="p-4 rounded-2xl border-2 border-black shadow-sm hover:border-pink-500 hover:shadow">
                            <Image
                                src={item.image_url}
                                alt={item.title}
                                width={500}
                                height={500}
                                className="w-full bg-center rounded-xl"
                            />
                            <div className="text-xl text-black leading-6 font-semibold py-3 mt-3">{item.title}</div>
                            <div>{item.date}</div>
                            <div
                                dangerouslySetInnerHTML={{ __html: item.description }}
                            ></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}