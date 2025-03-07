

const Input = ({ placeholder, onChange, className, value, onFocus, onBlur }) => {
    return (
        <input placeholder={placeholder} onChange={onChange} onFocus={onFocus} onBlur={onBlur} className={className} value={value} />
    );
};

export default Input;