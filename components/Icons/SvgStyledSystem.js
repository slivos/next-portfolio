import * as React from 'react';

function SvgStyledSystem(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-18 -18 36 36"
            width="1em"
            height="1em"
            display="block"
            overflow="visible"
            color="#000"
            fill="none"
            stroke="currentColor"
            {...props}
        >
            <path d="M0-16l-14 8V8l14 8 14-8V-8L0-16z" />
            <path d="M0-16V0m-14 8L0 0l14 8" strokeWidth={0.25} />
        </svg>
    );
}

export default SvgStyledSystem;
