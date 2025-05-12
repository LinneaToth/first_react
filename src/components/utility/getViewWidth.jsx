import { useEffect, useState } from "react";

const function getViewWidth() {
    const [width, setWidth] = useState(window.innerWidth); //gets info on width from window object

    useEffect(() => {
        setWidth(window.innerWidth);  
    }, [])

}