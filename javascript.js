<SCRIPT LANGUAGE="JavaScript">

var num=1
img1 = new Image ()
img1.src = "Photos/S_S_Bienen/gloomy.JPG"
img2 = new Image ()
img2.src = "Photos/S_S_Bienen/hands.JPG"
img3 = new Image ()
img3.src = "Photos/S_S_Bienen/widepiano.JPG"
img4 = new Image ()
img4.src = "Photos/S_S_Bienen/ben.JPG" 
img5 = new Image ()
img5.src = "Photos/S_S_Bienen/beinen.JPG" 
img6 = new Image ()
img6.src = "Photos/S_S_Bienen/elevator.JPG" 
img7 = new Image ()
img7.src = "Photos/S_S_Bienen/casey.JPG" 

text1 = "Text for Picture One"
text2 = "Text for Picture Two"
text3 = "Text for Picture Three"
text4 = "Text for Picture Four"
text5 = "Text for Picture Five"
text6 = "Text for Picture Six"
text7 = "Text for Picture Seven"

function slideshowUp()
{
num=num+1
if (num==5)
{num=1}
document.mypic.src=eval("img"+num+".src")
document.joe.burns.value=eval("text"+num)
}

function slideshowBack()
{
num=num-1
if (num==0)
{num=4}
document.mypic.src=eval("img"+num+".src")
document.joe.burns.value=eval("text"+num)
}

</SCRIPT>
