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
    phone?: string;
    mapIframe?: string;
    isExclusive?: boolean;
    exclusiveDetails?: string;
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
        name: "Restaurante Os Amigos",
        slug: "os-amigos",
        city: "Lisboa",
        cuisine: "Portuguesa Tradicional",
        priceRange: "$$$",
        rating: 4.8,
        image: "/images/hero_dish.png",
        description: "Um tesouro escondido com comida caseira autêntica.",
        phone: "211346101",
        mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4786.947833789703!2d-9.1297429!3d38.7193071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19338eb2ad7285%3A0x7c6d2f20c7fc2d0d!2sRestaurante%20Os%20Amigos!5e1!3m2!1spt-PT!2spt!4v1773096520271!5m2!1spt-PT!2spt",
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
        name: "Os Sogros",
        slug: "os-sogros",
        city: "Algarve",
        cuisine: "Tradicional Regional",
        priceRange: "$$$$$",
        rating: 4.7,
        image: "/images/chanfana.png",
        description: "A essência da cozinha algarvia de interior com sabores fortes e genuínos.",
        isExclusive: true,
        exclusiveDetails: "Apenas por convite. 1x por ano em Dezembro.",
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
    {
        id: "r_selva",
        name: "A Selva",
        slug: "a-selva",
        city: "Barcelona",
        cuisine: "Steakhouse & Fusion",
        priceRange: "$$$$",
        rating: 4.8,
        image: "/images/lisbon2.png",
        description: "Uma selva urbana com sabores surpreendentes.",
    },
    {
        id: "r_sushi_come",
        name: "Sushi Come",
        slug: "sushi-come",
        city: "Lisboa (Uber Eats)",
        cuisine: "Japonesa",
        priceRange: "$$$",
        rating: 4.4,
        image: "/images/lisbon3.png",
        description: "Surpreendente qualidade em regime delivery.",
    },
    {
        id: "r_butter_paradise",
        name: "Butter Paradise",
        slug: "butter-paradise",
        city: "Lisboa (Glovo)",
        cuisine: "Indiana",
        priceRange: "$$$",
        rating: 4.7,
        image: "/images/butter_chicken.png",
        description: "O melhor caril da cidade na comodidade de sua casa.",
    },
    {
        id: "r_pizanni",
        name: "Pizanni",
        slug: "pizanni",
        city: "Lisboa (Glovo)",
        cuisine: "Pizza Artesanal",
        priceRange: "$$$",
        rating: 4.6,
        image: "/images/lisbon1.png",
        description: "Massa fina e crocante que viaja bem.",
    },
];

export const DISHES: Dish[] = [
    {
        id: "d1",
        restaurantId: "r1",
        name: "Mousse de Chocolate Caseira",
        category: "dessert",
        rating: 4.8,
        image: "/images/mousse.png",
        description: "Receita caseira tradicional, densa e cheia de sabor.",
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
        name: "Chanfana Algarvia",
        category: "main",
        rating: 4.7,
        image: "/images/chanfana.png",
        description: "Extremamente Exclusivo. Só por convite e apenas é servido uma vez por ano. Carne tenra cozinhada lentamente em vinho tinto e especiarias da serra.",
    },
    {
        id: "d4",
        restaurantId: "r1",
        name: "Bacalhau à Brás Clássico",
        category: "main",
        rating: 4.6,
        image: "/images/bacalhau_bras.png",
        description: "O ponto perfeito entre a cremosidade do ovo e o estaladiço da batata.",
    },
    {
        id: "d5",
        restaurantId: "r_selva",
        name: "Cheesecake de Pistácio",
        category: "dessert",
        rating: 4.9,
        image: "/images/pistachio_cheesecake.png",
        description: "Uma explosão de pistácio numa base cremosa e envolvente.",
    },
    {
        id: "d6",
        restaurantId: "r4",
        name: "Pudim Abade de Priscos",
        category: "dessert",
        rating: 4.7,
        image: "/images/abade_priscos.png",
        description: "A textura sedosa com o toque de presunto que o torna único.",
    },
    {
        id: "d7",
        restaurantId: "r_sushi_come",
        name: "Sashimi de Peixe Pargo com Coentros",
        category: "main",
        rating: 4.8,
        image: "/images/sashimi_pargo.png",
        description: "Frescura absoluta com um toque lusitano de coentros.",
    },
    {
        id: "d8",
        restaurantId: "r_butter_paradise",
        name: "Butter Chicken Signature",
        category: "main",
        rating: 4.7,
        image: "/images/butter_chicken.png",
        description: "O equilíbrio perfeito entre especiarias, manteiga e cremosidade.",
    },
    {
        id: "d9",
        restaurantId: "r_pizanni",
        name: "Pizza Diavola",
        category: "main",
        rating: 4.5,
        image: "/images/pizza_diavola.png",
        description: "Picante na medida certa, com salame de qualidade superior.",
    },
];

export const LENDARY_DISHES: TopDish[] = [
    { ...DISHES[1], restaurant: "Restaurante Mamamia", city: "Corroios" },
    { ...DISHES[2], restaurant: "Os Sogros", city: "Algarve" },
    { ...DISHES[3], restaurant: "Restaurante Os Amigos", city: "Lisboa" },
];

export const LENDARY_DESSERTS: TopDish[] = [
    { ...DISHES[0], restaurant: "Restaurante Os Amigos", city: "Lisboa" },
    { ...DISHES[4], restaurant: "A Selva", city: "Barcelona" },
    { ...DISHES[5], restaurant: "O Nobre", city: "Lisboa" },
];

export const TAKEOUT_AWARDS: TopDish[] = [
    { ...DISHES[6], restaurant: "Sushi Come", city: "Uber Eats" },
    { ...DISHES[7], restaurant: "Butter Paradise", city: "Glovo" },
    { ...DISHES[8], restaurant: "Pizanni", city: "Glovo" },
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

