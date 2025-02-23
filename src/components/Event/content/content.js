export const eventMeta = {
    title: "Cloisonné Enamel Experience: Dive Into a World of Color and Metal Craftsmanship",
    subtitle:"Travel Through Time, Embrace the Charm of Intangible Cultural Heritage",
    description: [
        `<p>Cloisonné enamel, also known as Jingtailan, is one of China’s most treasured crafts. With roots going back to the Yuan Dynasty and reaching its peak during the Ming Dynasty’s Jingtai period, this art form is all about blending metalwork with colorful enamel to create stunning, intricate designs. Back in the day, it was used in royal palaces and by the elite to decorate everything from vases to jewelry boxes, symbolizing wealth and elegance. Today, while the tradition continues, modern design has also given cloisonné a fresh twist, making it a favorite for home decor and fashion accessories.</p>`,
      ],
    price: 100,
    photoWallPrefix:"events/incense",
    experiences:[
        {
            "id": 1,
            "title": "Enamel Making",
            "content": [
                `<p>This is your chance to roll up your sleeves and dive into the world of cloisonné enamel. You’ll get to create your very own masterpiece, following every step of the process:</p>`
            ],
            "highlights":[
                `First, you’ll choose your favorite design and use fine metal wires to trace out the shape—this is called "cloisonné wiring."`,
                `Next, you’ll add colorful enamel to fill in the design, a delicate process known as "filling with enamel." It’s all about getting the colors just right, with each stroke carefully placed.`,
                `After firing and polishing, your creation will shine with vibrant beauty!`,
            ],
            "imagePrefix": "events/incense/AromaticSachets",
            "price": 100
        }
    ],
    images: [
        "/images/Event/e-1.JPG",
        "/images/Event/e-2.JPG",
        "/images/Event/e-3.JPG",
        "/images/Event/e-4.JPG",
        "/images/Event/e-5.JPG",
        "/images/Event/e-6.JPG",
        "/images/Event/e-7.JPG",
        "/images/Event/e-8.JPG",
        "/images/Event/e-9.JPG",
        "/images/Event/e-10.JPG",
    ],
    imageRootFolder : 'events/incense/',
    cities: [
        {
            name:"Beijing 北京",
            lowest_price: 120.5,
            description: "Beijing, the capital of China, is a vibrant city blending ancient history with modern innovation. Known for iconic landmarks like the Great Wall, Forbidden City, and Tiananmen Square, it offers a rich cultural experience. With its bustling markets, world-class cuisine, and historic hutongs, Beijing is a hub of tradition and progress, attracting visitors from around the globe.",
            stores:[
                {
                    storeName:"Beijing",
                    address:"建外大街 Jianguo Rd, 126号瑞赛大厦"
                },
                {
                    storeName:"Beijing",
                    address:"建外大街 Jianguo Rd, 126号瑞赛大厦"
                },
                {
                    storeName:"Beijing",
                    address:"建外大街 Jianguo Rd, 126号瑞赛大厦"
                },
            ],
            pic:"/images/Event/e-10.JPG"
        },
        {
            name:"ShangHai 上海",
            lowest_price: 120.5,
            description: "Shanghai, China's largest city, is a dynamic blend of tradition and modernity. Known for its iconic skyline along the Bund, bustling markets, and historic Shikumen houses, the city offers a unique cultural experience. As a global financial hub, Shanghai is also renowned for its shopping, vibrant nightlife, and world-class dining, making it a must-visit destination.",
            stores:[
                {
                    storeName:"Beijing",
                    address:"建外大街 Jianguo Rd, 126号瑞赛大厦"
                },
                {
                    storeName:"Beijing",
                    address:"建外大街 Jianguo Rd, 126号瑞赛大厦"
                },
                {
                    storeName:"Beijing",
                    address:"建外大街 Jianguo Rd, 126号瑞赛大厦"
                },
            ],
            pic:"/images/Event/e-6.JPG"
        },
        {
            name:"Chengdu, Sichuan 成都",
            lowest_price: 120.5,
            description: "Shanghai, China's largest city, is a dynamic blend of tradition and modernity. Known for its iconic skyline along the Bund, bustling markets, and historic Shikumen houses, the city offers a unique cultural experience. As a global financial hub, Shanghai is also renowned for its shopping, vibrant nightlife, and world-class dining, making it a must-visit destination.",
            stores:[
                {
                    storeName:"Beijing",
                    address:"建外大街 Jianguo Rd, 126号瑞赛大厦"
                },
                {
                    storeName:"Beijing",
                    address:"建外大街 Jianguo Rd, 126号瑞赛大厦"
                },
                {
                    storeName:"Beijing",
                    address:"建外大街 Jianguo Rd, 126号瑞赛大厦"
                },
            ],
            pic:"/images/Event/e-6.JPG"
        },
    ]
}

export const pathName = "/enamel"