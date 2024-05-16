import Image from "next/image"

const lists = {
    "galery": [
        {
            "id": 1,
            "title": "BELAJAR BERKENDARA",
            "description": `<p class="text-sm leading-6 mb-2 text-slate-700">Baik Anda seorang pengendara kawakan maupun baru akan melangkah sebagai pemula, hubungi dealer Anda untuk mengetahui berbagai peluang yang disesuaikan bagi para penggemar dari setiap tingkat keahlian.</p>`,
            "date": "APRIL 5, 2024",
            "image_url": "/images/artikel/touring-ltr-cccar.jpg"
        },
        {
            "id": 3,
            "title": "ACARA",
            "description": `<p class="text-sm leading-6 mb-2 text-slate-700">Dari acara berkendara lokal ke acara dealer hingga reli beberapa hari, temukan pengalaman motor kelas dunia untuk setiap jenis pengendara.</p>`,
            "date": "MARCH 30, 2024",
            "image_url": "/images/artikel/touring-event-cccar.jpg"
        },
        {
            "id": 2,
            "title": "PENYEWAAN",
            "description": `<p class="text-sm leading-6 mb-2 text-slate-700">Rasakan petualangan berkendara terbaik dengan menyewa motor dari penyewaan resmi Harley-Davidson Authorized Rentals serta EagleRider Rentals and Tours. </p>`,
            "date": "MARCH 18, 2024",
            "image_url": "/images/artikel/sport-rent-cccar.jpg"
        },
        {
            "id": 4,
            "title": "HARLEY OWNERS GROUP (HOG)",
            "description": `<p class="text-sm leading-6 mb-2 text-slate-700">Sejak menjadi klub berkendara resmi H-D pada tahun 1983, Harley Owners Group menyediakan akses ke berbagai manfaat eksklusif untuk membantu Anda mendapatkan pengalaman optimal sebagai pemilik motor.</p>`,
            "date": "MARCH 14, 2024",
            "image_url": "/images/artikel/touring-hog-cccar.jpg"
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