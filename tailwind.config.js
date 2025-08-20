module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      fontFamily: {
        ovo: ['Ovo', 'serif'],
      },
      animation: {
        spin_slow: 'spin 12s linear infinite',
      },
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001f',
        darkText: '#e0e0e0',
        darkCard: '#1c012f',
        primary: '#ff6363',
        secondary: '#3faffa',
      },
      boxShadow: {
        black: '4px 4px 0 #000',
        white: '4px 4px 0 #fff',
      },
    },
  },
};
