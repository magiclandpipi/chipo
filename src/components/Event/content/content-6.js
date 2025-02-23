export const eventMeta = {
    title: "Chinese Calligraphy and Painting Experience: A Journey Through Eastern Elegance",
    subtitle:"From Calligraphy to Traditional Chinese Painting, Experience the Unique Charm and Spirit of Chinese Art",
    description: [
        `<p>Chinese calligraphy and painting are treasures of Chinese culture, carrying thousands of years of history and wisdom. These art forms are more than just creative expressions—they are key ways for Chinese people to convey their thoughts, emotions, and philosophies. Through the brush, ink, and rice paper, you can immerse yourself in the ancient lifestyle and aesthetics of China, feeling the distinct charm of Eastern art. Whether it's the strength in every stroke of calligraphy or the peaceful landscapes and delicate flowers in Chinese painting, these arts will transport you into a world full of poetry and deep reflection.</p>`,
        `<p>In this hands-on experience, you’ll have the opportunity to hold the brush and feel it glide across rice paper (a special paper used for calligraphy and painting). You’ll experience the visual beauty created by the different shades of ink, and learn how to properly hold the brush and write simple Chinese characters, or paint a flower or bird in the traditional Eastern style. Whether you’re captivated by the bold beauty of calligraphy or the soft, flowing grace of Chinese painting, you’ll come to appreciate the unique allure of Chinese art.</p>`,
    ],
    price: 100,
    photoWallPrefix:"events/incense",
    experiences:[
        {
            "id": 1,
            "title": "Calligraphy Experience",
            "content": [
                `<p>Calligraphy is an art form unique to China, often referred to as “silent poetry” and “motionless dance.” It uses Chinese characters to showcase the rhythm and power of brushstrokes, ink, and rice paper. In ancient China, calligraphy was a skill every scholar had to master, and it remains a vital part of Chinese culture, appearing in celebrations, home décor, and as a personal practice.</p>`
            ],
            "highlights":[
                `During the calligraphy session, you’ll learn how to hold and move the brush, trying your hand at writing simple characters. You’ll feel the rhythm in each stroke, experiencing the balance and harmony of this art. You can even write your name or a favorite poem, creating a beautiful, unique piece to take home.`
            ],
            "imagePrefix": "events/incense/AromaticSachets",
            "price": 100
        },
        {
            "id": 2,
            "title": "Chinese Painting",
            "content": [
                `<p>Traditional Chinese painting represents the essence of Chinese art, often focusing on landscapes, flowers, birds, and figures. Unlike Western art, which focuses on realism, Chinese painting emphasizes capturing the spirit of the subject, using minimal brushstrokes and the art of leaving space to showcase harmony between nature and humanity. Historically, Chinese painting was not only a way for scholars to refine themselves but also a medium for expressing personal emotions and ideals.</p>`
            ],
            "highlights":[
                `In the painting experience, you’ll learn how to use brushes and ink to paint simple flowers, birds, or landscapes. From the “Four Gentlemen” (plum, orchid, bamboo, and chrysanthemum) to ink landscapes, you’ll discover the beauty of nature and the philosophical depth behind Chinese painting. You can also try writing calligraphy on your painting, combining both art forms to complete your masterpiece.`,
            ],
            "imagePrefix": "events/incense/IncenseMolding",
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

export const pathName = "/calligraphy"