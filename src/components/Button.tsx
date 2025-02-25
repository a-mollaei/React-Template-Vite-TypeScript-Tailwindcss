import { Children } from "react";


const Button = ({Children , className , ...props}) => {
    return(
        <button className={`px-4 rounded ${className}`} {...props}>{Children}</button>
    );
}

export default Button ;