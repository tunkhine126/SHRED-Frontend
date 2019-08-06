import styled from 'styled-components';
import defaultImg from './splash_page.jpg'

const AppDiv = styled.div`
background-image: url(${defaultImg});
min-height: 100vh;
background-size: cover;
background-position: center;
z-index: -1;
`

export default AppDiv