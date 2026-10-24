import styles from './Button.module.css';
 export type ButtonProps = {
    // Text to display on the button
    label: string;
    // Visual style of the button
    variant?: 'primary' | 'secondary'| 'danger';
    // Size of the Button
    size?: 'small' | 'medium' | 'large';
    // Disables the button
    disabled?: boolean;
    // Shows a loading state and disables click
    loading?: boolean;
    // click handler
    onClick?: () => void;
}



export function Button({ label, variant = 'primary', size = 'medium', disabled = false, loading = false, onClick }: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]}`}
            disabled={disabled || loading}
            onClick={onClick}
        >
            {loading ? 'Loading...' : label}
        </button>
    );

    }