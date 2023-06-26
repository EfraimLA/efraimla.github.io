import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('es', () => import('./es.json'));

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});

export default true;