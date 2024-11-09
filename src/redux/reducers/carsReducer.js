const initialState = [
    {
        id: 1,
        name: 'Tesla Model S',
        description: 'Електричний седан з вражаючими характеристиками.',
        img: require('./images/tesla-model-s.jpg'),        },
    {
        id: 2,
        name: 'BMW M3',
        description: 'Спортивний автомобіль з вражаючими динамічними характеристиками.',
        img: require('./images/bmw-m3.jpg'),       },
    {
        id: 3,
        name: 'Audi A8',
        description: 'Розкішний седан з високим рівнем комфорту і технологій.',
        img: require('./images/audi-a8.jpg'),        },
    {
        id: 4,
        name: 'Mercedes-Benz S-Class',
        description: 'Символ розкоші та інновацій у світі автомобілів.',
        img: require('./images/mercedes-benz-s-class.jpg'),        },
    {
        id: 5,
        name: 'Porsche 911',
        description: 'Класичний спортивний автомобіль з видатними характеристиками.',
        img: require('./images/porsche-911.jpg'),        },
    {
        id: 6,
        name: 'Ford Mustang',
        description: 'Американський класичний спортивний автомобіль з потужним двигуном.',
        img: require('./images/ford-mustang.jpg'),        },
    {
        id: 7,
        name: 'Lamborghini Aventador',
        description: 'Суперкар з неймовірним дизайном і потужністю.',
        img: require('./images/lamborghini-aventador.jpg'),        },
    {
        id: 8,
        name: 'Ferrari 488',
        description: 'Спортивний автомобіль з видатною продуктивністю та дизайном.',
        img: require('./images/ferrari-488.jpg'),        },
    {
        id: 9,
        name: 'Toyota Camry',
        description: 'Надійний седан з комфортом та ефективністю.',
        img: require('./images/toyota-camry.jpg'),        },
    {
        id: 10,
        name: 'Honda Accord',
        description: 'Комфортний седан з високим рівнем надійності.',
        img: require('./images/honda-accord.jpg'),        },
    {
        id: 11,
        name: 'Chevrolet Corvette',
        description: 'Суперкар, що поєднує стиль і продуктивність.',
        img: require('./images/chevrolet-corvette.jpg'),        },
    {
        id: 12,
        name: 'Nissan GT-R',
        description: 'Спортивний автомобіль з неймовірною швидкістю та технологіями.',
        img: require('./images/nissan-gtr.jpg'),        },
    {
        id: 13,
        name: 'Volkswagen Golf',
        description: 'Практичний хетчбек, який поєднує стиль і функціональність.',
        img: require('./images/volkswagen-golf.jpg'),        },
    {
        id: 14,
        name: 'Hyundai Elantra',
        description: 'Комфортний і економічний седан для щоденного використання.',
        img: require('./images/hyundai-elantra.jpg'),
    },
    {
        id: 15,
        name: 'Kia Stinger',
        description: 'Спортивний автомобіль з елегантним дизайном та високими показниками.',
        img: require('./images/kia-stinger.jpg'),
    },
    {
        id: 16,
        name: 'Mazda MX-5',
        description: 'Легкий спортивний автомобіль, що забезпечує відмінну керованість.',
        img: require('./images/mazda-mx5.jpg'),
    },
    {
        id: 17,
        name: 'Subaru WRX',
        description: 'Спортивний автомобіль з відмінною прохідністю та потужним двигуном.',
        img: require('./images/subaru-wrx.jpg'),      },
    {
        id: 18,
        name: 'Volvo XC90',
        description: 'Розкішний SUV з високими показниками безпеки та комфортом.',
        img: require('./images/volvo-xc90.jpg'),
    },
];

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default carReducer;
