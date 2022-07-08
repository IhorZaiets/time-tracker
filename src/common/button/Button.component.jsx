import classes from './Button.module.css'

export const Button = ({children, className, ...props}) => (
    <button {...props} className={`${classes.btn} ${className}`}>{children}</button>
)