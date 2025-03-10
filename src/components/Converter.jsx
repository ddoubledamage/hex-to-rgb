import { useState } from "react";

const Converter = () => {
    const [hex, setHex] = useState("");
    const [rgb, setRgb] = useState(null);

    function hexToRgb(hex) {
        hex = hex.replace(/^#/, "");

        if (!/^([0-9A-Fa-f]{6})$/.test(hex)) return null;

        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);

        return `rgb(${r}, ${g}, ${b})`;
    }

    function handleChange(event) {
        const inputText = event.target.value;
        setHex(inputText);
        setRgb(hexToRgb(inputText));
    }

    return (
        <div className="container" style={{
            backgroundColor: rgb ? rgb : (hex.length === 7 ? "red" : "white")
        }}>
            <input
                type="text"
                value={hex}
                onChange={handleChange}
                maxLength="7"
            />
            <p>{rgb ? rgb : (hex.length === 7 ? "Ошибка" : "")}</p>
        </div>
    );
}

export default Converter;
