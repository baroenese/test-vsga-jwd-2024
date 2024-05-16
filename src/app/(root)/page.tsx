import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full">
            <div className="text-xl text-black leading-6 font-semibold px-5 py-4">Welcome</div>
            <div className="flex">
                <Image
                    src="/images/Flight_3_Website_Desktop_2_8cd1983689.jpg"
                    alt="Image from Starship&apos;s Third Flight Test"
                    width={500}
                    height={500}
                    className="w-full bg-center rounded-xl"
                />
            </div>
            <div className="py-8 flex flex-col gap-4">
                <div className="text-xl text-slate-700 font-normal leading-6">MARCH 14, 2024</div>
                <div className="text-3xl text-black font-semibold leading-5">STARSHIP&apos;S THIRD FLIGHT TEST</div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <p className="text-base tracking-wide text-black leading-6 font-normal mb-2">Starship returned to integrated flight testing with its third launch from Starbase in Texas. While it didn&apos;t happen in a lab or on a test stand, it was absolutely a test. What we achieved on this flight will provide invaluable data to continue rapidly developing Starship.</p>
                    <p className="text-base tracking-wide text-black leading-6 font-normal mb-2">On March 14, 2024, Starship successfully lifted off at 8:25 a.m. CT from Starbase in Texas and went on to accomplish several major milestones and firsts:</p>
                    <ul className="pl-12 list-disc flex flex-col gap-2">
                        <li>
                            <p className="text-base tracking-wide text-black leading-6 font-normal">For the second time, all 33 Raptor engines on the Super Heavy Booster started up successfully and completed a full-duration burn during ascent.</p>
                        </li>
                        <li>
                            <p className="text-base tracking-wide text-black leading-6 font-normal">Starship executed its second successful hot-stage separation, powering down all but three of Super Heavy&apos;s Raptor engines and successfully igniting the six second stage Raptor engines before separating the vehicles.</p>
                        </li>
                        <li>
                            <p className="text-base tracking-wide text-black leading-6 font-normal">Following separation, the Super Heavy booster successfully completed its flip maneuver and completed a full boostback burn to send it towards its splashdown point in the Gulf of Mexico.</p>
                        </li>
                        <li>
                            <p className="text-base tracking-wide text-black leading-6 font-normal">Super Heavy successfully lit several engines for its first ever landing burn before the vehicle experienced a RUD (that&apos;s SpaceX-speak for &quot;rapid unscheduled disassembly&quot;). The booster&apos;s flight concluded at approximately 462 meters in altitude and just under seven minutes into the mission.</p>
                        </li>
                        <li>
                            <p className="text-base tracking-wide text-black leading-6 font-normal">Starship&apos;s six second stage Raptor engines all started successfully and powered the vehicle to its expected orbit, becoming the first Starship to complete its full-duration ascent burn.</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="pl-12 list-disc flex flex-col gap-2 mb-2">
                        <li>
                            <p className="text-base tracking-wide text-black leading-6 font-normal">While coasting, Starship accomplished several of the flight test&apos;s additional objectives, including the opening and closing of its payload door (aka the pez dispenser,) and initiating a propellant transfer demonstration. Starship did not attempt its planned on-orbit relight of a single Raptor engine due to vehicle roll rates during coast. Results from these demonstrations will come after postflight data review is complete.</p>
                        </li>
                        <li>
                            <p className="text-base tracking-wide text-black leading-6 font-normal">Starship went on to experience its first ever entry from space, providing valuable data on heating and vehicle control during hypersonic reentry. Live views of entry were made possible by Starlink terminals operating on Starship.</p>
                        </li>
                        <li>
                            <p className="text-base tracking-wide text-black leading-6 font-normal">The flight test&apos;s conclusion came during entry, with the last telemetry signals received via Starlink from Starship at approximately 49 minutes into the mission.</p>
                        </li>
                    </ul>

                    <p className="text-base tracking-wide text-black leading-6 font-normal mb-2">While our team reviews the data collected from this flight, Starship and Super Heavy vehicles are preparing for upcoming flights as we seek to increase our launch cadence throughout the year.</p>
                    <p className="text-base tracking-wide text-black leading-6 font-normal mb-2">This rapid iterative development approach has been the basis for all of SpaceX&apos;s major innovative advancements, including Falcon, Dragon, and Starlink. Recursive improvement is essential as we work to build a fully reusable transportation system capable of carrying both crew and cargo to Earth orbit, help humanity return to the Moon, and ultimately travel to Mars and beyond.</p>
                    <p className="text-base tracking-wide text-black leading-6 font-normal mb-2">Thank you to our customers, Cameron County, spaceflight fans, and the wider community for the continued support and encouragement. And congratulations to the entire SpaceX team on an exciting third flight test of Starship!</p>
                </div>
            </div>
        </div>
    );
}
