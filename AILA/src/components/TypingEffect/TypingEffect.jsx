import React, { useEffect, useRef } from "react"
import Typed from "typed.js"

const TypingEffect = ({ text }) => {
const typingRef = useRef(null)

useEffect(() => {
    const options = {
    strings: [text],
    typeSpeed: 200,
    cursorChar: '_',
    stopNum: 2,
    };

    const typed = new Typed(typingRef.current, options)

    return () => {
    typed.destroy()
    }
}, [text])

return <span ref={typingRef}></span>
}

export default TypingEffect
