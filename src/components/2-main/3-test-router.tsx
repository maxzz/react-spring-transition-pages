import { a, useTransition } from "@react-spring/web";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";

export function PagesRouterBody() {
    const location = useLocation();

    const transitions = useTransition(location.pathname, {
        from: { transform: 'translate3d(100%,0,0)' },
        enter: { transform: 'translate3d(0%,0,0)' },
        leave: { transform: 'translate3d(-50%,0,0)' },
    });

    return (
        <div>
            <Link to="/a">A</Link>
            <Link to="/b">B</Link>
            <Link to="/c">C</Link>
            <Link to="/d">No page</Link>
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

const A = () => (
    <div style={{ background: 'lightpink' }}>
        <Link to="/b">A</Link>
    </div>
);

const B = () => (
    <div style={{ background: 'lightblue' }}>
        <Link to="/c">B</Link>
    </div>
);

const C = () => (
    <div style={{ background: 'lightgreen' }}>
        <Link to="/a">C</Link>
    </div>
);
