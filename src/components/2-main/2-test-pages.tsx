import React, { useState, useCallback, useEffect } from 'react';
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web';
//import styles from './styles.module.css';

const childClasses = "absolute w-full h-full text-[16rem] font-bold flex items-center justify-center";

const pages: ((props: AnimatedProps<{ style: React.CSSProperties; }>) => React.ReactElement)[] = [
    ({ style }) => <animated.div className={childClasses} style={{ ...style, background: 'lightpink' }}><div>A</div></animated.div>,
    ({ style }) => <animated.div className={childClasses} style={{ ...style, background: 'lightblue' }}><div>B</div></animated.div>,
    ({ style }) => <animated.div className={childClasses} style={{ ...style, background: 'lightgreen' }}><div>C</div></animated.div>,
];

export function TestPages() {
    const [index, set] = useState(0);
    const onClick = useCallback(() => set(state => (state + 1) % 3), []);
    const transRef = useSpringRef();

    const transitions = useTransition(index, {
        ref: transRef,
        keys: null,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
        config: { duration: 3000 },
    });

    useEffect(() => {
        transRef.start();
    }, [transRef, index]);

    return (
        <div className={`relative h-56 overflow-hidden`} onClick={onClick}>
            {transitions((style, i) => {
                const Page = pages[i];
                return <Page style={style} />;
            })}
        </div>
    );
}
