export default function Page() {
    return (
        <div>
            <div className="rounded-2xl border-2 border-black overflow-hidden shadow-sm">
                <div className="bg-black p-8">
                    <div className="text-2xl text-white leading-6 font-semibold">Visi dan Misi</div>
                </div>
                <div className="p-12">
                    <p className="text-2xl text-black leading-8 font-normal mb-2 text-center">
                        {`“You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars.” -Baroen Sudarman`}
                    </p>
                </div>
            </div>
        </div>
    )
}