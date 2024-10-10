// Function to find a string in an array
function findString(arr: any[]): string | undefined {
    for (const item of arr) {
        if (typeof item === 'string') {
            return item;
        }
    }
    return undefined;
}

// Example usage
const items = [1, 'two', 3, 'four'];
const foundString = findString(items);

if (foundString !== undefined) {
    console.log(`Found string: ${foundString}`);
} else {
    console.log('No string found');
}