export interface RouteInfo {
    path: string;
    title: string;
    icon?: string;
    subRoutes?: RouteInfo[];
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { 
        path: '/home',
        title: 'Home',
        icon: 'home',
        class: '',
    },
    { 
        path: '/informatie',
        title: 'Informatie',
        icon: 'info',
        class: '',
    },
    { 
        path: '/kalender',
        title: 'Kalender',
        icon: 'today',
        class: '',
    },
    { 
        path: '/contact',
        title: 'Contact',
        icon: 'mail',
        class: '',
    },
];