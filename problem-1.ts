{

    function sumArray(numbers: number[]): number {
        let total: number = 0; 
        for (const num of numbers) { 
            total += num; 
        }
        return total; 
    }

    const result = sumArray([1, 2, 3, 4, 5]);
    console.log(result); 

}