export default function Page() {
    return (
        <div>
            <div className="rounded-2xl border-2 border-black overflow-hidden shadow-sm">
                <div className="bg-black p-8">
                    <div className="text-2xl text-white leading-6 font-semibold">Kontak Kami</div>
                </div>
                <div className="p-12">
                    <div className="mb-12 flex flex-col">
                        <div className="flex items-center space-x-4">
                            <div className="text-xl text-black leading-6 font-semibold mb-2 text-justify">Nomor Telepon: </div>
                            <p className="text-xl text-black leading-6 font-normal mb-2 text-justify">082187617384 (Baroen Sudarman)</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-xl text-black leading-6 font-semibold mb-2 text-justify">Alamat: </div>
                            <p className="text-xl text-black leading-6 font-normal mb-2 text-justify">Jl. Pangeran Hidayat (JDS Bawah), Kelurahan Dulalowo Timur, Kecamatan Kota Tengah, Kota Gorontalo, Gorontalo. POS. 96128</p>
                        </div>
                    </div>
                    <p className="text-xl text-black leading-6 font-normal mb-2 text-justify">📧 baroensu@gmail.com</p>
                </div>
            </div>
        </div>
    )
}