export interface Supplier {
    id:string;
    option:string;
  }
  
export const selectOptions: Supplier[]=[
    { id: 'galileo', option: 'Galileo' },
    { id: 'sabre', option: 'Sabre' },
    { id: 'amadeus', option: 'Amadeus' },
  ]