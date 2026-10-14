/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-pink': '#FF4081',
        'accent-pink-light': '#FF6B9D',
        'accent-pink-dark': '#E91E63',
        'secondary-accent': '#8C9EFF',
        'dark-bg': '#0F0F1A',
        'dark-bg-2': '#161628',
        'card-bg': '#1C1C2E',
        'card-bg-hover': '#252540',
        'light-text': '#E0E0E8',
        'muted-text': '#9999B0',
        'border-subtle': '#2A2A42',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 64, 129, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 64, 129, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        slideInUp: 'slideInUp 0.7s ease-out forwards',
        slideInLeft: 'slideInLeft 0.7s ease-out forwards',
        slideInRight: 'slideInRight 0.7s ease-out forwards',
        float: 'float 5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        gradientShift: 'gradientShift 5s ease infinite',
        bounceSubtle: 'bounceSubtle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
