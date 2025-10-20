interface iNacional{
    costo: number;
    codigo: string;
    destino: number; 
}

interface iInternacional{
    costo: number;
    codigo: string;
}

let paqueteNacional: iNacional[], paqueteInternacional: iInternacional[];
paqueteNacional=[
    {costo: 100, codigo:"22", destino:2},
    {costo:50 ,codigo:"11" ,destino:1 },
    {costo:150 ,codigo:"55" ,destino:1 },
    {costo:200 ,codigo:"88" ,destino:2}
];

paqueteInternacional=[
    {costo:1000 ,codigo:"44"},
    {costo:500 ,codigo:"33"},
    {costo:2000 ,codigo:"77"},
    {costo:1500 ,codigo:"44"}
];
export {paqueteInternacional, paqueteNacional};