import * as React from 'react'
import styled from 'styled-components'

const HeaderInner = styled('div')`
    backgrund: #ccc
`

interface HeaderProps {
    title: string
}
const Header: React.SFC<HeaderProps> = ({ title }) => (
    <HeaderInner> 
        <h2>{title}</h2>
    </HeaderInner>
)

export default Header