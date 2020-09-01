export interface RouteInfo {
    path: string;
    title: string;
    icon?: string;
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
        path: '/kalender',
        title: 'Kalender',
        icon: 'today',
        class: '',
    },
    // { 
    //     path: '/TODO',
    //     title: 'Documenten',
    //     icon: 'attach_file',
    //     class: '',
    // },
];