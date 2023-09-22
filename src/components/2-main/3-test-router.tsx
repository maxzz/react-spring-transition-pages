import { a, useTransition } from "@react-spring/web";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { classNames } from "../../utils";

export function PagesRouterBody() {
    const location = useLocation();

    const transitions = useTransition(location.pathname, {
        from: { transform: 'translate3d(100%,0,0)' },
        enter: { transform: 'translate3d(0%,0,0)' },
        leave: { transform: 'translate3d(-50%,0,0)' },
    });

    return (
        <div>
            <div className="py-4 flex space-x-4">
                <Link to="/a" className="px-4 py-2 min-w-[6ch] text-center bg-zinc-100 rounded shadow">A</Link>
                <Link to="/b" className="px-4 py-2 min-w-[6ch] text-center bg-zinc-100 rounded shadow">B</Link>
                <Link to="/c" className="px-4 py-2 min-w-[6ch] text-center bg-zinc-100 rounded shadow">C</Link>
                <Link to="/d" className="px-4 py-2 min-w-[6ch] text-center bg-zinc-100 rounded shadow">No page</Link>
            </div>

            {transitions((styles) => (
                <a.div style={styles}>
                    <Routes location={location}>
                        <Route path="a" element={<A />} />
                        <Route path="b" element={<B />} />
                        <Route path="c" element={<C />} />
                    </Routes>
                </a.div>
            ))}
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

const PageClasses = "";

const A = () => (
    <div className={classNames(PageClasses, "bg-purple-300")}>
        <Link to="/b">A</Link>
    </div>
);

const B = () => (
    <div className={classNames(PageClasses, "bg-red-300")}>
        <Link to="/c">B</Link>
    </div>
);

const C = () => (
    <div className={classNames(PageClasses, "bg-orange-500")}>
        <Link to="/a">C</Link>
    </div>
);
