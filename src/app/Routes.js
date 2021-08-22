import MenuPage from "../components/Menu/MenuPage"
import ResultPage from "../components/Result/ResultPage"

export const RoutePaths = {
    Home: "/",
    Search: "/search/:query"
}

export const GetRoutes = () => {
    return [
        {
            path: RoutePaths.Home,
            exact: true,
            component: MenuPage,
        },
        {
            path: RoutePaths.Search,
            exact: true,
            component: ResultPage,
        }]
}