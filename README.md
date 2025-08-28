# Art Finder
<img src="./img/readME.gif">

# About this Project
This is a simple frontend application that allows users to explore art from the Art Institute of Chicago's repository. It allows the user to choose from 6 predefined categories to discover artwork.

# Built With
<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" height="50" alt="HTML5">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" height="50" alt="CSS3">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="50" alt="JavaScript">
</div>
  Art Institute of Chicago API
<br/>
<br/>

# Get Started
[Link here](#)

# Optimizations 
- Refactoring this code in React would be ideal, it would allow for less redundant code and overall better user experience.

- Additional error handling could be added to manage cases where the images are not found, which is difficult to add due to the way the images are being dynamically displayed in JS.

- Adding more information about the artist, the type of art, and related art pieces.
 
- There is a randomization feature added to the API request, this was added to mitigate the "boosted" results that returned similar results for different query requests. In the future, implementing a more targeted approach that would check the results for redundancy before displaying them.

- Fullstack Optimizations: allow users to save artwork and go back to saved artwork pieces.

# Limitations
- This website is only functional with browsers that can run JS. In the future I would like to add static images to allow individuals who do not have access to modern web browsers the opportunity to experience different artwork.

- User is limited to choosing one of the 6 categories, further limited to the top categories that ARTIC has boosted during that request period.