import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          default: "#0BF894",
          active: "#0CE287"
        },
        result: {
          fail: "#F70B02"
        },
        background: "#121319",
        base: "#17191F",
        black: "#000000",
        white: "#FFFFFF",
        primary:"#1F222B",
        "primary-hover": "#2D313E",
        secondary: "#909090",
      },
      boxShadow: {
        card :"0px 10px 20px 0px rgba(0, 0, 0, 0.25)",
        "accent-glow":"0px 0px 20px 0px rgba(11, 248, 148, 0.50);"
      },
      data: {
        primary: 'variant="primary"',
        secondary: 'variant="secondary"',
        normal: 'size="normal"',
        compact: 'size="compact"',
      },
      spacing: {
        "base-width": "320px",
        "base-height": "480px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
