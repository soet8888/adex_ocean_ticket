const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
      {
        pititest: {
          "primary": "#EF364D",
          "secondary": "#EF364D",
          "accent": "#EF364D",
          "neutral": "#EF364D",
          "base-100": "#FFFFFF",
          "info": "#EF364D",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
        pitiplus: {
          "primary": "#ec4899",
          "secondary": "#4f46e5",
          "accent": "#1FB2A6",
          "neutral": "#f3f4f6",
          "base-100": "#f3f4f6",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
        sakura: {
          primary: "#EAB5CF",
          secondary: "#EAB5CF",
          accent: "#EAB5CF",
          neutral: "#EAB5CF",
          "base-100": "#FFFFFF",
          info: "#EAB5CF",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        magenta: {
          "primary": "#EF364D",
          "secondary": "#EF364D",
          "accent": "#EF364D",
          "neutral": "#EF364D",
          "base-100": "#FFFFFF",
          "info": "#EF364D",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        }
      }
    ],
  },
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      height: {
        "content-height": "calc(100vh - 50px)", //50 + 56
      },
      boxShadow: {
        selected: "inset 0 0 0 2px #ff4747",
        border: "inset 0 0 0 1px #ccc",
        "pin-field": "0 0 0.25rem rgba(220, 53, 69, 0.5)",
      },
      keyframes: {
        shake: {
          from: { transform: "scale(1.05) translateY(-5%)" },
          to: { transform: "scale(1.05) translateY(5%)" },
        },
      },
      animation: {
        shake: "shake 3 linear 75ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
