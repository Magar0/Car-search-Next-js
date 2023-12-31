const jsonData = [
    {
        "id": 1,
        "model": "Freelander",
        "make": "Subaru",
        "model_year": 2011,
        "price": 530,
        "people": 4,
        "mileage": 5.7,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODE0Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 2,
        "model": "V50",
        "make": "Chevrolet",
        "model_year": 2021,
        "price": 360,
        "people": 4,
        "mileage": 7.9,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://images.unsplash.com/photo-1502219422320-9ca47798b75b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODIwNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 3,
        "model": "Riviera",
        "make": "Ford",
        "model_year": 2023,
        "price": 630,
        "people": 4,
        "mileage": 5.7,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODIzMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 4,
        "model": "Taurus",
        "make": "Honda",
        "model_year": 2013,
        "price": 710,
        "people": 4,
        "mileage": 5.7,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://images.unsplash.com/photo-1494905998402-395d579af36f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODI4OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 5,
        "model": "Montero Sport",
        "make": "Toyota",
        "model_year": 2014,
        "price": 810,
        "people": 4,
        "mileage": 5.1,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODM0NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 6,
        "model": "Ram Wagon B250",
        "make": "BMW",
        "model_year": 2020,
        "price": 360,
        "people": 4,
        "mileage": 7.9,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODM3MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 7,
        "model": "Outlander",
        "make": "Volkswagen",
        "model_year": 2010,
        "price": 730,
        "people": 4,
        "mileage": 5.9,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 8,
        "model": "tC",
        "make": "Chevrolet",
        "model_year": 2011,
        "price": 890,
        "people": 4,
        "mileage": 8.0,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://images.unsplash.com/photo-1508974239320-0a029497e820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTY5NjQwODQwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 9,
        "model": "Corvette",
        "make": "Nissan",
        "model_year": 2011,
        "price": 450,
        "people": 4,
        "mileage": 5.6,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 10,
        "model": "F-Series",
        "make": "Hyundai",
        "model_year": 2010,
        "price": 340,
        "people": 4,
        "mileage": 7.5,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 11,
        "model": "Ram 1500",
        "make": "Ford",
        "model_year": 2014,
        "price": 630,
        "people": 4,
        "mileage": 6.8,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 12,
        "model": "Fit",
        "make": "BMW",
        "model_year": 2012,
        "price": 670,
        "people": 4,
        "mileage": 6.5,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 13,
        "model": "Gallardo",
        "make": "Hyundai",
        "model_year": 2011,
        "price": 820,
        "people": 4,
        "mileage": 5.4,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 14,
        "model": "Sonata",
        "make": "BMW",
        "model_year": 2015,
        "price": 710,
        "people": 4,
        "mileage": 6.6,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 15,
        "model": "Trans Sport",
        "make": "BMW",
        "model_year": 2018,
        "price": 320,
        "people": 4,
        "mileage": 7.1,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 16,
        "model": "Savana 1500",
        "make": "Toyota",
        "model_year": 2014,
        "price": 670,
        "people": 4,
        "mileage": 5.8,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 17,
        "model": "Bonneville",
        "make": "Toyota",
        "model_year": 2023,
        "price": 360,
        "people": 4,
        "mileage": 6.6,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 18,
        "model": "Mazda6",
        "make": "Volkswagen",
        "model_year": 2015,
        "price": 360,
        "people": 4,
        "mileage": 7.9,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 19,
        "model": "A8",
        "make": "Ford",
        "model_year": 2011,
        "price": 560,
        "people": 4,
        "mileage": 6.8,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 20,
        "model": "Mighty Max",
        "make": "Toyota",
        "model_year": 2016,
        "price": 900,
        "people": 4,
        "mileage": 7.8,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 21,
        "model": "F450",
        "make": "Ford",
        "model_year": 2018,
        "price": 650,
        "people": 4,
        "mileage": 6.2,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 22,
        "model": "RAV4",
        "make": "Toyota",
        "model_year": 2016,
        "price": 710,
        "people": 4,
        "mileage": 6.6,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 23,
        "model": "X6",
        "make": "Volkswagen",
        "model_year": 2015,
        "price": 490,
        "people": 4,
        "mileage": 6.2,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 24,
        "model": "Town & Country",
        "make": "Hyundai",
        "model_year": 2013,
        "price": 790,
        "people": 4,
        "mileage": 6.2,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 25,
        "model": "100",
        "make": "Subaru",
        "model_year": 2017,
        "price": 540,
        "people": 4,
        "mileage": 5.2,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 26,
        "model": "B-Series Plus",
        "make": "Volkswagen",
        "model_year": 2016,
        "price": 520,
        "people": 4,
        "mileage": 5.6,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 27,
        "model": "Eclipse",
        "make": "Ford",
        "model_year": 2021,
        "price": 750,
        "people": 4,
        "mileage": 7.6,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 28,
        "model": "W201",
        "make": "Honda",
        "model_year": 2010,
        "price": 460,
        "people": 4,
        "mileage": 7.8,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 29,
        "model": "300M",
        "make": "Toyota",
        "model_year": 2016,
        "price": 490,
        "people": 4,
        "mileage": 5.9,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 30,
        "model": "Continental Flying Spur",
        "make": "Toyota",
        "model_year": 2012,
        "price": 580,
        "people": 4,
        "mileage": 6.7,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 31,
        "model": "90",
        "make": "BMW",
        "model_year": 2014,
        "price": 760,
        "people": 4,
        "mileage": 5.5,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 32,
        "model": "Tribute",
        "make": "Nissan",
        "model_year": 2014,
        "price": 340,
        "people": 4,
        "mileage": 5.1,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 33,
        "model": "Ramcharger",
        "make": "Honda",
        "model_year": 2020,
        "price": 450,
        "people": 4,
        "mileage": 5.8,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 34,
        "model": "TL",
        "make": "Hyundai",
        "model_year": 2011,
        "price": 660,
        "people": 4,
        "mileage": 6.3,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 35,
        "model": "XC60",
        "make": "Nissan",
        "model_year": 2017,
        "price": 560,
        "people": 4,
        "mileage": 6.6,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 36,
        "model": "Escalade EXT",
        "make": "Chevrolet",
        "model_year": 2013,
        "price": 870,
        "people": 4,
        "mileage": 5.7,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 37,
        "model": "Montero",
        "make": "Ford",
        "model_year": 2022,
        "price": 760,
        "people": 4,
        "mileage": 5.4,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 38,
        "model": "Fit",
        "make": "Subaru",
        "model_year": 2018,
        "price": 590,
        "people": 4,
        "mileage": 7.8,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 39,
        "model": "Savana 2500",
        "make": "Chevrolet",
        "model_year": 2019,
        "price": 600,
        "people": 4,
        "mileage": 5.4,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 40,
        "model": "Continental GT",
        "make": "Chevrolet",
        "model_year": 2012,
        "price": 880,
        "people": 4,
        "mileage": 7.6,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 41,
        "model": "X3",
        "make": "Honda",
        "model_year": 2013,
        "price": 300,
        "people": 4,
        "mileage": 7.0,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 42,
        "model": "Wrangler",
        "make": "Hyundai",
        "model_year": 2019,
        "price": 870,
        "people": 4,
        "mileage": 5.4,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 43,
        "model": "RX",
        "make": "Chevrolet",
        "model_year": 2018,
        "price": 480,
        "people": 4,
        "mileage": 5.9,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 44,
        "model": "Mazda3",
        "make": "Chevrolet",
        "model_year": 2023,
        "price": 880,
        "people": 4,
        "mileage": 7.3,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 45,
        "model": "2500",
        "make": "Volkswagen",
        "model_year": 2015,
        "price": 510,
        "people": 4,
        "mileage": 6.9,
        "steering": "automatic",
        "fuel": "gasoline",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 46,
        "model": "Sebring",
        "make": "Subaru",
        "model_year": 2013,
        "price": 840,
        "people": 4,
        "mileage": 6.8,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 47,
        "model": "Marauder",
        "make": "Honda",
        "model_year": 2019,
        "price": 780,
        "people": 4,
        "mileage": 7.8,
        "steering": "automatic",
        "fuel": "hybrid",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 48,
        "model": "Express",
        "make": "Toyota",
        "model_year": 2013,
        "price": 390,
        "people": 4,
        "mileage": 7.7,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 49,
        "model": "Impreza",
        "make": "Ford",
        "model_year": 2022,
        "price": 890,
        "people": 4,
        "mileage": 6.2,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    },
    {
        "id": 50,
        "model": "Daewoo Lacetti",
        "make": "BMW",
        "model_year": 2019,
        "price": 860,
        "people": 4,
        "mileage": 5.1,
        "steering": "automatic",
        "fuel": "disel",
        "img": [
            "https://source.unsplash.com/random/?car",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            "https://source.unsplash.com/random/?car"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias molestiae nihil aliquam reprehenderit necessitatibus provident porro cupiditate ratione voluptatum quasi Sed ut perspiciatis unde omnis iste natus error sit"
    }
]

export default jsonData;