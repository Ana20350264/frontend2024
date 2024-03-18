export const Button = ({class: className, label, function: action}) => {
return(
    <button
        type='button'
        className={className}
        onClick={action}
        >
        {label}
    </button>
)
}