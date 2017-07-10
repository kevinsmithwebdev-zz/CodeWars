function DNAStrand(dna){
	var arr = [];
	for (var i = 0 ; i < dna.length ; i++){
		switch (dna[i]){
			case 'A':
			  arr.push('T');
			  break;
			case 'T':
			  arr.push('A');
			  break;
			case 'C':
			  arr.push('G');
			  break;
			case 'G':
			  arr.push('C');
			  break;
		}
	}
	return arr.join('');
}