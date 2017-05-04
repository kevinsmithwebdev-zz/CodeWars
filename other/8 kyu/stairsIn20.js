function stairsIn20(s){
      let sum = 0;
      for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < s[i].length; j++) {
          sum += s[i][j];
        }
      }

      return sum * 20;
    }