import styled from 'styled-components';
import defaultImg from '../images/profile.jpg'

const ProfileDiv = styled.div`
background-image: url(${defaultImg});
min-height: 100vh;
background-size: cover;
background-position: center;
z-index: -1;
`

export default ProfileDiv