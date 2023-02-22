import React from "react";

const icons = {
    Add: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12H18" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 18V6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 0.5H17C20.5899 0.5 23.5 3.41015 23.5 7V17C23.5 20.5899 20.5899 23.5 17 23.5H7C3.41015 23.5 0.5 20.5899 0.5 17V7C0.5 3.41015 3.41015 0.5 7 0.5Z" stroke="#D9D9D9"/>
        </svg>
    ),
    UserAdd: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.41003 22C3.41003 18.13 7.26003 15 12 15C12.96 15 13.89 15.13 14.76 15.37" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z" stroke="#677294" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.49 17.98H16.51" stroke="#677294" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 16.52V19.51" stroke="#677294" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    ),
    UserEdit: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.21 15.74L15.67 19.2801C15.53 19.4201 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.82 15.13 19.21 15.74Z" stroke="#677294" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.7 16.25C19 17.33 19.84 18.17 20.92 18.47" stroke="#677294" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.40997 22C3.40997 18.13 7.26 15 12 15C13.04 15 14.04 15.15 14.97 15.43" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    ),
    Monitor: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.44 2H17.55C21.11 2 22 2.89 22 6.44V12.77C22 16.33 21.11 17.21 17.56 17.21H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2Z" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 17.22V22" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 13H22" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 22H16.5" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    ),
    Windows: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 2L12 4V11H22V2Z" stroke="#677294" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 22L12 20V13H22V22Z" stroke="#677294" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.3L2 6V11H10V4.3Z" stroke="#677294" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 19.7L2 18V13H10V19.7Z" stroke="#677294" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    ),
    Code: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.89001 9C7.87001 9.49 8.71001 10.23 9.32001 11.15C9.67001 11.67 9.67001 12.34 9.32001 12.86C8.71001 13.77 7.87001 14.51 6.89001 15" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13 15H17" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    ),
    People: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.97 14.44C18.34 14.67 19.85 14.43 20.91 13.72C22.32 12.78 22.32 11.24 20.91 10.3C19.84 9.59001 18.31 9.35 16.94 9.59" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 14.44C5.63 14.67 4.12 14.43 3.06 13.72C1.65 12.78 1.65 11.24 3.06 10.3C4.13 9.59001 5.66 9.35 7.03 9.59" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.47 11.91 9.47C13.34 9.47 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z" stroke="#677294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    ),
}

export default function Icon({ icon, className, fill, size, marginLeft, marginRight }) {

    const styles = {
        display: 'inline-flex',
        color: fill,
        width: size || "16px",
        height: size || "16px",
        marginLeft: marginLeft || 0,
        marginRight: marginRight || 0
    }

    return (
        <div
            className={className}
            style={{ ...styles }}
        >
            {icons[icon]}
        </div>
    )
}