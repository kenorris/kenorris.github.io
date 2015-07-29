<SCRIPT LANGUAGE="JavaScript">

var num=1
img1 = new Image ()
img1.src = "Photos/S_S_Bienen/gloomy.JPG"
img2 = new Image ()
img2.src = "interference.gif"
img3 = new Image ()
img3.src = "message.gif"
img4 = new Image ()
img4.src = "nervous.gif" 

text1 = "Text for Picture One"
text2 = "Text for Picture Two"
text3 = "Text for Picture Three"
text4 = "Text for Picture Four"

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
