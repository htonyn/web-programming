function fibonacciSequence(n) {
    fn1 = 0;
    fn2 = 1;
    output = "";
    document.getElementById("problem-1").innerHTML="Test";
    switch (n) {
        case 1:
            document.getElementById("problem-1").innerHTML="";
            break;
        case 2:
            document.getElementById("problem-1").innerHTML="";
            break;
        default:
            output = "0, 1"
            for (i = 2; i < n; i++) {
                temp = fn1 + fn2;
                fn1 = fn2;
                fn2 = temp;
                output = output + ", " + fn2;
            }
            document.getElementById("problem-1").innerHTML = output;
            break;
    }
}

function asterickTree(n) {
    string = "";
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            string = string + " *";
        }
        string+="<br>";
    }
    document.getElementById("problem-2").innerHTML = string;
}

function arraySort(array) {
    for (i = 0; i < array.length; i++) {
        for (j = i+1; j < array.length; j++) {
            if (array[i] >= array[j]) {        
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    document.getElementById("problem-3").innerHTML = array.toString();
}

function mostCommonOccurence(array) {
    mode = {};
    maxEl = array[0], maxCount = 1;
    for(i = 0; i < array.length; i++)
    {
        el = array[i];
        if(mode[el] == null)
            mode[el] = 1;
        else
            mode[el]++;  
        if(mode[el] > maxCount)
        {
            maxEl = el;
            maxCount = mode[el];
        }
    }
    document.getElementById("problem-4").innerHTML = maxEl + " Times: " +maxCount;
}

function shuffleArray(array) {
    for (i = 0; i < 100; i++) {
        index1 = Math.floor(Math.random() * array.length);
        index2 = Math.floor(Math.random() * array.length);
        temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
    document.getElementById("problem-5").innerHTML = array.toString();
}