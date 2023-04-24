
export const calculateWidth = () => {


  let array = [2]

  const handleResize = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (window.innerWidth <= 768) {
          if(array[0] === 2){
            array.splice(0, 1)
            array.splice(0, 0, 1)
          }
        } else {
          if(array[0] !== 2){
            array.splice(0, 1)
            array.splice(0, 0, 2)
          }
        }
      }

      console.log(array)
    });
  }

    const elemento = (elemento) => {
      return document.getElementById(elemento);
  }

  console.log(array)

  const observador = new IntersectionObserver(handleResize, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
});
  observador.observe(elemento('valueHandle'))

};
