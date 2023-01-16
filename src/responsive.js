import { css } from "styled-components"

// advanced shorthand for writing cleaner code re mobile responsiveness with styled-components
export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 380px) {
            ${props}
        }
    `
}