var cmenus = chrome.contextMenus;
	 //var copyContextTypes = [ "page","selection","link","editable","image","video", "audio" ];
	 var copyContextTypes = [ "selection"];
     //var pasteContextTypes = ["text", "search", "tel", "url", "email", "number", "password"];
     var pasteContextTypes = ["editable"];
	 
		function onCopyContextClicked(info, tab) {            
            switch(info.menuItemId) {
                case cp1:
                    _copyClick ( info,tab, 'copy1' );
                    break;
                case cp2:
                    _copyClick ( info,tab, 'copy2' );
                    break;
				case cp3:
                    _copyClick ( info,tab, 'copy3' );
                    break;
				case cp4:
                    _copyClick ( info,tab, 'copy4' );
                    break;
				case cp5:
                    _copyClick ( info,tab, 'copy5' );
                    break;
				case cp6:
                    _copyClick ( info,tab, 'copy6' );
                    break;
				case cp7:
                    _copyClick ( info,tab, 'copy7' );
                    break;
				case cp8:
                    _copyClick ( info,tab, 'copy8' );
                    break;
				case cp9:
                    _copyClick ( info,tab, 'copy9' );
                    break;
				case cp10:
                    _copyClick ( info,tab, 'copy10' );
                    break;					
            }
        };
		
		function onPasteContextClicked(info, tab) {            
            switch(info.menuItemId) {
                case p1:
                    _pasteClick ( info,tab, 'copy1' );
                    break;
                case p2:
                    _pasteClick ( info,tab, 'copy2' );
                    break;
				case p3:
                    _pasteClick ( info,tab, 'copy3' );
                    break;
				case p4:
                    _pasteClick ( info,tab, 'copy4' );
                    break;
				case p5:
                    _pasteClick ( info,tab, 'copy5' );
                    break;
				case p6:
                    _pasteClick ( info,tab, 'copy6' );
                    break;
				case p7:
                    _pasteClick ( info,tab, 'copy7' );
                    break;
				case p8:
                    _pasteClick ( info,tab, 'copy8' );
                    break;
				case p9:
                    _pasteClick ( info,tab, 'copy9' );
                    break;
				case p10:
                    _pasteClick ( info,tab, 'copy10' );
                    break;					
            }
        };
		
		var copyContextTypeParent = chrome.contextMenus.create({ type: "normal",  title: "Copy", contexts: copyContextTypes, onclick: onCopyContextClicked });
        var cp1 = chrome.contextMenus.create({ type: "normal", title: "Copy 1", contexts: copyContextTypes, parentId: copyContextTypeParent, onclick: onCopyContextClicked });
        var cp2 = chrome.contextMenus.create({ type: "normal", title: "Copy 2", contexts: copyContextTypes, parentId: copyContextTypeParent, onclick: onCopyContextClicked });
        var cp3 = chrome.contextMenus.create({ type: "normal", title: "Copy 3", contexts: copyContextTypes, parentId: copyContextTypeParent, onclick: onCopyContextClicked });
        var cp4 = chrome.contextMenus.create({ type: "normal", title: "Copy 4", contexts: copyContextTypes, parentId: copyContextTypeParent, onclick: onCopyContextClicked });
        var cp5 = chrome.contextMenus.create({ type: "normal", title: "Copy 5", contexts: copyContextTypes, parentId: copyContextTypeParent, onclick: onCopyContextClicked });
        var cp6 = chrome.contextMenus.create({ type: "normal", title: "Copy 6", contexts: copyContextTypes, parentId: copyContextTypeParent, onclick: onCopyContextClicked });
        var cp7 = chrome.contextMenus.create({ type: "normal", title: "Copy 7", contexts: copyContextTypes, parentId: copyContextTypeParent, onclick: onCopyContextClicked });
        var cp8 = chrome.contextMenus.create({ type: "normal", title: "Copy 8", contexts: copyContextTypes, parentId: copyContextTypeParent, onclick: onCopyContextClicked });
        var cp9 = chrome.contextMenus.create({ type: "normal", title: "Copy 9", contexts: copyContextTypes, parentId: copyContextTypeParent, onclick: onCopyContextClicked });
        var cp10 = chrome.contextMenus.create({ type: "normal", title: "Copy 10", contexts: copyContextTypes, parentId: copyContextTypeParent, onclick: onCopyContextClicked });

		var pasteContextTypeParent = chrome.contextMenus.create({ type: "normal",  title: "Paste", contexts: pasteContextTypes, onclick: onPasteContextClicked });
        var p1 = chrome.contextMenus.create({ type: "normal", title: "Paste 1", contexts: pasteContextTypes, parentId: pasteContextTypeParent, onclick: onPasteContextClicked });
        var p2 = chrome.contextMenus.create({ type: "normal", title: "Paste 2", contexts: pasteContextTypes, parentId: pasteContextTypeParent, onclick: onPasteContextClicked });
        var p3 = chrome.contextMenus.create({ type: "normal", title: "Paste 3", contexts: pasteContextTypes, parentId: pasteContextTypeParent, onclick: onPasteContextClicked });
        var p4 = chrome.contextMenus.create({ type: "normal", title: "Paste 4", contexts: pasteContextTypes, parentId: pasteContextTypeParent, onclick: onPasteContextClicked });
        var p5 = chrome.contextMenus.create({ type: "normal", title: "Paste 5", contexts: pasteContextTypes, parentId: pasteContextTypeParent, onclick: onPasteContextClicked });
        var p6 = chrome.contextMenus.create({ type: "normal", title: "Paste 6", contexts: pasteContextTypes, parentId: pasteContextTypeParent, onclick: onPasteContextClicked });
        var p7 = chrome.contextMenus.create({ type: "normal", title: "Paste 7", contexts: pasteContextTypes, parentId: pasteContextTypeParent, onclick: onPasteContextClicked });
        var p8 = chrome.contextMenus.create({ type: "normal", title: "Paste 8", contexts: pasteContextTypes, parentId: pasteContextTypeParent, onclick: onPasteContextClicked });
        var p9 = chrome.contextMenus.create({ type: "normal", title: "Paste 9", contexts: pasteContextTypes, parentId: pasteContextTypeParent, onclick: onPasteContextClicked });
        var p10 = chrome.contextMenus.create({ type: "normal", title: "Paste 10", contexts: pasteContextTypes, parentId: pasteContextTypeParent, onclick: onPasteContextClicked });

	
function _copyClick ( info,tab, key) {
        var value = info.selectionText;
        var _win = chrome.extension.getBackgroundPage(); 
        var _d = _win.document;
        _d.execCommand("copy", false, null); 		
		//chrome.storage.local.set({key: value});
		var obj = {};
		obj[key] = value;
		/*chrome.storage.sync.set(obj, function() {
          //console.log('Value is set to ' + value);
		  alert("copied..."+value);
        });*/
		setCookie(key, value);
}
function _pasteClick ( info,tab, key) {		
		//var val = "/'"+key+"'/";
		/*chrome.storage.local.get([key], function(result) {          
		  alert(result.value);
        });*/
		/* chrome.storage.sync.get([key], function(result) {
          alert('Value currently is ' + result.value);
        });*/
	alert(getCookie(key));
      
		
/*
        var value = info.selectionText;
        var _win = chrome.extension.getBackgroundPage(); 
        var _d = _win.document;
        _d.execCommand("copy", false, null); 		
		chrome.storage.local.set({key: value});*/
}

function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
