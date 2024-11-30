import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../../InterviewArea/Main/Main";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>
            <main>
                <Main />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
