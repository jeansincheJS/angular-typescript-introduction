const name: string = 'Strider';

let hpPoints: number | string = 95;
hpPoints = 'FULL2';
hpPoints = 50;
let hpPoints2: number | 'FULL' = 95;
hpPoints2 = 'FULL';
hpPoints2 = 50;
let isAlive: boolean = true;
console.log({
    name,
    hpPoints,
    hpPoints2,
    isAlive
});
export { };