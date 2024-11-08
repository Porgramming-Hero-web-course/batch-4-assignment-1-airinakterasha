{

    function countWordOccurrences(sentence: string, word: string): number {
        const lowerSentence = sentence.toLowerCase();
        const lowerWord = word.toLowerCase();    
        const words = lowerSentence.split(/[.,!?\s]+/);
        
        return words.filter(w => w === lowerWord).length;
    }

    const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    console.log(result); 

}