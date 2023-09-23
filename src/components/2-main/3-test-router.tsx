import { a, useTransition } from "@react-spring/web";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { classNames } from "../../utils"; //https://codesandbox.io/s/react-router-animated-transitions-w-react-spring-not-working-lwyrj7

export function PagesRouterBody() {
    const location = useLocation();

    const transitions = useTransition(location.pathname, {
        from: { transform: 'translate3d(100%,0,0)' },
        enter: { transform: 'translate3d(0%,0,0)' },
        leave: { transform: 'translate3d(-50%,0,0)' },
    });

    return (
        <div className="mx-auto">
            <div className="py-4 flex space-x-4">
                <Link to="/a" className={linkClasses}>A</Link>
                <Link to="/b" className={linkClasses}>B</Link>
                <Link to="/c" className={linkClasses}>C</Link>
                <Link to="/ " className={linkClasses}>Index page</Link>
            </div>

            <div className="relative overflow-hidden">
                {transitions((styles) => (
                    <a.div style={styles} className={parentClasses}>
                        <Routes location={location}>
                            <Route path="a" element={<A />} />
                            <Route path="b" element={<B />} />
                            <Route path="c" element={<C />} />
                            <Route path="/" element={<D />} />
                        </Routes>
                    </a.div>
                ))}
            </div>
        </div>
    );
}

export function PagesRouter() {
    return (
        <BrowserRouter>
            <PagesRouterBody />
        </BrowserRouter>
    );
}

const linkClasses = "px-4 py-2 min-w-[6ch] text-center bg-zinc-100 rounded shadow select-none";

const parentClasses = "relative max-w-xs h-28";
const childClasses = "absolute top-0 w-full h-full flex items-center justify-center";

const A = () => {
    return (
        <Link to="/b">
            <div className={classNames(childClasses, "bg-purple-300")} >
                A
            </div>
        </Link>

    );
};

const B = () => {
    return (
        <Link to="/c">
            <div className={classNames(childClasses, "bg-red-300")} >
                B
            </div>
        </Link>
    );
};

const C = () => {
    return (
        <Link to="/">
            <div className={classNames(childClasses, "bg-orange-500")} >
                C
            </div>
        </Link>
    );
};

const D = () => {
    return (
        <Link to="/a">
            <div className={classNames(childClasses, "bg-zinc-100")}>
                Index Page
            </div>
        </Link>
    );
};
