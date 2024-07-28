function LinkIcon (props) {
    const linkIcon = "linkIcon";
    return (
        <svg className={`${linkIcon} ${linkIcon}${props.size}`} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 6H6C3.79086 6 2 7.79086 2 10V30C2 32.2092 3.79086 34 6 34H26C28.2092 34 30 32.2092 30 30V22M22 2H34M34 2V14M34 2L14 22"  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}
export default LinkIcon;