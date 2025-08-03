function arePermutationsSort(str1, str2) {
    if (str1.length !== str2.length) return false;
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(arePermutationsSort("hello", "olhel")); // true
console.log(arePermutationsSort("world", "wo"));    // false
