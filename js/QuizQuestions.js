window.onload = function () {


    var i = 0;
    var correctCount = 0;
    var q = document.getElementById("question");
    generate(0);
    //index

    var btn_next = document.getElementById("btn_next");
    var btn_back = document.getElementById("btn_back");
    btn_next.onclick = function () {
        //i
        if (document.getElementById("opt1").checked && document.getElementById("opt1").value == jsonData[i].answer)

        {
           
            correctCount++;  
        }
        if (document.getElementById("opt2").checked && document.getElementById("opt2").value == jsonData[i].answer)
        {
            
            correctCount++; 
        }
        if (document.getElementById("opt3").checked && document.getElementById("opt3").value == jsonData[i].answer)
        {
           
            correctCount++;           
        }
        if (document.getElementById("opt3").checked && document.getElementById("opt4").value == jsonData[i].answer)
        {
           
            correctCount++;          
        }
       
        if (jsonData.length - 1 < i)
        {
/*             document.write("***your score is : " + correctCount +" ***")
 */         
$('#scoreModal').modal('show');   
 $('#score').text("your score is : " + correctCount)

        }
        clear();

        i++;
        generate(i);
       
    }
    function clear() {
        $("#opt1").prop("checked", false);
        $("#opt2").prop("checked", false);
        $("#opt3").prop("checked", false);
        $("#opt4").prop("checked", false);


    }
    btn_back.onclick = function ()
    {
        clear();
        i--;
        generate(i);
    }
 
    function generate(index) {
        

        q.innerHTML = jsonData[index].q;
        document.getElementById("optt1").innerHTML = jsonData[index].opt1;
        document.getElementById("optt2").innerHTML = jsonData[index].opt2;
        document.getElementById("optt3").innerHTML = jsonData[index].opt3;
        document.getElementById("optt4").innerHTML = jsonData[index].opt4;
    }

    /* timer */
    var timeoutHandle;
    function countdown(minutes) {
        var seconds = 60;
        var mins = minutes
        function tick() {
            var counter = document.getElementById("timer");
            var current_minutes = mins - 1
            seconds--;
            counter.innerHTML =
                current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            if (seconds > 0) {
                timeoutHandle = setTimeout(tick, 1000);
            } else if(mins > 1){

              /*   if (mins > 1) { */

                    // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                    setTimeout(function () { countdown(mins - 1); }, 1000);

                }else if (mins == 1 && seconds == 0){
/*                     document.write("***your score is : " + correctCount +" ***")
 */
$('#scoreModal').modal('show');   

 $('#score').text("your score is : " + correctCount)
                }
            }
        
        tick();
    }

    countdown(15);






}