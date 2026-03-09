export interface Review {
    id: string;
    dishId?: string;
    restaurantId: string;
    rating: number;
    text: string;
    date: string;
    images: string[];
}

export interface Restaurant {
    id: string;
    name: string;
    slug: string;
    city: string;
    cuisine: string;
    priceRange: "$$$" | "$$$$" | "$$$$$";
    rating: number;
    image: string;
    description: string;
}

export interface Dish {
    id: string;
    restaurantId: string;
    name: string;
    category: "starter" | "main" | "dessert" | "snack";
    rating: number;
    image: string;
    description: string;
}

export const CRITIC = {
    name: "Pedro",
    handle: "@pedro_lebrebites",
    bio: "Em busca da perfeição culinária, um dente de cada vez. Crítico gastronómico independente.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pedro",
};

export const RESTAURANTS: Restaurant[] = [
    {
        id: "r1",
        name: "Tasca do Zé",
        slug: "tasca-do-ze",
        city: "Lisboa",
        cuisine: "Portuguesa Contemporânea",
        priceRange: "$$$",
        rating: 4.8,
        image: "/images/hero_dish.png",
        description: "Um clássico reinventado no coração de Alfama.",
    },
    {
        id: "r2",
        name: "Restaurante Mamamia",
        slug: "mamamia",
        city: "Corroios",
        cuisine: "Italiana",
        priceRange: "$$$",
        rating: 4.5,
        image: "/images/carbonara.png",
        description: "A massa mais autêntica fora de Itália.",
    },
    {
        id: "r3",
        name: "Padaria Lisboa Doce",
        slug: "lisboa-doce",
        city: "Lisboa",
        cuisine: "Pastelaria Tradicional",
        priceRange: "$$$",
        rating: 4.9,
        image: "/images/pastelnata.png",
        description: "Onde o açúcar encontra a arte.",
    },
    {
        id: "r4",
        name: "O Nobre",
        slug: "o-nobre",
        city: "Lisboa",
        cuisine: "Portuguesa Elite",
        priceRange: "$$$$$",
        rating: 4.7,
        image: "/images/lisbon1.png",
        description: "Sofisticaçao máxima da Chef Justa Nobre.",
    },
    {
        id: "r5",
        name: "Prado",
        slug: "prado",
        city: "Lisboa",
        cuisine: "Farm-to-table",
        priceRange: "$$$$",
        rating: 4.6,
        image: "/images/lisbon3.png",
        description: "Ingredientes sazonais com apresentação artística.",
    },
    {
        id: "r6",
        name: "Feitoria",
        slug: "feitoria",
        city: "Lisboa",
        cuisine: "Autoral",
        priceRange: "$$$$$",
        rating: 4.9,
        image: "/images/lisbon2.png",
        description: "Uma experiência gastronómica que celebra a matéria-prima.",
    },
    {
        id: "r7",
        name: "Koppu Ramen",
        slug: "koppu-ramen",
        city: "Lisboa",
        cuisine: "Japonesa",
        priceRange: "$$$",
        rating: 4.4,
        image: "/images/carbonara.png",
        description: "O melhor ramen artesanal da cidade.",
    },
    {
        id: "r8",
        name: "O Frade",
        slug: "o-frade",
        city: "Lisboa",
        cuisine: "Petiscos de Autor",
        priceRange: "$$$",
        rating: 4.7,
        image: "/images/hero_dish.png",
        description: "A alma alentejana servida ao balcão em Belém.",
    },
    {
        id: "r_marisqueira_rui",
        name: "Marisqueira Rui",
        slug: "marisqueira-rui",
        city: "Silves",
        cuisine: "Marisqueira",
        priceRange: "$$$$",
        rating: 4.3,
        image: "/images/lisbon1.png",
        description: "Famosa pelos mariscos, mas com deslizes imperdoáveis nos básicos.",
    },
];

export const DISHES: Dish[] = [
    {
        id: "d1",
        restaurantId: "r1",
        name: "Mousse de Chocolate",
        category: "dessert",
        rating: 4.8,
        image: "/images/mousse.png",
        description: "Textura aveludada com um toque de flor de sal.",
    },
    {
        id: "d2",
        restaurantId: "r2",
        name: "Carbonara Autêntica",
        category: "main",
        rating: 4.5,
        image: "/images/carbonara.png",
        description: "Sem natas, apenas gema, pecorino e paixão.",
    },
    {
        id: "d3",
        restaurantId: "r3",
        name: "Pastel de Nata Premium",
        category: "dessert",
        rating: 4.9,
        image: "/images/pastelnata.png",
        description: "O segredo está na massa folhada e no creme perfeito.",
    },
];

export const WORST_DISHES: Dish[] = [
    {
        id: "wd1",
        restaurantId: "r_marisqueira_rui",
        name: "Papo-seco torrado com maionese",
        category: "starter",
        rating: 0.5,
        image: "/images/worst_dish_bread.png",
        description: "Um insulto ao paladar. Pão frouxo, maionese de supermercado e uma falta de critérios gritante.",
    },
    {
        id: "wd2",
        restaurantId: "r_bad_1",
        name: "Arroz de Marisco Congelado",
        category: "main",
        rating: 1.0,
        image: "/images/hero_dish.png",
        description: "Textura de borracha e sabor a cloro. Uma experiência a esquecer.",
    },
];

export interface TopDish extends Dish {
    restaurant: string;
    city: string;
}

export const TOP_DISHES: TopDish[] = DISHES.map(dish => {
    const restaurant = RESTAURANTS.find(r => r.id === dish.restaurantId);
    return {
        ...dish,
        restaurant: restaurant?.name || "Desconhecido",
        city: restaurant?.city || "Portugal",
    };
});

export const FEED_ACTIVITIES = [
    {
        id: "f1",
        type: "review",
        content: "Acabei de descobrir a melhor carbonara de Setúbal. Simplesmente divinal.",
        date: "2 horas atrás",
        restaurant: "Restaurante Mamamia",
        rating: 4.5,
        image: "/images/carbonara.png",
    },
    {
        id: "f2",
        type: "discovery",
        content: "O Belcanto continua a ser a minha referência em Lisboa. O novo menu degustação é uma obra prima.",
        date: "1 dia atrás",
        restaurant: "Belcanto",
        rating: 4.9,
        image: "/images/lisbon2.png",
    },
    {
        id: "f3",
        type: "review",
        content: "O Frade nunca falha. Os ovos com chouriço de Estremoz são obrigatórios.",
        date: "3 dias atrás",
        restaurant: "O Frade",
        rating: 4.7,
        image: "/images/hero_dish.png",
    },
    {
        id: "f4",
        type: "thought",
        content: "Será que o preço dos vinhos em Lisboa está a ficar fora de controlo? Discutamos nos comentários.",
        date: "4 dias atrás",
    },
    {
        id: "f5",
        type: "review",
        content: "Finalmente provei o Ramen do Koppu. Caldo rico, massa no ponto. Recomendo.",
        date: "1 semana atrás",
        restaurant: "Koppu Ramen",
        rating: 4.4,
        image: "/images/carbonara.png",
    },
];

