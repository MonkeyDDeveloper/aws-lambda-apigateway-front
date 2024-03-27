import {
    Home,
    Navigation,
    ProductCard,
    EditForm,
    Notifications,
    ProductGrid,
    Footer
} from "./locales";

export default defineI18nConfig(() => ({
    legacy: false,
    messages: {
        en: {
            Home: Home.En,
            Navigation: Navigation.En,
            ProductCard: ProductCard.En,
            EditForm: EditForm.En,
            Notifications: Notifications.En,
            ProductGrid: ProductGrid.En,
            Footer: Footer.En
        },
        es: {
            Home: Home.Es,
            Navigation: Navigation.Es,
            ProductCard: ProductCard.Es,
            EditForm: EditForm.Es,
            Notifications: Notifications.Es,
            ProductGrid: ProductGrid.Es,
            Footer: Footer.Es
        },
    },
}));