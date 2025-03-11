export const formatPrice = (value ) => {

    return new Intl.NumberFormat('pr-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format( value / 100 );
}