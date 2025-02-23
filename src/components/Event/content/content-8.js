export const eventMeta = {
    title: "Pottery Experience: Feel the Warmth of Clay and the Craftsmanship",
    subtitle:"Embark on a Creative Journey in Dialogue with Traditional Clay Art",
    description: [
        `<p>Pottery is one of China’s oldest crafts, with a history spanning over 10,000 years. From Neolithic painted pottery to the exquisite porcelain of the Tang and Song Dynasties, pottery is not only a symbol of Chinese traditional culture but also a vital witness to human civilization. In ancient China, pottery wasn’t just for everyday use—it was also an important part of rituals, ceremonies, and art. It embodies the ancient people’s reverence for nature, love for life, and pursuit of beauty.</p>`,
        `<p>Modern pottery retains the essence of traditional techniques while embracing the creativity of contemporary art. For international visitors, a pottery experience is not only the joy of hands-on creation but also an opportunity to dive deep into pottery making culture. By molding clay, shaping it, and experiencing the firing process, you’ll connect with artisans from centuries ago and embark on a cultural journey across time.</p>`,
    ],
    price: 100,
    photoWallPrefix:"events/incense",
    experiences:[
        {
            "id": 1,
            "title": "Hand-Building Ceramics",
            "content": [
                `<p>Hand-building pottery dates back to the Neolithic period, marking the beginning of Chinese pottery. Ancient people used hand-building to create tools for daily life and for ritualistic purposes, reflecting a direct interaction with nature and embodying a simple beauty.</p>`
            ],
            "highlights":[
                `Hand-building is easy to learn and perfect for beginners. You’ll have the freedom to unleash your creativity and make one-of-a-kind pieces. Once finished, you can take your creations home as a unique souvenir from your trip.`
            ],
            "imagePrefix": "events/incense/AromaticSachets",
            "price": 100
        },
        {
            "id": 2,
            "title": "Wheel-Throwing Pottery",
            "content": [
                `<p>Wheel-throwing is one of the core techniques of traditional Chinese pottery, reaching its peak during the Tang and Song Dynasties. Famous pottery from Jingdezhen and Yixing teapots are prime examples of this technique. These items are not just functional—they are works of art, reflecting the Eastern pursuit of beauty in daily life.</p>`
            ],
            "highlights":[
                `Wheel-throwing is both challenging and fun. You’ll use a pottery wheel to shape the clay with your hands, creating traditional items like vases or teapots. The process is magical as the clay spins and takes shape, almost as if the creation has come to life.`,
                `<strong>Shape Your Creation: </strong>Choose your desired form—whether beads, cones, or traditional sculpted molds. Mix your powdered ingredients with a binder and water to knead a pliable paste. Shape it into beads for bracelets or necklaces, cones to set and light, or molds perfect for elegant table decorations. Create your own piece of fragrant art.`
            ],
            "imagePrefix": "events/incense/IncenseMolding",
            "price": 100
        },
        {
            "id": 3,
            "title": "Pottery Painting",
            "content": [
                `<p>Painting is an essential part of Chinese ceramic art. Techniques like blue-and-white porcelain and glazed red have earned global recognition, showcasing the Chinese understanding of color and line.</p>`
            ],
            "highlights":[
                `You’ll paint designs on pre-made pottery, using glazes or paints to create your own personal patterns. The pottery painting experience is easy and enjoyable, especially for those who love painting and design. Infuse your creativity into your piece, making it a unique and memorable souvenir from your travels.`,
            ],
            "imagePrefix": "events/incense/IncenseSticks",
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

export const pathName = "/pottery"