import { a, easings, useSpringRef, useTransition } from '@react-spring/web';
import { LoginPage, SigninPage } from '../pages';
import { useEffect, useState } from 'react';

const Components = [LoginPage, SigninPage];
//const data = [0, 1];

export function TestForms() {
    const [index, set] = useState(0);
    const onClick = () => set(state => (state + 1) % 2);

    const springRef = useSpringRef();
    const transitions = useTransition(index, {
        ref: springRef,
        keys: null,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)', config: { easing: easings.easeInExpo } },
        config: { duration: 300 },
    });

    useEffect(() => {
        springRef.start();
    }, [index]);

    return (
        <div className="flex justify-center overflow-hidden" onClick={onClick}>

            {transitions((style, item) => {
                console.log('style =', style, 'item =', item);

                const Component = Components[item];
                return (
                    <a.div style={style} className="border-red-500 border">
                        <Component />
                    </a.div>
                );
            })}

        </div>
    );
}
