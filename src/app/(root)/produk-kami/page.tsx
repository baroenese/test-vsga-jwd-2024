import Image from "next/image"

const lists = {
    "products": [
        {
            "id": 1,
            "product_name": "UNISEX STARSHIP TEST FLIGHT T-SHIRT",
            "description": "The Starlink Kit includes a satellite dish and a router. It is the basic setup required to access the Starlink satellite internet service.",
            "manufacturer": "SpaceX",
            "launch_date": "2020-02-17",
            "price": "$499",
            "availability": "Currently available in select regions. Expansion ongoing.",
            "website": "https://www.starlink.com/",
            "contact_info": {
                "email": "support@starlink.com",
                "phone": "+1 (888) 123-4567"
            },
            "image_url": "/images/product/SpaceXCrewSandFront_600x.png"
        },
        {
            "id": 2,
            "product_name": "UNISEX YEAR OF DRAGON T-SHIRT",
            "description": "The Starlink Dish is the satellite receiver used to connect to the Starlink satellite internet service. It is compact and easy to install.",
            "manufacturer": "SpaceX",
            "launch_date": "2020-02-17",
            "price": "$299",
            "availability": "Currently available in select regions. Expansion ongoing.",
            "website": "https://www.starlink.com/",
            "contact_info": {
                "email": "support@starlink.com",
                "phone": "+1 (888) 123-4567"
            },
            "image_url": "/images/product/SpacexYearofDragonTeeBlackFront_600x.png"
        },
        {
            "id": 3,
            "product_name": "UNISEX STARSHIP FLIGHT 3 T-SHIRT",
            "description": "The Starlink Dish is the satellite receiver used to connect to the Starlink satellite internet service. It is compact and easy to install.",
            "manufacturer": "SpaceX",
            "launch_date": "2020-02-17",
            "price": "$299",
            "availability": "Currently available in select regions. Expansion ongoing.",
            "website": "https://www.starlink.com/",
            "contact_info": {
                "email": "support@starlink.com",
                "phone": "+1 (888) 123-4567"
            },
            "image_url": "/images/product/STARSHIPFLIGHT2_MENS-BLACK-BACK_600x.png"
        },
        {
            "id": 4,
            "product_name": "UNISEX STARSHIP FLIGHT 2 T-SHIRT",
            "description": "The Starlink Dish is the satellite receiver used to connect to the Starlink satellite internet service. It is compact and easy to install.",
            "manufacturer": "SpaceX",
            "launch_date": "2020-02-17",
            "price": "$299",
            "availability": "Currently available in select regions. Expansion ongoing.",
            "website": "https://www.starlink.com/",
            "contact_info": {
                "email": "support@starlink.com",
                "phone": "+1 (888) 123-4567"
            },
            "image_url": "/images/product/STARSHIPFLIGHT3_UNISEX-BLACK-BACK_600x.png"
        },
        {
            "id": 5,
            "product_name": "UNISEX X COLLECTION SWEATSHIRT",
            "description": "The Starlink Dish is the satellite receiver used to connect to the Starlink satellite internet service. It is compact and easy to install.",
            "manufacturer": "SpaceX",
            "launch_date": "2020-02-17",
            "price": "$299",
            "availability": "Currently available in select regions. Expansion ongoing.",
            "website": "https://www.starlink.com/",
            "contact_info": {
                "email": "support@starlink.com",
                "phone": "+1 (888) 123-4567"
            },
            "image_url": "/images/product/STARSHIPTESTFLIGHT_MENS-T-SHIRT-BLACK-BACK_600x.png"
        },
        {
            "id": 6,
            "product_name": "UNISEX X COLLECTION LONG SLEEVE T-SHIRT",
            "description": "The Starlink Dish is the satellite receiver used to connect to the Starlink satellite internet service. It is compact and easy to install.",
            "manufacturer": "SpaceX",
            "launch_date": "2020-02-17",
            "price": "$299",
            "availability": "Currently available in select regions. Expansion ongoing.",
            "website": "https://www.starlink.com/",
            "contact_info": {
                "email": "support@starlink.com",
                "phone": "+1 (888) 123-4567"
            },
            "image_url": "/images/product/XCollectionLongSleeveBlackFront_600x.png"
        },
        {
            "id": 7,
            "product_name": "STARSHIP STICKER PACK",
            "description": "The Starlink Dish is the satellite receiver used to connect to the Starlink satellite internet service. It is compact and easy to install.",
            "manufacturer": "SpaceX",
            "launch_date": "2020-02-17",
            "price": "$299",
            "availability": "Currently available in select regions. Expansion ongoing.",
            "website": "https://www.starlink.com/",
            "contact_info": {
                "email": "support@starlink.com",
                "phone": "+1 (888) 123-4567"
            },
            "image_url": "/images/product/STARSHIP_STICKERPACK_grid_800x_21aac1c3-1f2b-4f2a-8ccf-5a8e36e41750_600x.png"
        },
    ]

}

export default function Page() {
    return (
        <div>
            <div className="text-xl text-black leading-6 font-semibold px-5 py-4">Produk Kami</div>

            <div className="grid grid-cols-4 gap-6">
                {lists.products.map((item) => {
                    return (
                        <div key={item.id} className="p-4 rounded-2xl border-2 border-black shadow-sm hover:border-pink-500 hover:shadow">
                            <Image
                                src={item.image_url}
                                alt={item.product_name}
                                width={500}
                                height={500}
                                className="w-full bg-center rounded-xl"
                            />
                            {item.product_name}
                            <div>{item.price}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}