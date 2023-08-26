import type React from 'react';
import { st, classes } from './app.st.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/header';

export interface AppProps {
    className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
    return (
        <main className={st(classes.root, className)}>
            <Header className={classes.header} />
            <Footer className={classes.footer} />
        </main>
    );
};
