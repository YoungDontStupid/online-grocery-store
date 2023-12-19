// описание маршрутов к страницам
import {ADMIN_ROUTE, BASKET_ROUTE, FOOD_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import FoodPage from "./pages/FoodPage";

// маршруты для тех страниц, к которым имеет доступ только авторизованный пользователь
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

// маршруты на страницы для всех пользователей
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: FOOD_ROUTE + '/:id',
        Component: FoodPage
    },
]