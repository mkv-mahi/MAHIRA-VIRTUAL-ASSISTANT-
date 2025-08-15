let btn=document.querySelector("#click");
let mic=document.querySelector("#mic");
let smic=document.querySelector("#small");
function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    // text_speak.lang="hi-IN"
    window.speechSynthesis.speak(text_speak)
}
function wish(){
    let today=new Date();
    let hour=today.getHours();
    if(hour<12 &&hour>=0){
       speak("Good Morning sir...");
    }
    else if(hour>=12 && hour<16){
       ("Good Afternoon sir...");
    }
    else{
       speak("Good Evening sir...");
    }
}
window.addEventListener('load',()=>{
    wish();
})

let speechRecognition= window.SpeechRecognition  ||  window.webkitSpeechRecognition 
let recognition =new speechRecognition()

recognition.onresult=(event)=>{
    let currentindex = event.resultIndex
    let transcript = event.results[currentindex][0].transcript;
    mic.innerText= transcript;
    takecommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display ="none";
    smic.style.display ="block";
})

function takecommand(data){
    btn.style.display ="flex";
    smic.style.display ="none";
    if(data.includes("hello")|| data.includes ("hey") && data.includes ("mahira")){
        
        speak("Hello sir! How can I help you today?");

    }
   else if(data.includes("time")){
    
        let today=new Date();
        let hours=today.getHours();
        let minutes=today.getMinutes();
        speak(`The current time is ${hours}:${minutes}`)
    }
    else if(data.includes("weather")){
        speak("yes sir, but I can't provide real-time weather updates.")
        window.open("https://www.google.com/search?q=weather+today&sca_esv=728b51f668ed5009&sxsrf=ADLYWIK_nJe3xLVSq76df3VgDVsmnCKRQQ%3A1734963100694&ei=nG9pZ9uFKuKTvr0PnbiZgAw&ved=0ahUKEwjbw8Kaib6KAxXiia8BHR1cBsAQ4dUDCBA&oq=weather+today&gs_lp=Egxnd3Mtd2l6LXNlcnAiDXdlYXRoZXIgdG9kYXlIAFAAWABwAHgBkAEAmAEAoAEAqgEAuAEMyAEAmAIAoAIAmAMAkgcAoAcA&sclient=gws-wiz-serp")

    }
    else if(data.includes("who are you")){
        speak("I'm a virtual assistant MAHIRA i designed to help you with various tasks.. invented by MOHIT KUMAR SIR")
    }
    else if(data.includes("bye") || data.includes("goodbye")){
        speak("Goodbye sir! Have a great day!")
        
    }
    else if(data.includes("date")){
        let today=new Date();
        let date=today.getDate();
        let month=today.getMonth()+1;
        let year=today.getFullYear();
        speak(`the date is ${date}/${month}/${year}`)
    }
     else if(data.includes("calculation")){
        speak("yes sir i know caluctation can you provide me numbers")

        let num1=prompt("Enter first number");
        let num2=prompt("Enter second number");
        let operation=prompt("Enter operation (+,-,*,/)");
        let result;
        switch(operation){
            case "+":
                result=num1+num2;
                break;
            case "-":
                result=num1-num2;
                break;
            case "*":
                result=num1*num2;
                break;
            case "/":
                result=num1/num2;
                break;
            default:
                result="Invalid operation";
                speak("Invalid operation sir ")
        }
        speak(`The result is ${result}`)
    }
    else if(data.includes("hobbies")){
        speak("sorry sir i am an AI i can not have hobies , but i would like to gain knowledge from various sources ")
    }
    else if(data.includes("fact")){
        speak("Sure sir, here is a fact about me : I was invented by MOHIT KUMAR SIR and i was designed to help you with various tasks")
    }
    else if(data.includes("joke")){
        speak("Here is a joke for you : Why did the scarecrow win an award? Because he was outstanding in his field.")
    }
    else if(data.includes("open youtube")){
        speak("yes sir i will opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(data.includes("open google")){
        speak("yes sir i will opening google")
        window.open("https://www.google.com")
    }
     else if(data.includes("open vs code")){
            speak("yes sir i will opening vscode")
            window.open("visual studio code://")
        }
        else if(data.includes("play music")){
            speak("yes sir i will playing music")
            window.open("https://www.youtube.com/watch?v=QkrV3e3ngew&list=RDQkrV3e3ngew&start_radio=1")
        }
        else if(data.includes("open scientific calculator")){
            speak("yes sir i will opening calculator")
            window.open("https://www.calculator.net")
        }
        else if(data.includes("open dictionary")){
            speak("yes sir i will opening dictionary")
            window.open("https://www.dictionary.com")
        }
        else if(data.includes("rakesh")||data.includes("suraj")){
            speak("Sure sir, Rakesh or suraj is older brother of mohit sir")
        }
        else if(data.includes("your parents name")){
            speak("Mohit sir invented me and i dont konwn my parents name")
        }
        else if(data.includes("age")){
            speak("I'm a virtual assistant, I don't have an age. I was invented by MOHIT KUMAR SIR")
        }
        else if(data.includes("parents name")){
            speak("Mohits sirs Fathers name is Mister Sanjay Prasad and His Mothers name is Sanyukta lal ")
        }
        else if(data.includes("where are you from")){
            speak("I'm an AI, I was invented by MOHIT KUMAR SIR and i don't know where i am from")
        }
        else if(data.includes("location")){
            window.open("https://www.google.com/maps/place/UTSAV+NIWAS+%5BSs+xerox+center%5D/@22.7602744,86.1799446,17z/data=!3m1!4b1!4m6!3m5!1s0x39f5fd2001447c89:0x131e84554fe7e7fc!8m2!3d22.7602695!4d86.1825195!16s%2Fg%2F11s5p7mddg?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D")
            speak("here your location")
        }
        else if(data.includes("news")){
            speak("Sure sir, here is the news for today")
            window.open("https://www.bbc.com/news")
        }
        else if(data.includes("instagram")){
            window.open("https://www.instagram.com")
            speak("here your instagram profile")
        }
        else if(data.includes("facebook")){
            window.open("https://www.facebook.com")
            speak("here your facebook profile")
        }
        else if(data.includes("twitter")){
            window.open("https://www.twitter.com")
            speak("here your twitter profile")
        }
        else if(data.includes("github")){
            window.open("https://www.github.com")
            speak("here your github profile")
        }
        else if(data.includes("wikipedia")){
            speak("Sure sir, here is the wikipedia article for you")
            window.open(`https://en.wikipedia.org/wiki/${data.replace("mahira", "_")}`)
        }
        else if(data.includes("settings")){
            speak("Sure sir, here are your settings")
            window.open("settings://")
        }
        else if(data.includes("even") || data.includes("odd")){
            speak("sure sir can you please provide me number ")
            let num=prompt("Enter a number");
            if(num%2==0){
                speak(`${num} is an even number`)
            }
            else{
                speak(`${num} is an odd number`)
            }
        }

            
        else if (data.includes("search on google") || data.includes("search on internet")){
            if(data.includes("search on google")){
            speak(`yes sir i will opening google regarding ${data.replace("search on google",".")}`)
            window.open(`https://www.google.com/search?q=${data.replace("search on google",".")}`)}
            else{
            speak(`yes sir i will opening internet regarding ${data.replace("search on internet",".")}`)
            window.open(`https://www.google.com/search?q=${data.replace("search on internet",".")}`)}
        }
        else{
            speak("Sorry sir, I didn't understand your command. Please try again.")
        }
    }
