    tailwind.config = {
      theme: {
        extend: {
          animation: {
            'bounce-slow': 'bounce 3s infinite',
            'fade-in': 'fadeIn 1s ease-in forwards',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            }
          }
        }
      }
    }