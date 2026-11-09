export default function SplitText({ text, delay = 0, duration = 0.5 }) {

    return (
        <div>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    style={{
                        animationDelay: `${delay + index * 0.1}s`,
                        transition: `opacity ${duration}s ease-in-out`
                    }}
                >
                    {char}
                </span>
            ))}
        </div>
    );
}
