
const Button = ({ children, onClick, ClassName }) => {
    return (
        <button onClick={onClick} ClassName={ClassName}>{children}</button>
    );
};

export default Button;