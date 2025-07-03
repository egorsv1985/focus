// Пути к исходным файлам и папкам назначения
export const paths = {
	src: {
		html: './src/html/**/*.html',
		pug: './src/pug/**/*.pug',
		scss: './src/scss/**/*.scss',
		php: './public_html/**/*.php',
		images: './src/images/**/*',
		fonts: './src/fonts/**/*.{ttf,otf,woff,woff2}',
		files: './src/files/**/*',
		js: './src/js/**/*.js',
	},
	dest: {
		dev: './docs/',
	},
	img: {
		html: './images',
		css: '../images',
		js: '../images',
	},
}
