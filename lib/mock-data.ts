export interface PlateItem {
    id: string;
    name: string;
    restaurant: string;
    city: string;
    rating: number;
    image: string;
    category: "dish" | "dessert" | "pasta" | "burger";
}

export const TOP_DISHES: PlateItem[] = [
    {
        id: "1",
        name: "Mousse de Chocolate",
        restaurant: "Tasca do Zé",
        city: "Lisboa",
        rating: 4.8,
        image: "/images/mousse.png",
        category: "dessert",
    },
    {
        id: "2",
        name: "Carbonara Autêntica",
        restaurant: "Restaurante Mamamia",
        city: "Corroios",
        rating: 4.5,
        image: "/images/carbonara.png",
        category: "pasta",
    },
    {
        id: "3",
        name: "Pastel de Nata",
        restaurant: "Padaria Lisboa Doce",
        city: "Lisboa",
        rating: 4.9,
        image: "/images/pastelnata.png",
        category: "dessert",
    },
];
