{
    function removeDuplicates(numbers: number[]): number[] {
        const individualNumber: number[] = []; 
        const double: Set<number> = new Set();

        for (const num of numbers) { 
            if (!double.has(num)) { 
                double.add(num); 
                individualNumber.push(num); 
            }
        }

        return individualNumber; 
    }


    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

    console.log(result); 

}