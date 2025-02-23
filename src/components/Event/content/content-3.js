export const eventMeta = {
    title: "Chinese Spa: Your Path to Relaxation and Wellness",
    subtitle:"Unlock Ancient Therapies, Enjoy Modern Relaxation",
    description: [
        `<p>Step into a world of relaxation and healing with Chinese Spa, where ancient traditions meet modern wellness. Rooted in thousands of years of Chinese medicine, this soothing experience focuses on balancing your body’s energy and promoting better circulation. With techniques like massage, foot therapy, cupping, and gua sha, a Chinese Spa treatment is more than just a massage—it’s a journey to relax your mind and restore your body.</p>`,
        `<p>Originally used by royalty for health and vitality, Chinese Spa has become a popular choice for people everywhere looking to relieve stress, soothe tired muscles, and simply feel better. Whether you’re a busy professional or a traveler seeking a calming escape, Chinese Spa has something special to offer.</p>`,
        `<p>A Chinese Spa experience is more than just relaxation; it’s a powerful way to refresh your body and mind. Whether you're looking to reduce stress, improve your health, or simply take a break from the hustle and bustle of life, this traditional treatment has something special to offer. Treat yourself to a soothing journey of wellness and discover the ancient healing arts of China.</p>`
    ],
    price: 100,
    photoWallPrefix:"events/spa",
    experiences:[
        {
            "id": 1,
            "title": "Tui Na (Traditional Chinese Massage)",
            "content": [
                `<p>Tui Na is an ancient Chinese technique that uses gentle pressing, kneading, and pulling on specific points of the body to release tension and boost circulation. It’s perfect for relaxing your muscles, especially around the shoulders, neck, and back, and it’s a great way to refresh both body and mind.</p>`
            ],
            "highlights":[
                `A soothing and effective way to ease muscle tension and pain.`,
                `<strong>Personalized treatment: </strong> Our skilled therapists tailor each session to address your unique concerns, whether it's chronic back pain, muscle stiffness, or other long-term issues.`,
                `Enjoy traditional calming music to help you fully unwind during the session`,
            ],
            "imagePrefix": "events/incense/AromaticSachets",
            "price": 100
        },
        {
            "id": 2,
            "title": "Foot Therapy (Reflexology)",
            "content": [
                `<p>In Chinese medicine, the feet are said to hold the key to your overall health. Foot therapy targets reflex points on your feet to help improve your body's functions, ease stress, and give you a deeper sense of well-being.</p>`
            ],
            "highlights":[
                `The experience begins with a warm herbal foot soak, promoting circulation and relieving fatigue. Herbal ingredients like mugwort and safflower help open meridians and enhance the effectiveness of the massage.`,
                `Therapists target specific reflex points on the feet to relax muscles and balance the body's functions, improving sleep and relieving stress.`
            ],
            "imagePrefix": "events/incense/IncenseMolding",
            "price": 100
        },
        {
            "id": 3,
            "title": "Cupping Therapy",
            "content": [
                `<p>Experience the ancient wisdom of negative pressure healing.</p>`,
                `<p>Cupping therapy uses suction cups applied to the skin to promote blood flow and alleviate pain. Originally used to treat colds and muscle pain, it is now often used for detoxification and skin rejuvenation.</p>`
            ],
            "highlights":[
                `Cupping therapists adjust the intensity and duration of the cups to ensure effective yet comfortable therapy.`,
                `Feel a wave of calm as you detoxify and feel lighter after the session.`,
                `Unique marks left by the cups indicate a deep, cleansing effect on your body.`
            ],
            "imagePrefix": "events/incense/IncenseSticks",
            "price": 100
        },
        {
            "id": 4,
            "title": "Gua Sha (Scraping Therapy)",
            "content": [
                `<p>Gua Sha involves using a smooth-edged tool to scrape the skin, promoting meridian flow, detoxification, and moisture removal. Once used for treating heatstroke and colds, today it is a popular method for beauty and fatigue relief.</p>`,
            ],
            "highlights":[
                `The gentle scraping helps release blockages in your body, giving you an instant feeling of relief.`,
                `The slight redness on your skin after the treatment shows that your body is healing from the inside out.`
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

export const pathName = "/spa"