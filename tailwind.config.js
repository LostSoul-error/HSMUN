/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			forest: {
  				deep: '#061A14',
  				surface: '#0B241D',
  				mid: '#0E2E25'
  			},
  			gold: {
  				imperial: '#D4AF37',
  				champagne: '#E9C46A',
  				light: '#F2D98D'
  			},
  			parchment: '#F8F5F0',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			heading: ['"Playfair Display"', 'ui-serif', 'serif'],
  			display: ['"Cinzel Decorative"', '"Cinzel"', 'ui-serif', 'serif'],
  			ceremonial: ['"Cinzel"', 'ui-serif', 'serif'],
  			serif: ['"Cormorant Garamond"', 'ui-serif', 'serif'],
  			body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			micro: ['Manrope', 'ui-sans-serif', 'sans-serif'],
  			mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'float-slow': {
  				'0%,100%': { transform: 'translateY(0px) translateX(0px)' },
  				'50%': { transform: 'translateY(-22px) translateX(10px)' }
  			},
  			'glow-pulse': {
  				'0%,100%': { boxShadow: '0 0 20px rgba(212,175,55,0.25), 0 0 40px rgba(212,175,55,0.12)' },
  				'50%': { boxShadow: '0 0 40px rgba(212,175,55,0.55), 0 0 80px rgba(212,175,55,0.28)' }
  			},
  			'gradient-shift': {
  				'0%,100%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' }
  			},
  			'spin-slow': {
  				from: { transform: 'rotate(0deg)' },
  				to: { transform: 'rotate(360deg)' }
  			},
  			'shimmer': {
  				'0%': { backgroundPosition: '-200% 0' },
  				'100%': { backgroundPosition: '200% 0' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'float-slow': 'float-slow 9s ease-in-out infinite',
  			'glow-pulse': 'glow-pulse 3.5s ease-in-out infinite',
  			'gradient-shift': 'gradient-shift 12s ease infinite',
  			'spin-slow': 'spin-slow 60s linear infinite',
  			'shimmer': 'shimmer 6s linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
