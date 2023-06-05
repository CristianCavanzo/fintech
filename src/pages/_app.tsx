import type { AppProps } from 'next/app';
import '@styles/global.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={poppins.className}>
			<Component {...pageProps} />
		</div>
	);
}
