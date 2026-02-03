/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.php",
        "./inc/**/*.php",
        "./src/**/*.js",
        "./**/*.html",
    ],
    theme: {
        // 1. Screens (Breakpoints)
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1216px",
        },
        extend: {
            // 2. Colors (Primary, Secondary, Dark Accent)
            colors: {
                primary: {
                    50: '#e6f4f5',
                    100: '#b0dddf',
                    200: '#8acdcf',
                    300: '#55b6b9',
                    400: '#34a8ac',
                    500: '#019297',
                    600: '#018589',
                    700: '#01686b',
                    800: '#015053',
                    900: '#003d3f',
                },
                secondary: {
                    50: '#fdf1e8',
                    100: '#fad3b9',
                    200: '#f8ba97',
                    300: '#f49067',
                    400: '#f28d49',
                    500: '#ef711c',
                    600: '#d96719',
                    700: '#aa5014',
                    800: '#833e0f',
                    900: '#642f0c',
                },
                'dark-accent': {
                    50: '#e7ebee',
                    100: '#b5c1cb',
                    200: '#91a3b2',
                    300: '#5e788e',
                    400: '#3f5e79',
                    500: '#0f3857',
                    600: '#0e314f',
                    700: '#0b263e',
                    800: '#081e30',
                    900: '#061725',
                },
                'site-bg': '#F8F6F2',
            },

            // 3. Font Family
            fontFamily: {
                inter: ['"Inter"', 'sans-serif'],
                sora: ['"Sora"', 'sans-serif'],
            },

            // 4. Custom Font Sizes (Using Inter)
            fontSize: {
                "display-xl-bold": [
                    "4rem",
                    {
                        lineHeight: "110%",
                        fontWeight: "700",
                        fontFamily: '"Sora", sans-serif',
                    },
                ],
                "display-l-bold": [
                    "3.5rem",
                    {
                        lineHeight: "110%",
                        fontWeight: "700",
                        fontFamily: '"Sora", sans-serif',
                    },
                ],
                "display-m-bold": [
                    "3rem",
                    {
                        lineHeight: "115%",
                        fontWeight: "700",
                        fontFamily: '"Sora", sans-serif',
                    },
                ],
                "heading-h1-bold": [
                    "2.5rem",
                    {
                        lineHeight: "120%",
                        fontWeight: "700",
                        fontFamily: '"Sora", sans-serif',
                    },
                ],
                "heading-h2-semibold": [
                    "2rem",
                    {
                        lineHeight: "125%",
                        fontWeight: "600",
                        fontFamily: '"Sora", sans-serif',
                    },
                ],
                "heading-h3-semibold": [
                    "1.75rem",
                    {
                        lineHeight: "130%",
                        fontWeight: "600",
                        fontFamily: '"Sora", sans-serif',
                    },
                ],
                "heading-h4-semibold": [
                    "1.25rem",
                    {
                        lineHeight: "130%",
                        fontWeight: "600",
                        fontFamily: '"Sora", sans-serif',
                    },
                ],
                "heading-h5-medium": [
                    "1.125rem",
                    {
                        lineHeight: "135%",
                        fontWeight: "500",
                        fontFamily: '"Sora", sans-serif',
                    },
                ],
                "subtitle-l-medium": [
                    "1.125rem",
                    {
                        lineHeight: "130%",
                        fontWeight: "500",
                        fontFamily: '"Inter", sans-serif',
                    },
                ],
                "subtitle-m-medium": [
                    "1rem",
                    {
                        lineHeight: "150%",
                        fontWeight: "500",
                        fontFamily: '"Inter", sans-serif',
                    },
                ],
                "body-large": [
                    "1.125rem",
                    {
                        lineHeight: "160%",
                        fontWeight: "500",
                        fontFamily: '"Inter", sans-serif',
                    },
                ],
                "body-regular": [
                    "1rem",
                    {
                        lineHeight: "160%",
                        fontWeight: "400",
                        fontFamily: '"Inter", sans-serif',
                    },
                ],
                "body-small": [
                    "0.875rem",
                    {
                        lineHeight: "160%",
                        fontWeight: "400",
                        fontFamily: '"Inter", sans-serif',
                    },
                ],
                "body-xs": [
                    "0.75rem",
                    {
                        lineHeight: "160%",
                        fontWeight: "400",
                        fontFamily: '"Inter", sans-serif',
                    },
                ],
                "button-primary": [
                    "1rem",
                    {
                        lineHeight: "120%",
                        fontWeight: "600",
                        fontFamily: '"Inter", sans-serif',
                    },
                ],
                "button-scondary": [
                    "0.875rem",
                    {
                        lineHeight: "120%",
                        fontWeight: "600",
                        fontFamily: '"Inter", sans-serif',
                    },
                ],
                "button-small": [
                    "0.75rem",
                    {
                        lineHeight: "120%",
                        fontWeight: "600",
                        fontFamily: '"Inter", sans-serif',
                    },
                ],
                "placeholder": [
                    "0.875rem",
                    {
                        lineHeight: "140%",
                        fontWeight: "400",
                        fontFamily: '"Inter", sans-serif',
                    },
                ],
                "tooltip": [
                    "0.75rem",
                    {
                        lineHeight: "140%",
                        fontWeight: "400",
                        fontFamily: '"Inter", sans-serif',
                    },
                ],
            },

            // 5. Background Image
            backgroundImage: {
                "hero-gradient": "linear-gradient(180deg, rgba(248, 246, 242, 1) 1%, rgba(85, 182, 185, 1) 100%)",
            },

            //6. Global Container
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    xl: "0",
                    "2xl": "0",
                },
            },
        },
    },
    plugins: [],
}