/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0f1d",
          navy: "#0f172a",
          card: "#131c31",
          accent: "#00f5d4",
          cyan: "#0ea5e9",
          blue: "#2563eb",
          purple: "#7c3aed",
          light: "#f8fafc",
          muted: "#94a3b8"
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'branch-glow': 'branchGlow 2.5s infinite alternate',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        branchGlow: {
          '0%': { stroke: '#0284c7', filter: 'drop-shadow(0 0 2px #0284c7)' },
          '100%': { stroke: '#00f5d4', filter: 'drop-shadow(0 0 8px #00f5d4)' },
        }
      }
    },
  },
  plugins: [],
}
