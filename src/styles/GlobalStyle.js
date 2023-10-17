import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body{
  margin: 0; 

  }
html{
  scroll-behavior: smooth;
  scroll-padding-top: 7rem;
}
p,
h1,
h2,
h3,
h4,input {
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
   width:100%;
  height: auto;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
.swiper-pagination{
  transform: translateY(8px);
}
.prevSlide{
  position: absolute;
  left: 10px;
  font-size: 2rem;
  z-index: 999;
  top: 40%;
}
`
