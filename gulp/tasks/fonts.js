import { fontsDestination } from '../config/options.js'
import { paths } from '../config/paths.js'
import { plugins } from '../config/plugins.js'

// Задача для копирования шрифтов
export const fonts = () => {
	return (
		plugins.gulp
			.src(paths.src.fonts) // './src/fonts/**/*.{ttf,otf,woff,woff2}'
			.pipe(plugins.plumber(plugins.notify.onError('Fonts error')))
			.pipe(plugins.newer(fontsDestination))
			// Конвертация .otf → .ttf (если нужно)
			.pipe(plugins.fonter({ formats: ['ttf'] }))
			// Конвертация .ttf → .woff2
			.pipe(plugins.ttf2woff2())
			// Копирование всех .woff2 в build
			.pipe(plugins.gulp.dest(paths.dest.dev + 'fonts/'))
			.pipe(plugins.browserSync.stream())
	)
}
