import {
	cssDestination,
	plumberNotify,
	sassOptions,	
	postcssPlugins,
	useTailwind,
} from '../config/options.js'
import { paths } from '../config/paths.js'
import { plugins } from '../config/plugins.js'

export const stylesBitrix = () => {
	return plugins.gulp
		.src(paths.src.scss) // Обрабатываем SCSS файлы
		.pipe(plugins.plumber(plumberNotify('SCSS for Bitrix')))
		.pipe(plugins.sassGlob())
		.pipe(plugins.sass(sassOptions))
		.pipe(plugins.replace('@img', paths.img.css))
		.pipe(plugins.replace('../images', 'images')) // Заменяем пути
		.pipe(plugins.postcss(postcssPlugins)) // Применяем PostCSS плагины
		.pipe(
			useTailwind
				? plugins.postcss(postcssPlugins.tailwindPlugins)
				: plugins.gulp.dest(cssDestination)
		)
		.pipe(plugins.concat('template_styles.css')) // Объединяем в один файл
		.pipe(plugins.gulp.dest('./public_html/bitrix/templates/print/')) // Путь для сохранения
}
