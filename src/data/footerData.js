import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const footMenu = [
    {
        id: 1,
        title: "Помощь",
        menu: [
            {
                id: 1,
                link: "FAQs",
                path: "/"
            },
            {
                id: 2,
                link: "Отследить доставку",
                path: "/"
            },
            {
                id: 3,
                link: "Отмена заказа",
                path: "/"
            },
            {
                id: 4,
                link: "Возврат заказа",
                path: "/"
            },
            {
                id: 5,
                link: "Гарантийная информация",
                path: "/"
            },
        ]
    },
    {
        id: 2,
        title: "Политика",
        menu: [
            {
                id: 1,
                link: "Правила",
                path: "/"
            },
            {
                id: 2,
                link: "Безопасность",
                path: "/"
            },
            {
                id: 3,
                link: "Карта сайта",
                path: "/"
            },
            {
                id: 4,
                link: "Политика конфиденциальности",
                path: "/"
            },
            {
                id: 5,
                link: "Условия использования материалов",
                path: "/"
            },
        ]
    },
    {
        id: 3,
        title: "Компания",
        menu: [
            {
                id: 1,
                link: "О нас",
                path: "/"
            },
            {
                id: 2,
                link: "Обратная связь",
                path: "/"
            },
            {
                id: 3,
                link: "Сервисные центры",
                path: "/"
            },
            {
                id: 4,
                link: "Карьера",
                path: "/"
            },
            {
                id: 5,
                link: "Дилеры",
                path: "/"
            },
        ]
    }
];

export const footSocial = [
    {
        id: 1,
        icon: <FaFacebookF />,
        path: "/",
    },
    {
        id: 2,
        icon: <FaTwitter />,
        path: "/",
    },
    {
        id: 3,
        icon: <FaInstagram />,
        path: "/",
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        path: "/",
    },
];
