const jsonData = [
    {
        "id": 1,
        "model": "Swift",
        "make": "Suzuki",
        "model_year": 2014,
        "price": 860,
        "people": 4,
        "mileage": 7.7,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODE0Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
        "id": 2,
        "model": "FF",
        "make": "Ferrari",
        "model_year": 2014,
        "price": 550,
        "people": 4,
        "mileage": 5.4,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://images.unsplash.com/photo-1502219422320-9ca47798b75b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODIwNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
        "id": 3,
        "model": "S-Type",
        "make": "Jaguar",
        "model_year": 2023,
        "price": 340,
        "people": 4,
        "mileage": 6.1,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODIzMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi adipisci velit..."
    },
    {
        "id": 4,
        "model": "S2000",
        "make": "Honda",
        "model_year": 2012,
        "price": 790,
        "people": 4,
        "mileage": 6.5,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://images.unsplash.com/photo-1494905998402-395d579af36f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODI4OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi qui dolorem ipsum quia dolor sit amet"
    },
    {
        "id": 5,
        "model": "S40",
        "make": "Volvo",
        "model_year": 2012,
        "price": 490,
        "people": 4,
        "mileage": 7.6,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODM0NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi adipisci velit..."
    },
    {
        "id": 6,
        "model": "Escalade",
        "make": "Cadillac",
        "model_year": 2023,
        "price": 430,
        "people": 4,
        "mileage": 5.9,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODM3MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi consectetur"
    },
    {
        "id": 7,
        "model": "Coupe Quattro",
        "make": "Audi",
        "model_year": 2022,
        "price": 420,
        "people": 4,
        "mileage": 5.8,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://images.unsplash.com/photo-1508974239320-0a029497e820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODQwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
    },
    {
        "id": 8,
        "model": "Grand Am",
        "make": "Pontiac",
        "model_year": 2014,
        "price": 350,
        "people": 4,
        "mileage": 7.3,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Lorem ipsum dolor sit amet"
    },
    {
        "id": 9,
        "model": "MR2",
        "make": "Toyota",
        "model_year": 2022,
        "price": 690,
        "people": 4,
        "mileage": 7.6,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi a eleifend enim nisl ac purus."
    },
    {
        "id": 10,
        "model": "Ram 2500",
        "make": "Dodge",
        "model_year": 2018,
        "price": 520,
        "people": 4,
        "mileage": 6.4,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Nullam auctor"
    },
    {
        "id": 11,
        "model": "Z4 M",
        "make": "BMW",
        "model_year": 2016,
        "price": 760,
        "people": 4,
        "mileage": 5.5,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi a eleifend enim nisl ac purus."
    },
    {
        "id": 12,
        "model": "911",
        "make": "Porsche",
        "model_year": 2016,
        "price": 690,
        "people": 4,
        "mileage": 6.3,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi a eleifend enim nisl ac purus."
    },
    {
        "id": 13,
        "model": "Maxima",
        "make": "Nissan",
        "model_year": 2022,
        "price": 330,
        "people": 4,
        "mileage": 5.5,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
        "id": 14,
        "model": "Caprice",
        "make": "Chevrolet",
        "model_year": 2011,
        "price": 430,
        "people": 4,
        "mileage": 6.1,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi est nec gravida lacinia"
    },
    {
        "id": 15,
        "model": "Lancer Evolution",
        "make": "Mitsubishi",
        "model_year": 2013,
        "price": 530,
        "people": 4,
        "mileage": 7.5,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Nullam auctor"
    },
    {
        "id": 16,
        "model": "LTD Crown Victoria",
        "make": "Ford",
        "model_year": 2014,
        "price": 750,
        "people": 4,
        "mileage": 7.7,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Praesent euismod"
    },
    {
        "id": 17,
        "model": "Town Car",
        "make": "Lincoln",
        "model_year": 2013,
        "price": 430,
        "people": 4,
        "mileage": 7.2,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Praesent euismod"
    },
    {
        "id": 18,
        "model": "Aspen",
        "make": "Dodge",
        "model_year": 2016,
        "price": 520,
        "people": 4,
        "mileage": 6.0,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi qui dolorem ipsum quia dolor sit amet"
    },
    {
        "id": 19,
        "model": "Equinox",
        "make": "Chevrolet",
        "model_year": 2011,
        "price": 390,
        "people": 4,
        "mileage": 5.6,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi qui dolorem ipsum quia dolor sit amet"
    },
    {
        "id": 20,
        "model": "Mazda6",
        "make": "Mazda",
        "model_year": 2013,
        "price": 870,
        "people": 4,
        "mileage": 6.0,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
        "id": 21,
        "model": "Avalon",
        "make": "Toyota",
        "model_year": 2013,
        "price": 420,
        "people": 4,
        "mileage": 5.1,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi consectetur adipiscing elit. Sed ac metus ac nunc ultricies efficitur."
    },
    {
        "id": 22,
        "model": "Grand Prix",
        "make": "Pontiac",
        "model_year": 2012,
        "price": 750,
        "people": 4,
        "mileage": 5.3,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Nullam auctor"
    },
    {
        "id": 23,
        "model": "DBS",
        "make": "Aston Martin",
        "model_year": 2021,
        "price": 730,
        "people": 4,
        "mileage": 7.5,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Lorem ipsum dolor sit amet"
    },
    {
        "id": 24,
        "model": "Corvette",
        "make": "Chevrolet",
        "model_year": 2020,
        "price": 330,
        "people": 4,
        "mileage": 7.0,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Neque porro quisquam est"
    },
    {
        "id": 25,
        "model": "900",
        "make": "Saab",
        "model_year": 2020,
        "price": 360,
        "people": 4,
        "mileage": 6.3,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi consectetur"
    },
    {
        "id": 26,
        "model": "Ram Van B350",
        "make": "Dodge",
        "model_year": 2010,
        "price": 710,
        "people": 4,
        "mileage": 5.3,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Lorem ipsum dolor sit amet"
    },
    {
        "id": 27,
        "model": "Silverado 3500",
        "make": "Chevrolet",
        "model_year": 2014,
        "price": 730,
        "people": 4,
        "mileage": 6.3,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi nunc id lacinia ultrices"
    },
    {
        "id": 28,
        "model": "57S",
        "make": "Maybach",
        "model_year": 2021,
        "price": 420,
        "people": 4,
        "mileage": 5.4,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi urna odio lacinia metus"
    },
    {
        "id": 29,
        "model": "Forester",
        "make": "Subaru",
        "model_year": 2020,
        "price": 420,
        "people": 4,
        "mileage": 6.3,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi a eleifend enim nisl ac purus."
    },
    {
        "id": 30,
        "model": "Justy",
        "make": "Subaru",
        "model_year": 2013,
        "price": 640,
        "people": 4,
        "mileage": 7.1,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
    },
    {
        "id": 31,
        "model": "F150",
        "make": "Ford",
        "model_year": 2012,
        "price": 740,
        "people": 4,
        "mileage": 5.6,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Neque porro quisquam est"
    },
    {
        "id": 32,
        "model": "S10",
        "make": "Chevrolet",
        "model_year": 2016,
        "price": 660,
        "people": 4,
        "mileage": 7.5,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi qui dolorem ipsum quia dolor sit amet"
    },
    {
        "id": 33,
        "model": "RX-7",
        "make": "Mazda",
        "model_year": 2010,
        "price": 560,
        "people": 4,
        "mileage": 6.8,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi urna odio lacinia metus"
    },
    {
        "id": 34,
        "model": "IS",
        "make": "Lexus",
        "model_year": 2021,
        "price": 300,
        "people": 4,
        "mileage": 7.5,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Praesent euismod"
    },
    {
        "id": 35,
        "model": "Ram Van B150",
        "make": "Dodge",
        "model_year": 2016,
        "price": 870,
        "people": 4,
        "mileage": 7.0,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi adipisci velit..."
    },
    {
        "id": 36,
        "model": "Civic",
        "make": "Honda",
        "model_year": 2011,
        "price": 610,
        "people": 4,
        "mileage": 6.7,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi qui dolorem ipsum quia dolor sit amet"
    },
    {
        "id": 37,
        "model": "Bonneville",
        "make": "Pontiac",
        "model_year": 2021,
        "price": 570,
        "people": 4,
        "mileage": 7.3,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi est nec gravida lacinia"
    },
    {
        "id": 38,
        "model": "911",
        "make": "Porsche",
        "model_year": 2013,
        "price": 310,
        "people": 4,
        "mileage": 6.4,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Nullam auctor"
    },
    {
        "id": 39,
        "model": "xB",
        "make": "Scion",
        "model_year": 2022,
        "price": 430,
        "people": 4,
        "mileage": 5.5,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi a eleifend enim nisl ac purus."
    },
    {
        "id": 40,
        "model": "Pathfinder",
        "make": "Nissan",
        "model_year": 2011,
        "price": 560,
        "people": 4,
        "mileage": 7.3,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Nullam auctor"
    },
    {
        "id": 41,
        "model": "Z4",
        "make": "BMW",
        "model_year": 2011,
        "price": 710,
        "people": 4,
        "mileage": 5.8,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Lorem ipsum dolor sit amet"
    },
    {
        "id": 42,
        "model": "Sedona",
        "make": "Kia",
        "model_year": 2015,
        "price": 340,
        "people": 4,
        "mileage": 5.3,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi nunc id lacinia ultrices"
    },
    {
        "id": 43,
        "model": "Fiesta",
        "make": "Ford",
        "model_year": 2017,
        "price": 800,
        "people": 4,
        "mileage": 5.5,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi qui dolorem ipsum quia dolor sit amet"
    },
    {
        "id": 44,
        "model": "Avalanche 2500",
        "make": "Chevrolet",
        "model_year": 2019,
        "price": 360,
        "people": 4,
        "mileage": 6.0,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi a eleifend enim nisl ac purus."
    },
    {
        "id": 45,
        "model": "Sportage",
        "make": "Kia",
        "model_year": 2019,
        "price": 750,
        "people": 4,
        "mileage": 7.9,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi in tincidunt nunc ex sed nunc."
    },
    {
        "id": 46,
        "model": "S6",
        "make": "Audi",
        "model_year": 2010,
        "price": 550,
        "people": 4,
        "mileage": 6.8,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi qui dolorem ipsum quia dolor sit amet"
    },
    {
        "id": 47,
        "model": "900",
        "make": "Saab",
        "model_year": 2013,
        "price": 330,
        "people": 4,
        "mileage": 7.4,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi urna odio lacinia metus"
    },
    {
        "id": 48,
        "model": "Tacoma",
        "make": "Toyota",
        "model_year": 2018,
        "price": 580,
        "people": 4,
        "mileage": 5.5,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Lorem ipsum dolor sit amet"
    },
    {
        "id": 49,
        "model": "RAV4",
        "make": "Toyota",
        "model_year": 2021,
        "price": 410,
        "people": 4,
        "mileage": 6.0,
        "steering": "automatic",
        "fuel": "disel",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
        "id": 50,
        "model": "Summit",
        "make": "Eagle",
        "model_year": 2014,
        "price": 320,
        "people": 4,
        "mileage": 5.3,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": "https://source.unsplash.com/random/?car",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi consectetur"
    }
]

export default jsonData;