function ROT135(input) {
    var newStr = input.replace(/([A-M]|[a-m])|([N-Z]|[n-z])|([0-4])|([5-9])/g, function(m, A1, A2, N1, N2) {
      var adjust = A1 ? 13 : A2 ? -13 : N1 ? 5 : -5;
        return String.fromCharCode(m.charCodeAt(0) + adjust); 
    });
    return newStr;
}