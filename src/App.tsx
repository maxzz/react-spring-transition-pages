import { LoginPage, SigninPage } from "./components/pages";

export function App() {
    return (<>
        <div className="h-screen p-4 bg-slate-500">
            <LoginPage />
            <SigninPage />
        </div>
    </>);
}
