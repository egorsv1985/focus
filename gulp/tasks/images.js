import { imagesDestination, isProduction } from '../config/options.js'
import { paths } from '../config/paths.js'
import { plugins } from '../config/plugins.js'

// Задача для сборки изображений
export const images = () => {
	return plugins.gulp
		.src(paths.src.images)
		.pipe(plugins.newer(imagesDestination))
		.pipe(plugins.changed(imagesDestination))
		.pipe(plugins.gulpIf(isProduction, plugins.webp()))
		.pipe(plugins.gulp.dest(imagesDestination))
		.pipe(plugins.gulp.src(paths.src.images))
		.pipe(plugins.newer(imagesDestination))
		.pipe(plugins.changed(imagesDestination))
		.pipe(plugins.gulp.dest(imagesDestination))
		.pipe(plugins.gulpIf(isProduction, plugins.imagemin({ verbose: true })))
		.pipe(plugins.gulp.dest(imagesDestination))
		.pipe(plugins.browserSync.stream())
}
