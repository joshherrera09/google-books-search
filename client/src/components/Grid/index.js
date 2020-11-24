import React from "react";

// Bootstrap container
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Bootstrap row
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>
}

// Bootstrap column
export function Col({ size, children }) {
    return (
    <div className={size.split(" ").map(size => "col-" + size).join(" ")}>{children}</div>
    )
}

