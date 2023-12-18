let data = [
    {
      question: "JavaScript'te değişken nasıl tanımlanır?",
      true: "var",
      variants: ["var", "let", "const", "int"]
    },
    {
      question: "JavaScript'te döngü nasıl kullanılır?",
      true: "for",
      variants: ["while", "for", "do-while", "foreach"]
    },
    {
      question: "JavaScript'te koşul nasıl kontrol edilir?",
      true: "if",
      variants: ["if", "else", "switch", "case"]
    },
    {
      question: "JavaScript'te fonksiyon nasıl tanımlanır?",
      true: "function",
      variants: ["func", "method", "function", "procedure"]
    },
    {
      question: "JavaScript'te diziler nasıl oluşturulur?",
      true: "[]",
      variants: ["{}", "()", "[]", "//"]
    },
    {
      question: "JavaScript'te arrow function nedir?",
      true: "Kısa fonksiyon tanımı",
      variants: ["Kısa fonksiyon tanımı", "Ok işareti", "Yeni bir tür", "Matematiksel bir operatör"]
    },
    {
      question: "JavaScript'te null ve undefined arasındaki fark nedir?",
      true: "Null değeri atanmamış değer",
      variants: ["Belirtilmemiş değer", "Null değeri atanmamış değer", "Aynı şeydir", "JavaScript'te böyle bir şey yoktur"]
    },
    {
      question: "JavaScript'te '===' operatörü neyi kontrol eder?",
      true: "Değer ve tür",
      variants: ["Sadece değer", "Değer ve tür", "Sadece tür", "Değer, tür ve referans"]
    },
    {
      question: "JavaScript'te 'this' ifadesi neyi temsil eder?",
      true: "Mevcut nesneyi",
      variants: ["Tüm nesneleri", "Mevcut nesneyi", "Global nesneyi", "Prototype'ı"]
    },
    {
      question: "JavaScript'te 'JSON' neyi temsil eder?",
      true: "Veri değişim formatı",
      variants: ["JavaScript Nesne Notasyonu", "JavaScript Üst Düzey Notasyonu", "JavaScript Nesne Nitelikleri", "Veri değişim formatı"]
    },

    
  ];


  const Game={
    score:0,
    Arr:[],
    arrl:-1,
    true:0,
    progress:0,
    nextQuetion:function(){
      
      this.arrl=this.arrl+1
      this.progress=this.progress+10
      if(this.arrl==10){
        return
      }

      question.innerHTML=data[this.arrl].question  
    varianta.innerHTML=data[this.arrl].variants[0]
    variantb.innerHTML=data[this.arrl].variants[1]
    variantc.innerHTML=data[this.arrl].variants[2]
    variantd.innerHTML=data[this.arrl].variants[3]
    progress.style.width=`${this.progress}%`
    },
    
  }
  let btn1=document.querySelector("#btn1")
  let global=document.querySelector("#global")
  let global2=document.querySelector("#global2")
  let question=document.querySelector("#question")
  let varianta=document.querySelector("#varianta")
  let variantb=document.querySelector("#variantb")
  let variantc=document.querySelector("#variantc")
  let variantd=document.querySelector("#variantd")
  let variants=document.querySelector("#variants")
  let progress=document.querySelector("#progress")
  let global3=document.querySelector("#global3")
  let score=document.querySelector("#score")
  let Time=document.querySelector("#time")

  let num=60
  btn1.addEventListener("click",function(){
    
  function time (){
    
    Time.innerHTML=`${num}`
    num--;
    if(num==-1){

      global2.style.display="none"
  global3.style.display="block"
  score.innerHTML=Game.score
  clearInterval(inter)

    }
  }

    let inter=setInterval(time,1000)
    global.style.display="none"
    global2.style.display="block"
  Game.nextQuetion()
  console.log(Game.arrl);



  })


  variants.addEventListener("click",function(e){
    
    if(e.target.innerHTML===data[Game.arrl].true){
  Game.score=Game.score+10
 
  Game.nextQuetion()


}
else{
  console.log("sefdi");
 
    Game.nextQuetion()
    
}


console.log(Game.arrl);

if(Game.arrl==10){
  global2.style.display="none"
  global3.style.display="block"
  score.innerHTML=Game.score
  

}


  })




