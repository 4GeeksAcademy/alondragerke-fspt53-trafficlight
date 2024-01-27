import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const TrafficLight = () => {
    const baseColors = ["red", "orange", "green"];
    const [colors, setColors] = useState(baseColors);
    const [originalColors, setOriginalColors] = useState(baseColors);
    const [color, setColor] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");

    const handleClick = (newColor) => {
        setColor(newColor);
    };

    const handleToggle = () => {
        // Reset to original colors
        setColors(originalColors);
        setColor("");

        // Perform the toggle logic
        if (color === "green") {
            setColor("red");
        } else if (color === "red") {
            setColor("orange");
        } else {
            setColor("green");
        }
    };

    const changeToPurple = () => {
        const randomIndex = Math.floor(Math.random() * 3); // 0, 1, or 2
        const newColors = [...originalColors];
        newColors[randomIndex] = "purple";
        setColors(newColors);
        setColor("purple");

        setShowMessage(true);
        setMessage("A new color has been successfully added: purple!");
    };

    return (
        <Container className='d-flex flex-column justify-content-start align-items-center vh-100'>
            <div className='pole'></div>
            {colors.map((c, index) => (
                <div className='light' key={index} onClick={() => handleClick(c)}>
                    <div className={`circle ${c} ${color === c ? "active" : ""}`}></div>
                </div>
            ))}
            <div className='m-5'>
                <Button onClick={handleToggle} className='m-2' size="lg" variant="outline-dark">Change!</Button>
                <Button onClick={changeToPurple} className='m-2' size="lg" variant="outline-dark">Surprise!</Button>
            </div>
            {showMessage && (
                <div className="message-container">
                    <p>{message}</p>
                </div>
            )}
        </Container>
    );
};

export default TrafficLight;
