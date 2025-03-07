

const Input = ({ placeholder, onChange, className, value }) => {
    return (
        <input placeholder={placeholder} onChange={onChange} className={className} value={value} />
    );
};

export default Input;