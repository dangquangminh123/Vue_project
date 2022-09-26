const state = {
    //Nơi lưu trữ các trạng thái của ứng dụng
    status: 'Lean Vuex in Vue3',
    products: [
        {
            id: 1,
            name: 'MAFEX MEDICOM IRON MAN MK 50',
            image: require('@/assets/images/images1.jpg'),
            description: 'Người Sắt Mark 50',
            price: 2550000,
            variants: [
                {
                    name: "MAFEX MEDICOM IRON MAN MK 50",
                    variantColor: "red",
                    variantImage:  require('@/assets/images/images1.jpg'),
                    description: 'Người Sắt Mark 50',
                    price: 2550000,
                    quantity:20,
                    // sizes: [
                    //     {
                    //         conditions: "New",
                    //         price: 2550000,
                    //         quantity: 20,
                    //     },
                    //     {
                    //         conditions: "Used",
                    //         price: 1850000,
                    //         quantity: 12,
                    //     },
                    // ]
                },
                {
                    name: "SHFIGUARTS IRON MAN MARK 50",
                    variantColor: "yellow",
                    variantImage:  require('@/assets/images/images1_2.jpg'),
                    description: 'Người Sắt Mark 50 Phiên bản SHF',      
                    price: 1850000,
                    quantity:12
                },
                {
                    name: "SHFIGUARTS IRON MAN WEAPON SET INFINITY WAR",
                    variantColor: "blue",
                    variantImage:  require('@/assets/images/images1_3.jpg'),
                    description: 'Người Sắt Phiên bản Vũ Khí Hạng Nặng',
                    price: 1550000,
                    quantity: 0
                }
            ]
        },
        {
            id: 2,
            name: 'MAFEX LOKI',
            image: require('@/assets/images/images2.jpg'),
            description: 'Vị Thần Lừa Lọc',
            price: 1950000,
            variants: [
                {
                    name: "MAFEX LOKI",
                    variantColor: "green",
                    variantImage:  require('@/assets/images/images2.jpg'),
                    description: 'Thần Lừa Lọc Trong Cuộc Chiến INFINITY WAR',
                    price: 1950000,
                    quantity:11,
                },
                {
                    name: "SHFIGUARTS LOKI",
                    variantColor: "red",
                    variantImage:  require('@/assets/images/images2_2.jpg'),
                    description: 'Phiển bản SHF Tà Thần AVENGERS 2012',
                    price: 1700000,
                    quantity:14,
                },
            ]
        },
        {
            id: 3,
            name: 'MAFEX CAPTAIN ENDGAME',
            image: require('@/assets/images/images3.jpg'),
            description: 'Đội trưởng mỹ trong trận chiến Hồi Kết',
            price: 90,
            inventory: true,
            variants: [
                {
                    name: "MAFEX MEDICOM CAPTAIN AVENGERS ENDGAME",
                    variantColor: "blue",
                    variantImage:  require('@/assets/images/images3.jpg'),
                    description: "Đội Trưởng Mỹ trong trận chiến hồi kết cuối cùng",
                    price: 1950000,
                    quantity:15,
                },
                {
                    name: "SHFIGUARTS CAPTAIN AVENGERS ENDGAME FINALL BATTLE",
                    variantColor: "BlueViolet",
                    variantImage:  require('@/assets/images/images3_2.jpg'),
                    description: 'Phiên Bản SHF Đội trưởng mỹ trong trân chiến hồi kết',
                    price: 1950000,
                    quantity:11,
                },
                {
                    name: "SHFIGUARTS CAPTAIN VS CAPTAIN",
                    variantColor: "CadetBlue",
                    variantImage:  require('@/assets/images/images3_3.jpg'),
                    description: 'Phiên Bản SHF Đội trưởng mỹ chiến đấu với Chính Mình',
                    price: 1850000,
                    quantity:8,
                },
                {
                    name: "SHFIGUARTS CAPTAIN ENDGAME",
                    variantColor: "DarkCyan",
                    variantImage:  require('@/assets/images/images3_4.jpg'),
                    description: 'Phiên Bản SHF Đội trưởng mỹ ',
                    price: 1250000,
                    quantity:2,
                },
            ]
        },
        {
            id: 4,
            name: 'MAFEX MERA',
            image: require('@/assets/images/images4.jpg'),
            description: 'Công Chúa Mera',
            price: 140,
            inventory: true,
            variants: [
                {
                    name: "Công Chúa Mera",
                    variantColor: "blue",
                    variantImage:  require('@/assets/images/images4.jpg'),
                    description: "Công Chúa mera trong aquaman movie",
                    price: 1950000,
                    quantity:15,
                },
            ]
        },
        {
            id: 5,
            name: 'MAFEX IRON MAN ENDGAME MK 85',
            image: require('@/assets/images/images5.jpg'),
            description: 'Người Sắt phiên bản MK 85',
            price: 20,
            variants: [
                {
                    name: "MAFEX IRON MAN MARK 85 AVENGERS ENDGAME",
                    variantColor: "DarkRed",
                    variantImage:  require('@/assets/images/images5.jpg'),
                    description: "Người Sắt Phiên bản mafex trong trận chiến hồi kết cuối cùng",
                    price: 2950000,
                    quantity:15,
                },
                {
                    name: "SHFIGUARTS IRON MAN MARK 85 ENDGAME FINALL BATTLE",
                    variantColor: "Red",
                    variantImage:  require('@/assets/images/images5_2.jpg'),
                    description: "Người Sắt SHF trong cuộc chiến cuối cùng",
                    price: 1950000,
                    quantity:15,
                },
                {
                    name: "SHFIGUARTS I AM IRON",
                    variantColor: "OrangeRed",
                    variantImage:  require('@/assets/images/images5_3.jpg'),
                    description: "Người Sắt phiên bản I AM IRON MAN",
                    price: 1850000,
                    quantity:10,
                },
                {
                    name: "SHFIGUARTS IRON MAN ENDGAME",
                    variantColor: "blue",
                    variantImage:  require('@/assets/images/images5_4.jpg'),
                    description: "Người Sắt trong cuộc chiến hồi kết",
                    price: 1350000,
                    quantity:3,
                },
            ]
        },
        {
            id: 6,
            name: 'SHF IRON PATRIOT ENDGAME',
            image: require('@/assets/images/images6.jpg'),
            description: 'Người Sắt Ái Quốc ENDGAME',
            price: 0,
            variants: [
                {
                    name: "SHF IRON PATRIOT ENDGAME",
                    variantColor: "Navy",
                    variantImage:  require('@/assets/images/images6.jpg'),
                    description: "Người Sắt Ái Quốc trong cuộc chiến hồi kết",
                    price: 0,
                    quantity:0,
                },
            ]
        },
        {
            id: 7,
            name: 'SHF DOCTOR STRANGE MOVIE',
            image: require('@/assets/images/images7.jpg'),
            description: 'Phù Thủy Tối Thượng phiên bản đa Vũ Trụ',
            price: 1850000,
            variants: [
                {
                    name: "SHF DOCTOR STRANGE MULTIVERSE OF MADNESS MOVIE",
                    variantColor: "Navy",
                    variantImage:  require('@/assets/images/images7.jpg'),
                    description: "Phù Thủy Tối Thượng phiên bản đa Vũ Trụ",
                    price: 1850000,
                    quantity:5,
                },
                {
                    name: "MAFEX DOCTOR STRANGE INFINITY WAR",
                    variantColor: "DarkOrange",
                    variantImage:  require('@/assets/images/images7_2.jpg'),
                    description: "Phù Thủy Tối Thượng Phiên Bản cuộc chiến vô cực MAFEX",
                    price: 2670000,
                    quantity:15,
                },
                {
                    name: "SHFIGUARTS DOCTOR STRANGE INFINITY WAR",
                    variantColor: "Coral",
                    variantImage:  require('@/assets/images/images7_3.jpg'),
                    description: "Phù Thủy Tối Thượng Phiên Bản cuộc chiến vô cực SHF",
                    price: 1650000,
                    quantity:9,
                },
                {
                    name: "SHFIGUARTS DOCTOR STRANGE MOVIE 2016",
                    variantColor: "Navy",
                    variantImage:  require('@/assets/images/images7_4.jpg'),
                    description: "Phù Thủy Tối Thượng Movie 2016",
                    price: 1550000,
                    quantity:17,
                },
                {
                    name: "SHFIGUARTS DOCTOR STRANGE IW",
                    variantColor: "DarkGoldenRod",
                    variantImage:  require('@/assets/images/images7_5.jpg'),
                    description: "Phù thủy tối thượng trong cuộc chiến vô cực",
                    price: 1080000,
                    quantity:2,
                },
            ]
        },
        {
            id: 8,
            name: 'SHF BLACK WIDOW INFINITY WAR ',
            image: require('@/assets/images/images8.jpg'),
            description: 'Góa Phụ Đen phiên bản infinity war',
            price: 1750000, 
            variants: [
                {
                    name: "SHFIGUARTS BLACK WIDOW INFINITY WAR AVENGERS 3",
                    variantColor: "Gold",
                    variantImage:  require('@/assets/images/images8.jpg'),
                    description: "Góa Phụ Đen trong cuộc chiến vô cực",
                    price: 1750000,
                    quantity:12,
                },
                {
                    name: "SHFIGUARTS BLACK WIDOW SNOW SUITS",
                    variantColor: "Gainsboro",
                    variantImage:  require('@/assets/images/images8_2.jpg'),
                    description: "Góa Phụ Đen phiên bản Tuyết",
                    price: 1780000,
                    quantity:5,
                },
                {
                    name: "SHFIGUARTS BLACK WIDOW AVENGERS 2012",
                    variantColor: "Gray",
                    variantImage:  require('@/assets/images/images8_3.jpg'),
                    description: "Góa Phụ Đen phiên bản AVENGERS 2012 (new yorks)",
                    price: 1880000,
                    quantity:15,
                },
                 {
                    name: "SHFIGUARTS BLACK WIDOW AVENGERS ENDGAMES",
                    variantColor: "LightBlue",
                    variantImage:  require('@/assets/images/images8_4.jpg'),
                    description: "Góa Phụ Đen phiên bản cuộc chiến cuối cùng",
                    price: 1780000,
                    quantity:18 ,
                },
                {
                    name: "SHFIGUARTS BLACK WIDOW MOVIE 2021",
                    variantColor: "Sienna",
                    variantImage:  require('@/assets/images/images8_5.jpg'),
                    description: "Góa Phụ Đen phiên bản 2021",
                    price: 980000,
                    quantity:8,
                },
                {
                    name: "SHFIGUARTS BLACK WIDOW AGE OF ULTRON",
                    variantColor: "Teal",
                    variantImage:  require('@/assets/images/images8_6.jpg'),
                    description: "Góa Phụ Đen phiên bản AGE OF ULTRON",
                    price: 1980000,
                    quantity:7,
                },
            ]
        },
        
    ],
    user: null,
    // products: [],
    cart: [],
    searchValue: '',
    info:['Minh',25,'de']
}

export default state
