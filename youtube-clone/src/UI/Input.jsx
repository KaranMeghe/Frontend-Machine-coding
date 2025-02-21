

const Input = ({ placeholder, handleChange, className, value }) => {
    return (
        <input placeholder={placeholder} onChange={handleChange} className={className} value={value} />
    );
};

export default Input;