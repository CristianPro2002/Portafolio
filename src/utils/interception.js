export const effectView = () => {

    const elemento = (elemento) => {
        return document.getElementById(elemento);
    }
    
    const cargarElemento = (entries, observer) => {
        entries.forEach(entry => {
            const valueClass = entry.target.className;
            if (entry.isIntersecting) {
                if(!valueClass.includes('effectview')){
                    entry.target.className = `${valueClass} effectview`;
                }
            }else {
                if(valueClass.includes('effectview')){
                    entry.target.className = valueClass.replace('effectview', '');
                }
            }

            
        });
    };
    
    const observador = new IntersectionObserver(cargarElemento, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });
    
    observador.observe(elemento('efecto'));
    observador.observe(elemento('efecto2'));
    observador.observe(elemento('efecto3'));
    observador.observe(elemento('efectoPrueba1'));
    observador.observe(elemento('efectoPrueba2'));
    observador.observe(elemento('efectoPrueba3'));
    observador.observe(elemento('efectoPrueba4'));
    observador.observe(elemento('efectoPrueba5'));
}