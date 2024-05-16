import Image from "next/image"

const lists = {
    "products": [
        {
            "id": 1,
            "product_name": "Harley-Davidson Bar & Shield Tie Dye Tee",
            "price": "$499",
            "image_url": "/images/product/harley-davidson-1958-1621324-2.jpg"
        },
        {
            "id": 2,
            "product_name": "Road Captain Tee",
            "price": "$299",
            "image_url": "/images/product/harley-davidson-1970-4821324-2.jpg"
        },
        {
            "id": 3,
            "product_name": "Harley-Davidson Rising Eagle Long Sleeve Tee",
            "price": "$299",
            "image_url": "/images/product/harley-davidson-1810-0242904-1.jpg"
        },
        {
            "id": 4,
            "product_name": "Whiplash Long Sleeve Tee",
            "price": "$299",
            "image_url": "/images/product/harley-davidson-1951-7421324-2.png"
        },
        {
            "id": 5,
            "product_name": "Harley-Davidson #1 Racing Ringer Tee",
            "price": "$299",
            "image_url": "/images/product/harley-davidson-9098-9022144-1.png"
        },
        {
            "id": 6,
            "product_name": "120th Anniversary Long Sleeves Tee",
            "price": "$299",
            "image_url": "/images/product/harley-davidson-9096-4322144-1.jpg"
        },
        {
            "id": 8,
            "product_name": "Harley-Davidson Rising Eagle Hoodie",
            "price": "$299",
            "image_url": "/images/product/harley-davidson-9099-5622144-1.jpg"
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