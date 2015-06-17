/**
 * author Thomas Winkler
 * 
 * 1)	if a text was pasted into the textarea named "insertTextArea" this text is stored into g_textAreaContent 	-> OnPaste()
 * 2)	the text in "g_textAreaContent" is then used to build up a suffix tree										-> BuildSuffixTree()
 * 
 * 3)	if a text is entered into the input area named "insertKwiqArea" and entered, the WordTree will be generated	-> OnKeyDown()
 */

var g_textAreaContent = "";		//textArea for the text
var g_suffixTree = "";			//array for the sentences
var g_kwiqAreaContent = "";		//kwiqArea for the keyWordInContext


window.onload = Init;			//Initialize after loading the page

//initialize the pages by adding event handler etc.
function Init()
{
	document.getElementById( "insertTextArea" ).addEventListener("paste", OnPaste, false );			//add paste event listener
	document.getElementById( "insertKwiqArea" ).addEventListener("keydown", OnKeyDown, false );		//add keydown event listener
	
	document.getElementById("svgTreeArea").style.display = "none";									//hide the object
}

//the text was pasted
function OnPaste()
{
	setTimeout(function()
	{ 
		g_textAreaContent = document.getElementById("insertTextArea").value;
		BuildSuffixTree();
	}, 1000);
}

//Build up the suffix tree
function BuildSuffixTree()
{
	//store all sentences
	var arrayOfSentences = g_textAreaContent.split( "." );	//todo: regEx um auch die Zeichen ? und ! und : hinzuzufügen
	
	//go through all sentences
	for( var sentence in arrayOfSentences )
	{
		//split of a sentence into words
		var arrayOfWords = sentence.split(" ");
		
		//go through all words
		for( var word in arrayOfWords)
		{
			//store the data .... words are keys and rest ofsentences are value ... how store more values for one key
		}
	}
	
	alert( "" + g_arrayAreaContent[0] );
}

//any key was pressed
function OnKeyDown()
{	
	if( event.keyCode == 13 )
	{
		var isTextAreaFilled = document.getElementById( "insertTextArea" 	).value.length	>= 1;	//text
		var isKwiqAreaFilled = document.getElementById( "insertKwiqArea").value.length 		>= 1;	//key word
			
		//if text and keyword are filled, build the tree
		if( isTextAreaFilled == true && isKwiqAreaFilled == true )
		{
			g_kwiqAreaContent = document.getElementById( "insertKwiqArea" 	).value;
			BuildTree();		
		}
		else if( isTextAreaFilled == false && isKwiqAreaFilled == true )
		{
			alert("The text has to be entered");
		}
		else if( isTextAreaFilled == true && isKwiqAreaFilled == false )
		{
			alert("The key word has to be entered");
		}
		else
		{
			alert("The text and the key word has to be entered");
		}
	}
}

//build the tree
function BuildTree()
{
	document.getElementById("svgTreeArea").style.display = "inline";	//show the object
}
