import { useContext } from 'react'
// import { ThemeContext } from '../Posts/contexts';
import './IconLeftArrow.scss'

export const IconLeftArrow = () => {
    // const { theme } = useContext(ThemeContext)

    return (
        // <svg className={`left`} width='18' height='15' viewBox='0 0 18 15' xmlns='http://www.w3.org/2000/svg'>
        //     <path fillRule='evenodd' clipRule='evenodd' d='M7.70945 0.292384C7.89945 0.492383 7.99945 0.742383 7.99945 1.00238C7.99945 1.26238 7.89945 1.51238 7.70945 1.71238L3.40945 6.00238L16.9995 6.00238C17.5495 6.00238 17.9995 6.45238 17.9995 7.00238C17.9995 7.55238 17.5495 8.00238 16.9995 8.00238L3.40945 8.00238L7.70945 12.2924C8.09945 12.6824 8.09945 13.3224 7.70945 13.7124C7.31945 14.1024 6.67945 14.1024 6.28945 13.7124L0.289453 7.71238C0.199453 7.62238 0.129453 7.51238 0.0794534 7.39238C0.0594534 7.34238 0.0394534 7.30238 0.0394534 7.25238C-0.0105466 7.09238 -0.0105466 6.91238 0.0394534 6.75238C0.0394534 6.70238 0.0594534 6.66238 0.0794534 6.61238C0.129453 6.49238 0.199453 6.38238 0.289453 6.29238L6.28945 0.292383C6.67945 -0.0976169 7.31945 -0.0976168 7.70945 0.292384Z' fill="currentColor" />
        // </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289Z" fill="#0F1729" />
        </svg>
    )
}