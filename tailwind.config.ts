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
        secondary: "#909090",
      }
    },
  },
  plugins: [],
}
export default config
