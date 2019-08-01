import styled from 'styled-components';
import defaultImg from '../images/search.jpg'

const SearchDiv = styled.div`
background-image: url(${defaultImg});
height: 100vh;
background-size: cover;
background-position: center;
z-index: -1;
overflow: auto;
`

export default SearchDiv